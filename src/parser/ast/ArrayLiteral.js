import Node from './Node';

/**
 * ArrayLiteral 
 * @param {array} members 
 * @param {Location} location 
 */
class ArrayLiteral extends Node {

    constructor(members, location) {

        super();
        this.type = 'array-literal';
        this.members = members;
        this.location = location;
    }

    transpile() {

        return '[' + this.members.map(m => m.transpile()).join(',') + ']';

    }

    compile(o) {

        var node = this.sourceNode(o.file, '[');
        this.compileList(this.members, node, o).add(']');
        return node;

    }
}

export default ArrayLiteral
