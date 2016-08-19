import Node from './Node';

/**
 * MethodExpression 
 * @param {string} path 
 * @param {array} args 
 */
class MethodExpression extends Node {

    constructor(path, args, location) {

        super();
        this.type = 'method-expression';
        this.path = path;
        this.arguments = args;
        this.location = location;

    }

    transpile() {

        var args = this.arguments.map(m => m.transpile()).join(',');
        return `${this.path}(${args})`;

    }

    compile(o) {

        var node = this.sourceNode(o.file, this.path);

        node.add('(');

        return this.compileList(this.arguments, node, o).
        add(')');


    }

}
export default MethodExpression
