import path from 'path';
/**
 * File is an abstraction for files eric wants to read or write.
 * @param {string} name 
 * @param {string} contents 
 * @param {string} base 
 * @param {string} dir 
 */
class File {

    constructor(name, contents, base, dir) {

        this.name = name;
        this.contents = contents;
        this.base = base;
        this.directory = dir;

    }

    /**
     * require this file
     */
    require() {

        return require(path.join(this.directory, this.base));

    }

}

export default File
