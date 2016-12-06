%lex

DecimalDigit [0-9]
DecimalDigits [0-9]+
NonZeroDigit [1-9]
OctalDigit [0-7]
HexDigit [0-9a-fA-F]
ExponentIndicator [eE]
SignedInteger [+-]?[0-9]+
DecimalIntegerLiteral [-]?([0]|({NonZeroDigit}{DecimalDigits}*))
ExponentPart {ExponentIndicator}{SignedInteger}
OctalIntegerLiteral [0]{OctalDigit}+
HexIntegerLiteral [0][xX]{HexDigit}+
DecimalMixedLiteral ([-]?{DecimalIntegerLiteral}\.{DecimalDigits}*{ExponentPart}?)
DecimalFractionLiteral (\.{DecimalDigits}{ExponentPart}?)
DecimalWholeLiteral ({DecimalIntegerLiteral}{ExponentPart}?)
DecimalLiteral {DecimalMixedLiteral}|{DecimalFractionLiteral}|{DecimalWholeLiteral}
NumberLiteral {DecimalLiteral}|{HexIntegerLiteral}|{OctalIntegerLiteral}
Identifier [a-zA-Z$_][a-zA-Z$_0-9-]*
DotIdentifier [a-zA-Z$_][a-zA-Z$_0-9.-]*
LineContinuation \\(\r\n|\r|\n)
OctalEscapeSequence (?:[1-7][0-7]{0,2}|[0-7]{2,3})
HexEscapeSequence [x]{HexDigit}{2}
UnicodeEscapeSequence [u]{HexDigit}{4}
SingleEscapeCharacter [\'\"\\bfnrtv]
NonEscapeCharacter [^\'\"\\bfnrtv0-9xu]
CharacterEscapeSequence {SingleEscapeCharacter}|{NonEscapeCharacter}
EscapeSequence {CharacterEscapeSequence}|{OctalEscapeSequence}|{HexEscapeSequence}|{UnicodeEscapeSequence}
DoubleStringCharacter ([^\"\\\n\r]+)|(\\{EscapeSequence})|{LineContinuation}
SingleStringCharacter ([^\'\\\n\r]+)|(\\{EscapeSequence})|{LineContinuation}
TemplateStringCharacter ([^\`\\\n\r]+)|(\\{EscapeSequence})|{LineContinuation}
DoubleStringLiteral (\"{DoubleStringCharacter}*\")
SingleStringLiteral (\'{SingleStringCharacter}*\')
TemplateStringLiteral (\`{TemplateStringCharacter}*\`)
StringLiteral {DoubleStringLiteral}|{SingleStringLiteral}|{TemplateStringLiteral}
Text ({DoubleStringCharacter}*)|({SingleStringCharacter}*)

/* Lexer flags */
%options flex
%x COMMENT

%{

 parser.parseError = function(errStr, object) {
     var lines = errStr.split("\n");
     lines[0] = "SyntaxError at: " + (object.loc.first_column + 1);
     throw new SyntaxError(lines.join("\n"));
 };

%}

%%

/* Lexer rules */

<*>\s+                                          return;
'import'                                        return 'IMPORT';
'from'                                          return 'FROM';
'as'                                            return 'AS';
'task'                                          return 'TASK';
'new'                                           return 'NEW';
'true'|'false'                                  return 'BOOLEAN';
{NumberLiteral}                                 return 'NUMBER_LITERAL';
{StringLiteral}                                 return 'STRING_LITERAL';
'/*'               this.begin('COMMENT');       return;
<COMMENT>[.\n]+                                 return;
<COMMENT>'*/'      this.popState();             return;
'=>'                                            return '=>';
'::'                                            return '::';
'>'                                             return '>';
'<'                                             return '<';
'('                                             return '(';
')'                                             return ')';
'['                                             return '[';
']'                                             return ']';
';'                                             return ';'
':'                                             return ':';
'='                                             return '='
'=='                                            return '==';
'!='                                            return '!=';
'>='                                            return '>=';
'<='                                            return '<=';
'+'                                             return '+';
'-'                                             return '-';
'*'                                             return '*';
'/'                                             return '/';
'!'                                             return '!';
','                                             return ',';
'?'                                             return '?';
'.'                                             return '.';
'{'                                             return '{';
'}'                                             return '}';
{Identifier}                                    return 'IDENTIFIER';
<*><<EOF>>                                      return 'EOF';

/lex
%right <*> '?' ':' '=>'
%right '!'

%ebnf
%start task_file
%%

task_file
          : import_statement* task_statement* EOF 
            {return $$ = new yy.ast.TaskFile($1, $2, @$);}
          ;

import_statement    
          : IMPORT import_member FROM string_literal ';'
            {$$ = new yy.ast.ImportStatement($2, $4, @$);}
          ;

import_member
          : identifier
            {$$ = new yy.ast.DefaultMember($1, @$);}

          | '*' AS identifier
            {$$ = new yy.ast.DefaultMember('* as '+$3, @$);} 
          ;

task_statement
          : TASK identifier ':' task_type '{' task_body '}'
            {$$ = new yy.ast.TaskStatement($2, $4, $6, @$);}
          ;

task_type
          : (identifier|member_access)
          ;
             
task_body
          : property_assignment
            {$$ = [$1];}

          | function_expression
            {$$ = [$1];}

          | task_body property_assignment
            {$$ = $1.concat($2);}

          | task_body function_expression
            {$$ = $1.concat($2);}
          ;

properties
          : property_assignment
            {$$ = [$1];}

          | properties property_assignment
            {$$ = $1.concat($2);}
          ;

property_assignment
          : identifier ':' expression
            {$$ = new yy.ast.PropertyAssignment($1, $3, @$);}
          ;

calls
          : function_expression
            {$$ = [$1];}

          | calls function_expression
            {$$ = $1.concat($2);}
          ;

function_expression
          : identifier '(' arguments ')'
            {$$ = new yy.ast.FunctionExpression($1, $3, @$);} 

          | identifier '('  ')'
            {$$ = new yy.ast.FunctionExpression($1, [], @$);} 
          ;

arguments
          : expression                      {$$ = [$1];          }
          | arguments ',' expression        {$$ = $1.concat($3); }
          ;

expression
          : grouped_expression
          | ternary_expression
          | binary_expression
          | unary_expression
          | value_expression
          ;

grouped_expression
          : '('  expression ')' 
            {$$ = $2;}
          ;

ternary_expression
          : expression  '?'  expression ':' expression
            {$$ = new yy.ast.TernaryExpression($1, $3, $5, @$);}
          ;

binary_expression
          : value_expression binary_operator value_expression
            {$$ = new yy.ast.BinaryExpression($1, $2, $3, @$);} 

          | grouped_expression binary_operator grouped_expression
            {$$ = new yy.ast.BinaryExpression($1, $2, $3, @$);} 
          ;

binary_operator
          : ('>'|'>='|'<'|'<='|'=='|'!='|'+'|'/'|'-'|'=') 
            { $$ = yy.help.convertOperator($1);}
          ;

unary_expression
          : '!' expression
            {$$ = new yy.ast.UnaryExpression($1, $2, @$);} 
          ;

value_expression
          : variable_expression
          | literal_expression
          | property_expression
          | function_expression
          | method_expression
          | bind_expression
          | new_expression
          ;

variable_expression
          : identifier {$$ = new yy.ast.VariableExpression($1, @$); }
          ;

literal_expression
          : object_literal
          | array_literal
          | string_literal
          | number_literal
          | boolean_literal
          ;

object_literal
          : '{' '}'
            {$$ = new yy.ast.ObjectLiteral([], @$); }

          | '{' key_value_pairs '}'
            {$$ = new yy.ast.ObjectLiteral($2, @$); }
          ;

key_value_pairs
          : key_value_pair 
           {$$ = [$1]; }
          
          | key_value_pairs ',' key_value_pair 
           {$$ = $1.concat($3); }
          ;

key_value_pair
          : (identifier|STRING_LITERAL) ':' expression
            {$$ = {key:$1.split('"').join('').split('\'').join(''), value:$3}; }
          ;

array_literal
          : '['']' 
            {$$ = new yy.ast.ArrayLiteral({}, @$); }

          | '[' arguments ']'
            {$$ = new yy.ast.ArrayLiteral($2, @$); }
          ;

string_literal
          : STRING_LITERAL {$$ = new yy.ast.StringLiteral($1, @$); }
          ;

number_literal
          : NUMBER_LITERAL 
          {$$ = new yy.ast.NumberLiteral($1, @$); }
          ;

boolean_literal
          : BOOLEAN  
          {$$ = new yy.ast.BooleanLiteral($1, @$);}
          ;


method_expression
          : member_access '(' arguments ')'
            {$$ = new yy.ast.MethodExpression($1, $3, @$);} 

          | member_access '(' ')'
            {$$ = new yy.ast.MethodExpression($1, [], @$);} 
          ;

property_expression
          : member_access
            {$$ = new yy.ast.PropertyExpression($1, @$); }
          ;

bind_expression
          : identifier '::' 'identifier'
            {$$ = new yy.ast.BindExpression($1, $3, [] , @$);}

          |  identifier '::' 'identifier' '(' arguments ')'
            {$$ = new yy.ast.BindExpression($1, $3, $5 , @$);}

          | member_access '::' identifier 
            {$$ = new yy.ast.BindExpression($1, $3, [], @$);}

          | member_access '::' identifier '(' arguments ')'
            {$$ = new yy.ast.BindExpression($1, $3, $5, @$);}
          ;

new_expression
          : NEW (indentifier|member_access) '(' arguments ')'
            {$$ = new yy.ast.NewExpression($2, $4, @$);} 
          ;

function_literal
          : parameters '=>'  expression 
            {$$ = new yy.ast.FunctionLiteral($1, $3, @$); }

          | identifier '=>'  expression 
            {$$ = new yy.ast.FunctionLiteral([$1], $3, @$); }
          ;

parameters
          : '(' ')'                             {$$ = [];                      }
          | '(' identifier ')'                  {$$ = [$2];                    }
          | '(' parameters  ',' identifier ')'  {$$ = $2.concat($4);           }
          ;

member_access
          : identifier '.' identifier           {$$ = $1+'.'+$3;               }
          | identifier '.' member_access        {$$ = $1+'.'+$3;               } 
          ;

identifier
          : IDENTIFIER {$$ = $1;}
          ;


