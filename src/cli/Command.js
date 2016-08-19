import Promise from 'bluebird';
/**
 * Command is the parent class of all commands eric can execute.
 * @abstract
 * @param {object} args 
 */
class Command {

    constructor(args) {
        this.$args = args;
    }

    /**
     * setArgs changes the arguments provided to the command
     * @param {object} args 
     * @returns {Command}
     */
    setArgs(args) {

        this.$args = args;
        return this;

    }

    /**
     * execute this command
     * @returns {Promise}
     */
    execute() {

      return Promise.resolved();

    }

}

export default Command
