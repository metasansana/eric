import Promise from 'bluebird';
import Command from './Command';
/**
 * CommandRunner is responsible for executing the command the user specifies.
 * @param {object} args 
 */
class CommandRunner extends Command {

    constructor(args) {
        super(args);
        this._cmds = Object.create(null);
    }

    /**
     * getCommands 
     * @returns {object}
     */
    getCommands() {
      return this._cmds;
    }

    /**
     * addCommand will add a Command to this CommandRunner
     * @param {string} name
     * @param {Command} cmd 
     * @returns {CommandRunner}
     */
    addCommand(name, cmd) {

        cmd.setArgs(this.$args);

        if (this._cmds[name])
            throw new Error(`Duplicate task ${name} is not allowed!`);

        this._cmds[name] = cmd;
        return this;

    }

    /**
     * execute the requested command
     */
    execute() {

        return Promise.all(Object.keys(this._cmds).map(k => (this.$args[k] === true) ?
            this._cmds[k].execute() : null).filter(p => p));

    }

}

export default CommandRunner
