import Promise from 'bluebird';
import mkdirp from 'mkdirp';
import Command from './Command';

const mkdir = Promise.promisify(mkdirp);

/**
 * InitCommand takes care of initializing the eric folder.
 * @param {FileSystem} fs 
 */
class InitCommand extends Command {

    constructor(fs) {

        super(null);
        this._fs = fs;

    }

    execute() {

        return Promise.all(this._fs.ERIC_FOLDERS.map(p => this._fs.makeDir(p)));

    }

}

export default InitCommand
