import path from 'path';
import Table from 'cli-table';
import Promise from 'bluebird';
import Command from './Command';

/**
 * ListCommand takes care of running the tasks the user specified.
 */
class ListCommand extends Command {

    constructor(cmds) {

        super(null);
        this._cmds = cmds;

    }

    execute() {

        var table = new Table({
            head: ['task', 'description'],
            colWidths: [30, 50]
        });

        //created with Object.create(null);
        for (var k in this._cmds.getCommands())
            table.push([k, k.description || 'N/A']);

        console.log(table.toString());
        return Promise.resolve();

    }

}

export default ListCommand
