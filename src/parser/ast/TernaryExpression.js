import Node from './Node';

/**
 * TernaryExpression 
 * @param {Expression} logic 
 * @param {Expression} iftrue 
 * @param {Expression} iffalse 
 */
class TernaryExpression extends Node {

    constructor(logic, iftrue, iffalse, location) {

        super();
        this.type = 'ternary-expression';
        this.logic = logic;
        this.iftrue = iftrue;
        this.iffalse = iffalse;
        this.location = location;

    }

    transpile() {

        return `(${this.logic.transpile()})? ${this.iftrue.transpile()} : ${this.iffalse.transpile()}`;

    }

    compile(o) {

        return this.sourceNode(o.file, '(').
        add(this.logic.compile(o)).
        add(')?').
        add(this.iftrue.compile(o)).
        add(':').
        add(this.iffalse.compile(o));

    }

}

export default TernaryExpression
