import Node from './Node';
import sourceMap from 'source-map';

/**
 * TaskFile
 * @param {array<Import>} imports 
 * @param {array<string>} args 
 * @param {Tag} root
 * @param {Location} location 
 */
class TaskFile extends Node {

    constructor(imports, tasks, location) {

        super();
        this.type = 'task-file';
        this.imports = imports;
        this.tasks = tasks;
        this.location = location;

    }

    transpile() {

        var str = '';
        var args = this.parameters.map(p => p.transpile()).join(',');

        args = (args) ? ' ,' + args : args;
        this.imports.forEach(i => str = str + i.transpile() + '\n');
        return `${str}export default function (make${args}) { return ${this.root.transpile()}; }`

    }

    compile(o) {

        var node = this.sourceNode(o.file, this.imports.map(i => i.compile(o)));

        node.add('let tasks = {};');

        this.tasks.forEach(t => node.add(t.compile(o)).add(`
           tasks['${t.name}'] = ${t.name};`));

        node.add('export default tasks;');
        return node;

    }

}

export default TaskFile
