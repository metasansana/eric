import Node from './Node';

/**
 * FunctionExpression
 */
class FunctionExpression extends Node {

    constructor(name, args, location) {

        super();
        this.type = 'function-expression';
        this.name = name;
        this.arguments = args;
        this.location = location;

    }

    transpile() {

        var args = this.transpileList(this.arguments);
        return `${this.name}(${args})`;

    }

    compile(o) {

        var node = this.sourceNode(o.file, `this.${this.name}`).
        add('(');

        return this.compileList(this.arguments, node, o).
        add(')');



    }

}
export default FunctionExpression
