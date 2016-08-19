import Node from './Node';

/**
 * UnaryExpression 
 * @param {string} op 
 * @param {Expression} expression 
 * @param {Location} location 
 */
class UnaryExpression extends Node {

    constructor(op, expression, location) {

        super();
        this.op = op;
        this.expression = expression;
        this.location = location;

    }

    transpile() {

        return `${this.op}${this.expression.transpile()}`;

    }

    compile(o) {

        return this.sourceNode(o.file, this.op).
        add(this.expression.compile(o));

    }

}
export default UnaryExpression
