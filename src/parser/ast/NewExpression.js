import Node from './Node';

/**
 * NewExpression
 */
class NewExpression extends Node {

    constructor(name, args, location) {

        super();
        this.type = 'new-expression';
        this.name = name;
        this.arguments = args;
        this.location = location;

    }

    transpile() {

        var args = this.transpileList(this.arguments);
        return `new ${this.name}(${args})`;

    }

    compile(o) {

        var node = this.sourceNode(o.file, `new ${this.name}`).
        add('(');

        return this.compileList(this.arguments, node, o);

    }

}
export default NewExpression
