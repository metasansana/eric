import Command from './Command';
import ScriptWriter from './ScriptWriter';
import compile from '../parser';

/**
 * BuildCommand is the command that will build all the .eric files the user
 * provides, turning them into javascript code the run command can use.
 */
class BuildCommand extends Command {

    constructor(fs) {

        super(null);
        this._fs = fs;

    }

    execute() {

        var writer = new ScriptWriter(this._fs);

        return this._fs.readDir('tasks', this.$args['<file>']).
        then(files => Promise.all(
            files.map(file => writer.writeScript(file.name, file.base, compile(file.contents, {
                file: file.base
            })))));

    }

}

export default BuildCommand
