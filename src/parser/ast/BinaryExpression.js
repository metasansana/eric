import Node from './Node';

/**
 * BinaryExpression 
 */
class BinaryExpression extends Node {

    constructor(left, op, right, location) {

        super();
        this.type = 'binary-expression';
        this.left = left;
        this.op = op;
        this.right = right;
        this.location = location;

    }

    transpile() {

        return `${this.left.transpile()} ${this.op} ${this.right.transpile()}`;

    }

    compile(o) {

        return this.sourceNode(o.file, '').
        add(this.left.compile(o)).
        add(this.op).
        add(this.right.compile(o));

    }

}
export default BinaryExpression
