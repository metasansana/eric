import Node from './Node';

/**
 * TaskStatement 
 * @param {string} name 
 * @param {string} parent
 * @param {array<PropertyAssignment|FunctionExpression>} body 
 * @param {Location} location 
 */
class TaskStatement extends Node {

    constructor(name, parent, body, location) {

        super();
        this.type = 'task-statement';
        this.name = name;
        this.parent = parent;
        this.body = body;
        this.location = location;

    }

    compile(o) {

        var node = this.sourceNode(o.file, `class ${this.name} extends ${this.parent} { `);
        var props = this.body.filter(b => b.type === 'property-assignment');
        var calls = this.body.filter(b => b.type === 'function-expression');

        node.add(`constructor($fs, $runner, $context) { super($fs, $runner, $context); `);
        props.forEach(p => node.add([p.compile(o), `;`]));
        node.add(` } `);
        node.add('run() { ');
        calls.forEach(c => node.add([c.compile(o), ';']));
        return node.add(' } } ');

    }

}

export default TaskStatement
