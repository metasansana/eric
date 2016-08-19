'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _babelCore = require('babel-core');

var babel = _interopRequireWildcard(_babelCore);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * ScriptWriter responsable for actually creating the script files.
 * @param {FileSystem} fs 
 */
var ScriptWriter = function () {
    function ScriptWriter(fs) {
        _classCallCheck(this, ScriptWriter);

        this._fs = fs;
    }

    /**
     * writeScript writes the script file out with it's accompanying
     * sourcemap to the build folder.
     * @param {string} file 
     * @param {string} ericFile 
     * @param {object} result
     */


    _createClass(ScriptWriter, [{
        key: 'writeScript',
        value: function writeScript(file, ericFile, result) {

            var scriptName = _path2.default.join('build', file + '.js');
            var sourceMapName = _path2.default.join('build', file + '.js.map');
            var buf;

            buf = new Buffer(String(result.map), 'utf8');

            result = babel.transform(result.code + '//# sourceMappingURL=data:application/json;base64,' + buf.toString('base64'), {
                inputSourceMap: JSON.parse(String(result.map)),
                sourceMaps: 'inline',
                presets: [require('babel-preset-es2015')],
                plugins: [require('babel-plugin-add-module-exports'), require('babel-plugin-transform-export-extensions')]

            });

            buf = new Buffer(JSON.stringify(result.map), 'utf8');
            return this._fs.writeFile(scriptName, result.code + '//# sourceMappingURL=data:application/json;base64,' + buf.toString('base64'));
        }
    }]);

    return ScriptWriter;
}();

exports.default = ScriptWriter;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGkvU2NyaXB0V3JpdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0lBQVksSzs7QUFDWjs7Ozs7Ozs7OztBQUVBOzs7O0lBSU0sWTtBQUVGLDBCQUFZLEVBQVosRUFBZ0I7QUFBQTs7QUFFWixhQUFLLEdBQUwsR0FBVyxFQUFYO0FBRUg7O0FBRUQ7Ozs7Ozs7Ozs7O29DQU9ZLEksRUFBTSxRLEVBQVUsTSxFQUFROztBQUVoQyxnQkFBSSxhQUFhLGVBQUssSUFBTCxDQUFVLE9BQVYsRUFBbUIsT0FBTyxLQUExQixDQUFqQjtBQUNBLGdCQUFJLGdCQUFnQixlQUFLLElBQUwsQ0FBVSxPQUFWLEVBQW1CLE9BQU8sU0FBMUIsQ0FBcEI7QUFDQSxnQkFBSSxHQUFKOztBQUVBLGtCQUFNLElBQUksTUFBSixDQUFXLE9BQU8sT0FBTyxHQUFkLENBQVgsRUFBK0IsTUFBL0IsQ0FBTjs7QUFFQSxxQkFBUyxNQUFNLFNBQU4sQ0FBZ0IsT0FBTyxJQUFQLEdBQ3JCLG9EQURxQixHQUVyQixJQUFJLFFBQUosQ0FBYSxRQUFiLENBRkssRUFFbUI7QUFDcEIsZ0NBQWdCLEtBQUssS0FBTCxDQUFXLE9BQU8sT0FBTyxHQUFkLENBQVgsQ0FESTtBQUVwQiw0QkFBWSxRQUZRO0FBR3BCLHlCQUFTLENBQUMsUUFBUSxxQkFBUixDQUFELENBSFc7QUFJcEIseUJBQVMsQ0FBQyxRQUFRLGlDQUFSLENBQUQsRUFDTCxRQUFRLDBDQUFSLENBREs7O0FBSlcsYUFGbkIsQ0FBVDs7QUFZQSxrQkFBTSxJQUFJLE1BQUosQ0FBVyxLQUFLLFNBQUwsQ0FBZSxPQUFPLEdBQXRCLENBQVgsRUFBdUMsTUFBdkMsQ0FBTjtBQUNBLG1CQUFPLEtBQUssR0FBTCxDQUFTLFNBQVQsQ0FBbUIsVUFBbkIsRUFBK0IsT0FBTyxJQUFQLEdBQ2xDLG9EQURrQyxHQUNxQixJQUFJLFFBQUosQ0FBYSxRQUFiLENBRHBELENBQVA7QUFHSDs7Ozs7O2tCQUlVLFkiLCJmaWxlIjoiU2NyaXB0V3JpdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYmFiZWwgZnJvbSAnYmFiZWwtY29yZSc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuLyoqXG4gKiBTY3JpcHRXcml0ZXIgcmVzcG9uc2FibGUgZm9yIGFjdHVhbGx5IGNyZWF0aW5nIHRoZSBzY3JpcHQgZmlsZXMuXG4gKiBAcGFyYW0ge0ZpbGVTeXN0ZW19IGZzIFxuICovXG5jbGFzcyBTY3JpcHRXcml0ZXIge1xuXG4gICAgY29uc3RydWN0b3IoZnMpIHtcblxuICAgICAgICB0aGlzLl9mcyA9IGZzO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogd3JpdGVTY3JpcHQgd3JpdGVzIHRoZSBzY3JpcHQgZmlsZSBvdXQgd2l0aCBpdCdzIGFjY29tcGFueWluZ1xuICAgICAqIHNvdXJjZW1hcCB0byB0aGUgYnVpbGQgZm9sZGVyLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlcmljRmlsZSBcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVzdWx0XG4gICAgICovXG4gICAgd3JpdGVTY3JpcHQoZmlsZSwgZXJpY0ZpbGUsIHJlc3VsdCkge1xuXG4gICAgICAgIHZhciBzY3JpcHROYW1lID0gcGF0aC5qb2luKCdidWlsZCcsIGZpbGUgKyAnLmpzJyk7XG4gICAgICAgIHZhciBzb3VyY2VNYXBOYW1lID0gcGF0aC5qb2luKCdidWlsZCcsIGZpbGUgKyAnLmpzLm1hcCcpO1xuICAgICAgICB2YXIgYnVmO1xuXG4gICAgICAgIGJ1ZiA9IG5ldyBCdWZmZXIoU3RyaW5nKHJlc3VsdC5tYXApLCAndXRmOCcpO1xuXG4gICAgICAgIHJlc3VsdCA9IGJhYmVsLnRyYW5zZm9ybShyZXN1bHQuY29kZSArXG4gICAgICAgICAgICAnLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnICtcbiAgICAgICAgICAgIGJ1Zi50b1N0cmluZygnYmFzZTY0JyksIHtcbiAgICAgICAgICAgICAgICBpbnB1dFNvdXJjZU1hcDogSlNPTi5wYXJzZShTdHJpbmcocmVzdWx0Lm1hcCkpLFxuICAgICAgICAgICAgICAgIHNvdXJjZU1hcHM6ICdpbmxpbmUnLFxuICAgICAgICAgICAgICAgIHByZXNldHM6IFtyZXF1aXJlKCdiYWJlbC1wcmVzZXQtZXMyMDE1JyldLFxuICAgICAgICAgICAgICAgIHBsdWdpbnM6IFtyZXF1aXJlKCdiYWJlbC1wbHVnaW4tYWRkLW1vZHVsZS1leHBvcnRzJyksXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmUoJ2JhYmVsLXBsdWdpbi10cmFuc2Zvcm0tZXhwb3J0LWV4dGVuc2lvbnMnKVxuICAgICAgICAgICAgICAgIF1cblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgYnVmID0gbmV3IEJ1ZmZlcihKU09OLnN0cmluZ2lmeShyZXN1bHQubWFwKSwgJ3V0ZjgnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZzLndyaXRlRmlsZShzY3JpcHROYW1lLCByZXN1bHQuY29kZSArXG4gICAgICAgICAgICAnLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnICsgYnVmLnRvU3RyaW5nKCdiYXNlNjQnKSk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NyaXB0V3JpdGVyXG4iXX0=