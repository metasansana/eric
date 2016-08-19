import path from 'path';
import Command from './Command';
import Context from '../tasks/Context';

/**
 * LoadCommand loads up the tasks that we know about.
 * @param {FileSystem} fs 
 * @param {CommandRunner} tasks 
 * @param {Commmand} next 
 */
class LoadCommand extends Command {

    constructor(fs, tasks, next) {

        super(null);
        this._fs = fs;
        this._tasks = tasks;
        this._next = next;

    }

    setArgs(args) {

      this._next.setArgs(args);
      return this;

    }

    execute() {

        var cmds = this._tasks;
        var fs = this._fs.clone(path.join(this._fs.path, '..'));
        var ctx = new Context();

        return this._fs.readDir('build').
        then(files => files.map(f => f.require()).forEach(curr => {
            Object.keys(curr).forEach(k => cmds.addCommand(k, new curr[k](fs, cmds, ctx)))
        })).
        then(() => this._next.execute());

    }

}

export default LoadCommand
