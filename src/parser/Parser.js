/* parser generated by jison 0.4.17 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var Parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[6,8,17],$V1=[6,17],$V2=[1,12],$V3=[1,18],$V4=[1,26],$V5=[22,68],$V6=[1,37],$V7=[18,20,22,29,31,32,38,56,61,68,69,70,71,72,73,74,75,76,77,78],$V8=[1,61],$V9=[1,44],$Va=[1,45],$Vb=[1,62],$Vc=[1,63],$Vd=[1,64],$Ve=[1,60],$Vf=[1,68],$Vg=[18,22,31,32,38,56,68],$Vh=[1,71],$Vi=[1,72],$Vj=[1,73],$Vk=[1,74],$Vl=[1,75],$Vm=[1,76],$Vn=[1,77],$Vo=[1,78],$Vp=[1,79],$Vq=[1,80],$Vr=[18,22,31,32,38,56,68,69,70,71,72,73,74,75,76,77,78],$Vs=[1,96],$Vt=[1,100],$Vu=[31,32,56],$Vv=[20,29,55,57,58,59,62,68],$Vw=[22,32];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"task_file":3,"task_file_repetition0":4,"task_file_repetition1":5,"EOF":6,"import_statement":7,"IMPORT":8,"import_member":9,"FROM":10,"string_literal":11,";":12,"identifier":13,"*":14,"AS":15,"task_statement":16,"TASK":17,":":18,"task_type":19,"{":20,"task_body":21,"}":22,"task_type_group0":23,"property_assignment":24,"function_expression":25,"properties":26,"expression":27,"calls":28,"(":29,"arguments":30,")":31,",":32,"grouped_expression":33,"ternary_expression":34,"binary_expression":35,"unary_expression":36,"value_expression":37,"?":38,"binary_operator":39,"binary_operator_group0":40,"!":41,"variable_expression":42,"literal_expression":43,"property_expression":44,"method_expression":45,"bind_expression":46,"new_expression":47,"object_literal":48,"array_literal":49,"number_literal":50,"boolean_literal":51,"key_value_pairs":52,"key_value_pair":53,"key_value_pair_group0":54,"[":55,"]":56,"STRING_LITERAL":57,"NUMBER_LITERAL":58,"BOOLEAN":59,"member_access":60,"::":61,"NEW":62,"new_expression_group0":63,"function_literal":64,"parameters":65,"=>":66,".":67,"IDENTIFIER":68,">":69,">=":70,"<":71,"<=":72,"==":73,"!=":74,"+":75,"/":76,"-":77,"=":78,"indentifier":79,"$accept":0,"$end":1},
terminals_: {2:"error",6:"EOF",8:"IMPORT",10:"FROM",12:";",14:"*",15:"AS",17:"TASK",18:":",20:"{",22:"}",29:"(",31:")",32:",",38:"?",41:"!",55:"[",56:"]",57:"STRING_LITERAL",58:"NUMBER_LITERAL",59:"BOOLEAN",61:"::",62:"NEW",66:"=>",67:".",68:"IDENTIFIER",69:">",70:">=",71:"<",72:"<=",73:"==",74:"!=",75:"+",76:"/",77:"-",78:"=",79:"indentifier"},
productions_: [0,[3,3],[7,5],[9,1],[9,3],[16,7],[19,1],[21,1],[21,1],[21,2],[21,2],[26,1],[26,2],[24,3],[28,1],[28,2],[25,4],[25,3],[30,1],[30,3],[27,1],[27,1],[27,1],[27,1],[27,1],[33,3],[34,5],[35,3],[35,3],[39,1],[36,2],[37,1],[37,1],[37,1],[37,1],[37,1],[37,1],[37,1],[42,1],[43,1],[43,1],[43,1],[43,1],[43,1],[48,2],[48,3],[52,1],[52,3],[53,3],[49,2],[49,3],[11,1],[50,1],[51,1],[45,4],[45,3],[44,1],[46,3],[46,6],[46,3],[46,6],[47,5],[64,3],[64,3],[65,2],[65,3],[65,5],[60,3],[60,3],[13,1],[4,0],[4,2],[5,0],[5,2],[23,1],[23,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[54,1],[54,1],[63,1],[63,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return this.$ = new yy.ast.TaskFile($$[$0-2], $$[$0-1], this._$);
break;
case 2:
this.$ = new yy.ast.ImportStatement($$[$0-3], $$[$0-1], this._$);
break;
case 3:
this.$ = new yy.ast.DefaultMember($$[$0], this._$);
break;
case 4:
this.$ = new yy.ast.DefaultMember('* as '+$$[$0], this._$);
break;
case 5:
this.$ = new yy.ast.TaskStatement($$[$0-5], $$[$0-3], $$[$0-1], this._$);
break;
case 7: case 8: case 11: case 14:
this.$ = [$$[$0]];
break;
case 9: case 10: case 12: case 15:
this.$ = $$[$0-1].concat($$[$0]);
break;
case 13:
this.$ = new yy.ast.PropertyAssignment($$[$0-2], $$[$0], this._$);
break;
case 16:
this.$ = new yy.ast.FunctionExpression($$[$0-3], $$[$0-1], this._$);
break;
case 17:
this.$ = new yy.ast.FunctionExpression($$[$0-2], [], this._$);
break;
case 18:
this.$ = [$$[$0]];          
break;
case 19: case 47:
this.$ = $$[$0-2].concat($$[$0]); 
break;
case 25:
this.$ = $$[$0-1];
break;
case 26:
this.$ = new yy.ast.TernaryExpression($$[$0-4], $$[$0-2], $$[$0], this._$);
break;
case 27: case 28:
this.$ = new yy.ast.BinaryExpression($$[$0-2], $$[$0-1], $$[$0], this._$);
break;
case 29:
 this.$ = yy.help.convertOperator($$[$0]);
break;
case 30:
this.$ = new yy.ast.UnaryExpression($$[$0-1], $$[$0], this._$);
break;
case 38:
this.$ = new yy.ast.VariableExpression($$[$0], this._$); 
break;
case 44:
this.$ = new yy.ast.ObjectLiteral([], this._$); 
break;
case 45:
this.$ = new yy.ast.ObjectLiteral($$[$0-1], this._$); 
break;
case 46:
this.$ = [$$[$0]]; 
break;
case 48:
this.$ = {key:$$[$0-2].split('"').join('').split('\'').join(''), value:$$[$0]}; 
break;
case 49:
this.$ = new yy.ast.ArrayLiteral({}, this._$); 
break;
case 50:
this.$ = new yy.ast.ArrayLiteral($$[$0-1], this._$); 
break;
case 51:
this.$ = new yy.ast.StringLiteral($$[$0], this._$); 
break;
case 52:
this.$ = new yy.ast.NumberLiteral($$[$0], this._$); 
break;
case 53:
this.$ = new yy.ast.BooleanLiteral($$[$0], this._$);
break;
case 54:
this.$ = new yy.ast.MethodExpression($$[$0-3], $$[$0-1], this._$);
break;
case 55:
this.$ = new yy.ast.MethodExpression($$[$0-2], [], this._$);
break;
case 56:
this.$ = new yy.ast.PropertyExpression($$[$0], this._$); 
break;
case 57:
this.$ = new yy.ast.BindExpression($$[$0-2], $$[$0], [] , this._$);
break;
case 58:
this.$ = new yy.ast.BindExpression($$[$0-5], $$[$0-3], $$[$0-1] , this._$);
break;
case 59:
this.$ = new yy.ast.BindExpression($$[$0-2], $$[$0], [], this._$);
break;
case 60:
this.$ = new yy.ast.BindExpression($$[$0-5], $$[$0-3], $$[$0-1], this._$);
break;
case 61:
this.$ = new yy.ast.NewExpression($$[$0-3], $$[$0-1], this._$);
break;
case 62:
this.$ = new yy.ast.FunctionLiteral($$[$0-2], $$[$0], this._$); 
break;
case 63:
this.$ = new yy.ast.FunctionLiteral([$$[$0-2]], $$[$0], this._$); 
break;
case 64:
this.$ = [];                      
break;
case 65:
this.$ = [$$[$0-1]];                    
break;
case 66:
this.$ = $$[$0-3].concat($$[$0-1]);           
break;
case 67: case 68:
this.$ = $$[$0-2]+'.'+$$[$0];               
break;
case 69:
this.$ = $$[$0];
break;
case 70: case 72:
this.$ = [];
break;
case 71: case 73:
$$[$0-1].push($$[$0]);
break;
}
},
table: [o($V0,[2,70],{3:1,4:2}),{1:[3]},o($V1,[2,72],{5:3,7:4,8:[1,5]}),{6:[1,6],16:7,17:[1,8]},o($V0,[2,71]),{9:9,13:10,14:[1,11],68:$V2},{1:[2,1]},o($V1,[2,73]),{13:13,68:$V2},{10:[1,14]},{10:[2,3]},{15:[1,15]},o([10,18,20,22,29,31,32,38,56,61,67,68,69,70,71,72,73,74,75,76,77,78],[2,69]),{18:[1,16]},{11:17,57:$V3},{13:19,68:$V2},{13:22,19:20,23:21,60:23,68:$V2},{12:[1,24]},o([12,18,22,31,32,38,56,68,69,70,71,72,73,74,75,76,77,78],[2,51]),{10:[2,4]},{20:[1,25]},{20:[2,6]},{20:[2,74],67:$V4},{20:[2,75]},o($V0,[2,2]),{13:30,21:27,24:28,25:29,68:$V2},{13:31,60:32,68:$V2},{13:30,22:[1,33],24:34,25:35,68:$V2},o($V5,[2,7]),o($V5,[2,8]),{18:[1,36],29:$V6},o($V7,[2,67],{67:$V4}),o($V7,[2,68]),o($V1,[2,5]),o($V5,[2,9]),o($V5,[2,10]),{11:56,13:53,20:$V8,25:49,27:38,29:$V9,33:39,34:40,35:41,36:42,37:43,41:$Va,42:46,43:47,44:48,45:50,46:51,47:52,48:54,49:55,50:57,51:58,55:$Vb,57:$V3,58:$Vc,59:$Vd,60:59,62:$Ve,68:$V2},{11:56,13:53,20:$V8,25:49,27:67,29:$V9,30:65,31:[1,66],33:39,34:40,35:41,36:42,37:43,41:$Va,42:46,43:47,44:48,45:50,46:51,47:52,48:54,49:55,50:57,51:58,55:$Vb,57:$V3,58:$Vc,59:$Vd,60:59,62:$Ve,68:$V2},o($V5,[2,13],{38:$Vf}),o($Vg,[2,20],{39:69,40:70,69:$Vh,70:$Vi,71:$Vj,72:$Vk,73:$Vl,74:$Vm,75:$Vn,76:$Vo,77:$Vp,78:$Vq}),o($Vg,[2,21]),o($Vg,[2,22]),o($Vg,[2,23]),o($Vg,[2,24],{40:70,39:81,69:$Vh,70:$Vi,71:$Vj,72:$Vk,73:$Vl,74:$Vm,75:$Vn,76:$Vo,77:$Vp,78:$Vq}),{11:56,13:53,20:$V8,25:49,27:82,29:$V9,33:39,34:40,35:41,36:42,37:43,41:$Va,42:46,43:47,44:48,45:50,46:51,47:52,48:54,49:55,50:57,51:58,55:$Vb,57:$V3,58:$Vc,59:$Vd,60:59,62:$Ve,68:$V2},{11:56,13:53,20:$V8,25:49,27:83,29:$V9,33:39,34:40,35:41,36:42,37:43,41:$Va,42:46,43:47,44:48,45:50,46:51,47:52,48:54,49:55,50:57,51:58,55:$Vb,57:$V3,58:$Vc,59:$Vd,60:59,62:$Ve,68:$V2},o($Vr,[2,31]),o($Vr,[2,32]),o($Vr,[2,33]),o($Vr,[2,34]),o($Vr,[2,35]),o($Vr,[2,36]),o($Vr,[2,37]),o($Vr,[2,38],{29:$V6,61:[1,84],67:$V4}),o($Vr,[2,39]),o($Vr,[2,40]),o($Vr,[2,41]),o($Vr,[2,42]),o($Vr,[2,43]),o($Vr,[2,56],{29:[1,85],61:[1,86]}),{13:90,60:89,63:87,68:$V2,79:[1,88]},{13:95,22:[1,91],52:92,53:93,54:94,57:$Vs,68:$V2},{11:56,13:53,20:$V8,25:49,27:67,29:$V9,30:98,33:39,34:40,35:41,36:42,37:43,41:$Va,42:46,43:47,44:48,45:50,46:51,47:52,48:54,49:55,50:57,51:58,55:$Vb,56:[1,97],57:$V3,58:$Vc,59:$Vd,60:59,62:$Ve,68:$V2},o($Vr,[2,52]),o($Vr,[2,53]),{31:[1,99],32:$Vt},o($Vr,[2,17]),o($Vu,[2,18],{38:$Vf}),{11:56,13:53,20:$V8,25:49,27:101,29:$V9,33:39,34:40,35:41,36:42,37:43,41:$Va,42:46,43:47,44:48,45:50,46:51,47:52,48:54,49:55,50:57,51:58,55:$Vb,57:$V3,58:$Vc,59:$Vd,60:59,62:$Ve,68:$V2},{29:$V9,33:102},o($Vv,[2,29]),o($Vv,[2,76]),o($Vv,[2,77]),o($Vv,[2,78]),o($Vv,[2,79]),o($Vv,[2,80]),o($Vv,[2,81]),o($Vv,[2,82]),o($Vv,[2,83]),o($Vv,[2,84]),o($Vv,[2,85]),{11:56,13:53,20:$V8,25:49,37:103,42:46,43:47,44:48,45:50,46:51,47:52,48:54,49:55,50:57,51:58,55:$Vb,57:$V3,58:$Vc,59:$Vd,60:59,62:$Ve,68:$V2},{31:[1,104],38:$Vf},o($Vg,[2,30]),{13:105,68:$V2},{11:56,13:53,20:$V8,25:49,27:67,29:$V9,30:106,31:[1,107],33:39,34:40,35:41,36:42,37:43,41:$Va,42:46,43:47,44:48,45:50,46:51,47:52,48:54,49:55,50:57,51:58,55:$Vb,57:$V3,58:$Vc,59:$Vd,60:59,62:$Ve,68:$V2},{13:108,68:$V2},{29:[1,109]},{29:[2,88]},{29:[2,89]},{67:$V4},o($Vr,[2,44]),{22:[1,110],32:[1,111]},o($Vw,[2,46]),{18:[1,112]},{18:[2,86]},{18:[2,87]},o($Vr,[2,49]),{32:$Vt,56:[1,113]},o($Vr,[2,16]),{11:56,13:53,20:$V8,25:49,27:114,29:$V9,33:39,34:40,35:41,36:42,37:43,41:$Va,42:46,43:47,44:48,45:50,46:51,47:52,48:54,49:55,50:57,51:58,55:$Vb,57:$V3,58:$Vc,59:$Vd,60:59,62:$Ve,68:$V2},{18:[1,115],38:$Vf},o($Vg,[2,28]),o($Vg,[2,27]),o($Vr,[2,25]),o($Vr,[2,57],{29:[1,116]}),{31:[1,117],32:$Vt},o($Vr,[2,55]),o($Vr,[2,59],{29:[1,118]}),{11:56,13:53,20:$V8,25:49,27:67,29:$V9,30:119,33:39,34:40,35:41,36:42,37:43,41:$Va,42:46,43:47,44:48,45:50,46:51,47:52,48:54,49:55,50:57,51:58,55:$Vb,57:$V3,58:$Vc,59:$Vd,60:59,62:$Ve,68:$V2},o($Vr,[2,45]),{13:95,53:120,54:94,57:$Vs,68:$V2},{11:56,13:53,20:$V8,25:49,27:121,29:$V9,33:39,34:40,35:41,36:42,37:43,41:$Va,42:46,43:47,44:48,45:50,46:51,47:52,48:54,49:55,50:57,51:58,55:$Vb,57:$V3,58:$Vc,59:$Vd,60:59,62:$Ve,68:$V2},o($Vr,[2,50]),o($Vu,[2,19],{38:$Vf}),{11:56,13:53,20:$V8,25:49,27:122,29:$V9,33:39,34:40,35:41,36:42,37:43,41:$Va,42:46,43:47,44:48,45:50,46:51,47:52,48:54,49:55,50:57,51:58,55:$Vb,57:$V3,58:$Vc,59:$Vd,60:59,62:$Ve,68:$V2},{11:56,13:53,20:$V8,25:49,27:67,29:$V9,30:123,33:39,34:40,35:41,36:42,37:43,41:$Va,42:46,43:47,44:48,45:50,46:51,47:52,48:54,49:55,50:57,51:58,55:$Vb,57:$V3,58:$Vc,59:$Vd,60:59,62:$Ve,68:$V2},o($Vr,[2,54]),{11:56,13:53,20:$V8,25:49,27:67,29:$V9,30:124,33:39,34:40,35:41,36:42,37:43,41:$Va,42:46,43:47,44:48,45:50,46:51,47:52,48:54,49:55,50:57,51:58,55:$Vb,57:$V3,58:$Vc,59:$Vd,60:59,62:$Ve,68:$V2},{31:[1,125],32:$Vt},o($Vw,[2,47]),o($Vw,[2,48],{38:$Vf}),o([18,22,31,32,56,68],[2,26],{38:$Vf}),{31:[1,126],32:$Vt},{31:[1,127],32:$Vt},o($Vr,[2,61]),o($Vr,[2,58]),o($Vr,[2,60])],
defaultActions: {6:[2,1],10:[2,3],19:[2,4],21:[2,6],23:[2,75],88:[2,88],89:[2,89],95:[2,86],96:[2,87]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        function _parseError (msg, hash) {
            this.message = msg;
            this.hash = hash;
        }
        _parseError.prototype = Error;

        throw new _parseError(str, hash);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"flex":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:return;
break;
case 1:return 8;
break;
case 2:return 10;
break;
case 3:return 15;
break;
case 4:return 17;
break;
case 5:return 62;
break;
case 6:return 59;
break;
case 7:return 58;
break;
case 8:return 57;
break;
case 9:this.begin('COMMENT');       return;
break;
case 10:return;
break;
case 11:this.popState();             return;
break;
case 12:return 66;
break;
case 13:return 61;
break;
case 14:return 69;
break;
case 15:return 71;
break;
case 16:return 29;
break;
case 17:return 31;
break;
case 18:return 55;
break;
case 19:return 56;
break;
case 20:return 12
break;
case 21:return 18;
break;
case 22:return 78
break;
case 23:return 73;
break;
case 24:return 74;
break;
case 25:return 70;
break;
case 26:return 72;
break;
case 27:return 75;
break;
case 28:return 77;
break;
case 29:return 14;
break;
case 30:return 76;
break;
case 31:return 41;
break;
case 32:return 32;
break;
case 33:return 38;
break;
case 34:return 67;
break;
case 35:return 20;
break;
case 36:return 22;
break;
case 37:return 68;
break;
case 38:return 6;
break;
case 39:console.log(yy_.yytext);
break;
}
},
rules: [/^(?:\s+)/,/^(?:import)/,/^(?:from)/,/^(?:as)/,/^(?:task)/,/^(?:new)/,/^(?:true|false)/,/^(?:(((([-]?([-]?([0]|(([1-9])([0-9]+)*)))\.([0-9]+)*(([eE])([+-]?[0-9]+))?))|((\.([0-9]+)(([eE])([+-]?[0-9]+))?))|((([-]?([0]|(([1-9])([0-9]+)*)))(([eE])([+-]?[0-9]+))?)))|([0][xX]([0-9a-fA-F])+)|([0]([0-7])+)))/,/^(?:((("(([^\"\\\n\r]+)|(\\((([\'\"\\bfnrtv])|([^\'\"\\bfnrtv0-9xu]))|((?:[1-7][0-7]{0,2}|[0-7]{2,3}))|([x]([0-9a-fA-F]){2})|([u]([0-9a-fA-F]){4})))|(\\(\r\n|\r|\n)))*"))|(('(([^\'\\\n\r]+)|(\\((([\'\"\\bfnrtv])|([^\'\"\\bfnrtv0-9xu]))|((?:[1-7][0-7]{0,2}|[0-7]{2,3}))|([x]([0-9a-fA-F]){2})|([u]([0-9a-fA-F]){4})))|(\\(\r\n|\r|\n)))*'))|((`(([^\`\\\n\r]+)|(\\((([\'\"\\bfnrtv])|([^\'\"\\bfnrtv0-9xu]))|((?:[1-7][0-7]{0,2}|[0-7]{2,3}))|([x]([0-9a-fA-F]){2})|([u]([0-9a-fA-F]){4})))|(\\(\r\n|\r|\n)))*`))))/,/^(?:\/\*)/,/^(?:[.\n]+)/,/^(?:\*\/)/,/^(?:=>)/,/^(?:::)/,/^(?:>)/,/^(?:<)/,/^(?:\()/,/^(?:\))/,/^(?:\[)/,/^(?:\])/,/^(?:;)/,/^(?::)/,/^(?:=)/,/^(?:==)/,/^(?:!=)/,/^(?:>=)/,/^(?:<=)/,/^(?:\+)/,/^(?:-)/,/^(?:\*)/,/^(?:\/)/,/^(?:!)/,/^(?:,)/,/^(?:\?)/,/^(?:\.)/,/^(?:\{)/,/^(?:\})/,/^(?:([a-zA-Z$_][a-zA-Z$_0-9-]*))/,/^(?:$)/,/^(?:.)/],
conditions: {"COMMENT":{"rules":[0,10,11,38],"inclusive":false},"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = Parser;
exports.Parser = Parser.Parser;
exports.parse = function () { return Parser.parse.apply(Parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}