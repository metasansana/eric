import path from 'path';
import Promise from 'bluebird';
import File from './File';

/**
 * FileSystem extracts the io operations into one class to keep the Command classes simpler.
 * @param {string} path The path to the eric folder.
 * @param {ReadWrite} rw
 */
class FileSystem {

    constructor(path, rw) {

        this.path = path;
        this._rw = rw;
        this.ERIC_FOLDERS = ['templates', 'build', 'tasks'];

    }

    _prefix(p) {

        return path.join(this.path, p);

    }

    /**
     * clone this FileSystem
     * @param {string} path The new path to use.
     */
    clone(path) {

        path = ((path === null) || (path === undefined)) ? this.path : path;
        return new FileSystem(path, this._rw);

    }

    /**
     * check tests if the path supplied is a valid eric folder.
     * @returns {Promise}
     */
    check() {

        return this._rw.readDir(this.path).
        then(list => {

            this.ERIC_FOLDERS.forEach(f => {

                if (list.indexOf(f) < 0) {
                    console.error(`Missing '${f}' folder, run 'eric init' to correct!`);
                    process.exit(-1);
                }

            })

        }).
        catch(e => {

            console.error(`Unable to access ${this.path}! \nDid you run 'eric init'?`);
            process.exit(-1);

        });

    }

    /**
     * makeDir makes a directory
     * @param {string} name 
     * @returns {Promise}
     */
    makeDir(name) {

        return this._rw.makeDir(this._prefix(name));

    }

    /**
     * readFile 
     * @param {string} filename
     * @returns {Promise}
     */
    readFile(filename) {

        return this._rw.readFile(this._prefix(filename), {
            encoding: 'utf8'
        }).
        then(contents => {

            var info = path.parse(this._prefix(filename));
            return new File(info.name, contents, info.base, info.dir);

        });

    }

    /**
     * readDir reads all the files the sub folder specified or optionally
     * only the ones specified into an array of File objects. If a specified
     * file is not found it will cause an error.
     * @param {string} dir 
     * @param {array<string>} [files] Optional list of files to restrict reading to.
     */
    readDir(dir, files) {

        files = Array.isArray(files) ? files : [];

        return (files.length > 0) ?
            Promise.all(files.map(f => this.readFile(path.join(dir, f)))) :
            this._rw.readDir(this._prefix(dir)).
        then(list => Promise.all(list.map(f => this.readFile(path.join(dir, f)))));

    }

    /**
     * writeFile
     * @param {string} filename 
     * @param {string} contents 
     * @returns {Promise}
     */
    writeFile(filename, contents) {

        var p;

        filename = this._prefix(filename);
        p = path.parse(filename);

return this._rw.makeDir(p.dir).
  then(()=>this._rw.writeFile(filename, contents));

    }

}

export default FileSystem
