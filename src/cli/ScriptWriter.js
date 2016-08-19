import * as babel from 'babel-core';
import path from 'path';

/**
 * ScriptWriter responsable for actually creating the script files.
 * @param {FileSystem} fs 
 */
class ScriptWriter {

    constructor(fs) {

        this._fs = fs;

    }

    /**
     * writeScript writes the script file out with it's accompanying
     * sourcemap to the build folder.
     * @param {string} file 
     * @param {string} ericFile 
     * @param {object} result
     */
    writeScript(file, ericFile, result) {

        var scriptName = path.join('build', file + '.js');
        var sourceMapName = path.join('build', file + '.js.map');
        var buf;

        buf = new Buffer(String(result.map), 'utf8');

        result = babel.transform(result.code +
            '//# sourceMappingURL=data:application/json;base64,' +
            buf.toString('base64'), {
                inputSourceMap: JSON.parse(String(result.map)),
                sourceMaps: 'inline',
                presets: [require('babel-preset-es2015')],
                plugins: [require('babel-plugin-add-module-exports'),
                    require('babel-plugin-transform-export-extensions')
                ]

            });

        buf = new Buffer(JSON.stringify(result.map), 'utf8');
        return this._fs.writeFile(scriptName, result.code +
            '//# sourceMappingURL=data:application/json;base64,' + buf.toString('base64'));

    }

}

export default ScriptWriter
