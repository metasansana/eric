import Node from './Node';

/**
 * VariableExpression 
 * @param {string} name
 */
class VariableExpression extends Node {

    constructor(name, location) {

        super();
        this.type = 'variable-expression';
        this.name = name;
        this.location = location;

    }

    transpile() {

        return this.name;

    }

    compile(o) {

        return this.sourceNode(o.fileName, this.name);

    }

}

export default VariableExpression
