import path from 'path';
import Command from './Command';

/**
 * RunCommand takes care of running the tasks the user specified.
 * @param {CommandRunner} cmds 
 */
class RunCommand extends Command {

    constructor(cmds) {

        super(null);
        this._cmds = cmds;

    }

    execute() {

        return this._cmds.execute();

    }

}

export default RunCommand
