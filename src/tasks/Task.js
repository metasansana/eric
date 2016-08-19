import Promise from 'bluebird';
import Command from '../cli/Command';

/**
 * Task is the parent class for all eric tasks, every task
 * must either inherit from it directly or via some sub class
 * @param {FileSystem} fs 
 * @param {CommandRunner} runner 
 * @param {Context} context 
 */
class Task extends Command {

    constructor(fs, runner, context) {
      super(fs,runner,context);
        this.fs = fs;
        this.runner = runner;
        this.context = context;
    }

    run() {

    }

    execute() {

        return Promise.resolve().
        then(() => this.run());

    }

}

export default Task
