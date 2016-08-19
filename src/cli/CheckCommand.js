import Command from './Command';

/**
 * CheckCommand wraps around other commands to preform checks before
 * executing.
 * @param {FileSystem} fs 
 * @param {Command} cmd 
 */
class CheckCommand extends Command {

    constructor(fs, cmd) {

        super();
        this._fs = fs;
        this._cmd = cmd;

    }

    setArgs(args) {

        this._cmd.setArgs(args);
        return this;

    }

    execute() {

        return this._fs.check().
        then(() => this._cmd.execute());

    }

}

export default CheckCommand
