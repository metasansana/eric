'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _File = require('./File');

var _File2 = _interopRequireDefault(_File);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * FileSystem extracts the io operations into one class to keep the Command classes simpler.
 * @param {string} path The path to the eric folder.
 * @param {ReadWrite} rw
 */
var FileSystem = function () {
    function FileSystem(path, rw) {
        _classCallCheck(this, FileSystem);

        this.path = path;
        this._rw = rw;
        this.ERIC_FOLDERS = ['templates', 'build', 'tasks'];
    }

    _createClass(FileSystem, [{
        key: '_prefix',
        value: function _prefix(p) {

            return _path2.default.join(this.path, p);
        }

        /**
         * clone this FileSystem
         * @param {string} path The new path to use.
         */

    }, {
        key: 'clone',
        value: function clone(path) {

            path = path === null || path === undefined ? this.path : path;
            return new FileSystem(path, this._rw);
        }

        /**
         * check tests if the path supplied is a valid eric folder.
         * @returns {Promise}
         */

    }, {
        key: 'check',
        value: function check() {
            var _this = this;

            return this._rw.readDir(this.path).then(function (list) {

                _this.ERIC_FOLDERS.forEach(function (f) {

                    if (list.indexOf(f) < 0) {
                        console.error('Missing \'' + f + '\' folder, run \'eric init\' to correct!');
                        process.exit(-1);
                    }
                });
            }).catch(function (e) {

                console.error('Unable to access ' + _this.path + '! \nDid you run \'eric init\'?');
                process.exit(-1);
            });
        }

        /**
         * makeDir makes a directory
         * @param {string} name 
         * @returns {Promise}
         */

    }, {
        key: 'makeDir',
        value: function makeDir(name) {

            return this._rw.makeDir(this._prefix(name));
        }

        /**
         * readFile 
         * @param {string} filename
         * @returns {Promise}
         */

    }, {
        key: 'readFile',
        value: function readFile(filename) {
            var _this2 = this;

            return this._rw.readFile(this._prefix(filename), {
                encoding: 'utf8'
            }).then(function (contents) {

                var info = _path2.default.parse(_this2._prefix(filename));
                return new _File2.default(info.name, contents, info.base, info.dir);
            });
        }

        /**
         * readDir reads all the files the sub folder specified or optionally
         * only the ones specified into an array of File objects. If a specified
         * file is not found it will cause an error.
         * @param {string} dir 
         * @param {array<string>} [files] Optional list of files to restrict reading to.
         */

    }, {
        key: 'readDir',
        value: function readDir(dir, files) {
            var _this3 = this;

            files = Array.isArray(files) ? files : [];

            return files.length > 0 ? _bluebird2.default.all(files.map(function (f) {
                return _this3.readFile(_path2.default.join(dir, f));
            })) : this._rw.readDir(this._prefix(dir)).then(function (list) {
                return _bluebird2.default.all(list.map(function (f) {
                    return _this3.readFile(_path2.default.join(dir, f));
                }));
            });
        }

        /**
         * writeFile
         * @param {string} filename 
         * @param {string} contents 
         * @returns {Promise}
         */

    }, {
        key: 'writeFile',
        value: function writeFile(filename, contents) {
            var _this4 = this;

            var p;

            filename = this._prefix(filename);
            p = _path2.default.parse(filename);

            return this._rw.makeDir(p.dir).then(function () {
                return _this4._rw.writeFile(filename, contents);
            });
        }
    }]);

    return FileSystem;
}();

exports.default = FileSystem;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGkvRmlsZVN5c3RlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQTs7Ozs7SUFLTSxVO0FBRUYsd0JBQVksSUFBWixFQUFrQixFQUFsQixFQUFzQjtBQUFBOztBQUVsQixhQUFLLElBQUwsR0FBWSxJQUFaO0FBQ0EsYUFBSyxHQUFMLEdBQVcsRUFBWDtBQUNBLGFBQUssWUFBTCxHQUFvQixDQUFDLFdBQUQsRUFBYyxPQUFkLEVBQXVCLE9BQXZCLENBQXBCO0FBRUg7Ozs7Z0NBRU8sQyxFQUFHOztBQUVQLG1CQUFPLGVBQUssSUFBTCxDQUFVLEtBQUssSUFBZixFQUFxQixDQUFyQixDQUFQO0FBRUg7O0FBRUQ7Ozs7Ozs7OEJBSU0sSSxFQUFNOztBQUVSLG1CQUFTLFNBQVMsSUFBVixJQUFvQixTQUFTLFNBQTlCLEdBQTRDLEtBQUssSUFBakQsR0FBd0QsSUFBL0Q7QUFDQSxtQkFBTyxJQUFJLFVBQUosQ0FBZSxJQUFmLEVBQXFCLEtBQUssR0FBMUIsQ0FBUDtBQUVIOztBQUVEOzs7Ozs7O2dDQUlRO0FBQUE7O0FBRUosbUJBQU8sS0FBSyxHQUFMLENBQVMsT0FBVCxDQUFpQixLQUFLLElBQXRCLEVBQ1AsSUFETyxDQUNGLGdCQUFROztBQUVULHNCQUFLLFlBQUwsQ0FBa0IsT0FBbEIsQ0FBMEIsYUFBSzs7QUFFM0Isd0JBQUksS0FBSyxPQUFMLENBQWEsQ0FBYixJQUFrQixDQUF0QixFQUF5QjtBQUNyQixnQ0FBUSxLQUFSLGdCQUEwQixDQUExQjtBQUNBLGdDQUFRLElBQVIsQ0FBYSxDQUFDLENBQWQ7QUFDSDtBQUVKLGlCQVBEO0FBU0gsYUFaTSxFQWFQLEtBYk8sQ0FhRCxhQUFLOztBQUVQLHdCQUFRLEtBQVIsdUJBQWtDLE1BQUssSUFBdkM7QUFDQSx3QkFBUSxJQUFSLENBQWEsQ0FBQyxDQUFkO0FBRUgsYUFsQk0sQ0FBUDtBQW9CSDs7QUFFRDs7Ozs7Ozs7Z0NBS1EsSSxFQUFNOztBQUVWLG1CQUFPLEtBQUssR0FBTCxDQUFTLE9BQVQsQ0FBaUIsS0FBSyxPQUFMLENBQWEsSUFBYixDQUFqQixDQUFQO0FBRUg7O0FBRUQ7Ozs7Ozs7O2lDQUtTLFEsRUFBVTtBQUFBOztBQUVmLG1CQUFPLEtBQUssR0FBTCxDQUFTLFFBQVQsQ0FBa0IsS0FBSyxPQUFMLENBQWEsUUFBYixDQUFsQixFQUEwQztBQUM3QywwQkFBVTtBQURtQyxhQUExQyxFQUdQLElBSE8sQ0FHRixvQkFBWTs7QUFFYixvQkFBSSxPQUFPLGVBQUssS0FBTCxDQUFXLE9BQUssT0FBTCxDQUFhLFFBQWIsQ0FBWCxDQUFYO0FBQ0EsdUJBQU8sbUJBQVMsS0FBSyxJQUFkLEVBQW9CLFFBQXBCLEVBQThCLEtBQUssSUFBbkMsRUFBeUMsS0FBSyxHQUE5QyxDQUFQO0FBRUgsYUFSTSxDQUFQO0FBVUg7O0FBRUQ7Ozs7Ozs7Ozs7Z0NBT1EsRyxFQUFLLEssRUFBTztBQUFBOztBQUVoQixvQkFBUSxNQUFNLE9BQU4sQ0FBYyxLQUFkLElBQXVCLEtBQXZCLEdBQStCLEVBQXZDOztBQUVBLG1CQUFRLE1BQU0sTUFBTixHQUFlLENBQWhCLEdBQ0gsbUJBQVEsR0FBUixDQUFZLE1BQU0sR0FBTixDQUFVO0FBQUEsdUJBQUssT0FBSyxRQUFMLENBQWMsZUFBSyxJQUFMLENBQVUsR0FBVixFQUFlLENBQWYsQ0FBZCxDQUFMO0FBQUEsYUFBVixDQUFaLENBREcsR0FFSCxLQUFLLEdBQUwsQ0FBUyxPQUFULENBQWlCLEtBQUssT0FBTCxDQUFhLEdBQWIsQ0FBakIsRUFDSixJQURJLENBQ0M7QUFBQSx1QkFBUSxtQkFBUSxHQUFSLENBQVksS0FBSyxHQUFMLENBQVM7QUFBQSwyQkFBSyxPQUFLLFFBQUwsQ0FBYyxlQUFLLElBQUwsQ0FBVSxHQUFWLEVBQWUsQ0FBZixDQUFkLENBQUw7QUFBQSxpQkFBVCxDQUFaLENBQVI7QUFBQSxhQURELENBRko7QUFLSDs7QUFFRDs7Ozs7Ozs7O2tDQU1VLFEsRUFBVSxRLEVBQVU7QUFBQTs7QUFFMUIsZ0JBQUksQ0FBSjs7QUFFQSx1QkFBVyxLQUFLLE9BQUwsQ0FBYSxRQUFiLENBQVg7QUFDQSxnQkFBSSxlQUFLLEtBQUwsQ0FBVyxRQUFYLENBQUo7O0FBRVIsbUJBQU8sS0FBSyxHQUFMLENBQVMsT0FBVCxDQUFpQixFQUFFLEdBQW5CLEVBQ0wsSUFESyxDQUNBO0FBQUEsdUJBQUksT0FBSyxHQUFMLENBQVMsU0FBVCxDQUFtQixRQUFuQixFQUE2QixRQUE3QixDQUFKO0FBQUEsYUFEQSxDQUFQO0FBR0s7Ozs7OztrQkFJVSxVIiwiZmlsZSI6IkZpbGVTeXN0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBQcm9taXNlIGZyb20gJ2JsdWViaXJkJztcbmltcG9ydCBGaWxlIGZyb20gJy4vRmlsZSc7XG5cbi8qKlxuICogRmlsZVN5c3RlbSBleHRyYWN0cyB0aGUgaW8gb3BlcmF0aW9ucyBpbnRvIG9uZSBjbGFzcyB0byBrZWVwIHRoZSBDb21tYW5kIGNsYXNzZXMgc2ltcGxlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRvIHRoZSBlcmljIGZvbGRlci5cbiAqIEBwYXJhbSB7UmVhZFdyaXRlfSByd1xuICovXG5jbGFzcyBGaWxlU3lzdGVtIHtcblxuICAgIGNvbnN0cnVjdG9yKHBhdGgsIHJ3KSB7XG5cbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICAgICAgdGhpcy5fcncgPSBydztcbiAgICAgICAgdGhpcy5FUklDX0ZPTERFUlMgPSBbJ3RlbXBsYXRlcycsICdidWlsZCcsICd0YXNrcyddO1xuXG4gICAgfVxuXG4gICAgX3ByZWZpeChwKSB7XG5cbiAgICAgICAgcmV0dXJuIHBhdGguam9pbih0aGlzLnBhdGgsIHApO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogY2xvbmUgdGhpcyBGaWxlU3lzdGVtXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIG5ldyBwYXRoIHRvIHVzZS5cbiAgICAgKi9cbiAgICBjbG9uZShwYXRoKSB7XG5cbiAgICAgICAgcGF0aCA9ICgocGF0aCA9PT0gbnVsbCkgfHwgKHBhdGggPT09IHVuZGVmaW5lZCkpID8gdGhpcy5wYXRoIDogcGF0aDtcbiAgICAgICAgcmV0dXJuIG5ldyBGaWxlU3lzdGVtKHBhdGgsIHRoaXMuX3J3KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGNoZWNrIHRlc3RzIGlmIHRoZSBwYXRoIHN1cHBsaWVkIGlzIGEgdmFsaWQgZXJpYyBmb2xkZXIuXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgY2hlY2soKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3J3LnJlYWREaXIodGhpcy5wYXRoKS5cbiAgICAgICAgdGhlbihsaXN0ID0+IHtcblxuICAgICAgICAgICAgdGhpcy5FUklDX0ZPTERFUlMuZm9yRWFjaChmID0+IHtcblxuICAgICAgICAgICAgICAgIGlmIChsaXN0LmluZGV4T2YoZikgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYE1pc3NpbmcgJyR7Zn0nIGZvbGRlciwgcnVuICdlcmljIGluaXQnIHRvIGNvcnJlY3QhYCk7XG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZXhpdCgtMSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIH0pLlxuICAgICAgICBjYXRjaChlID0+IHtcblxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgVW5hYmxlIHRvIGFjY2VzcyAke3RoaXMucGF0aH0hIFxcbkRpZCB5b3UgcnVuICdlcmljIGluaXQnP2ApO1xuICAgICAgICAgICAgcHJvY2Vzcy5leGl0KC0xKTtcblxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIG1ha2VEaXIgbWFrZXMgYSBkaXJlY3RvcnlcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBtYWtlRGlyKG5hbWUpIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5fcncubWFrZURpcih0aGlzLl9wcmVmaXgobmFtZSkpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmVhZEZpbGUgXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVuYW1lXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgcmVhZEZpbGUoZmlsZW5hbWUpIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5fcncucmVhZEZpbGUodGhpcy5fcHJlZml4KGZpbGVuYW1lKSwge1xuICAgICAgICAgICAgZW5jb2Rpbmc6ICd1dGY4J1xuICAgICAgICB9KS5cbiAgICAgICAgdGhlbihjb250ZW50cyA9PiB7XG5cbiAgICAgICAgICAgIHZhciBpbmZvID0gcGF0aC5wYXJzZSh0aGlzLl9wcmVmaXgoZmlsZW5hbWUpKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRmlsZShpbmZvLm5hbWUsIGNvbnRlbnRzLCBpbmZvLmJhc2UsIGluZm8uZGlyKTtcblxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJlYWREaXIgcmVhZHMgYWxsIHRoZSBmaWxlcyB0aGUgc3ViIGZvbGRlciBzcGVjaWZpZWQgb3Igb3B0aW9uYWxseVxuICAgICAqIG9ubHkgdGhlIG9uZXMgc3BlY2lmaWVkIGludG8gYW4gYXJyYXkgb2YgRmlsZSBvYmplY3RzLiBJZiBhIHNwZWNpZmllZFxuICAgICAqIGZpbGUgaXMgbm90IGZvdW5kIGl0IHdpbGwgY2F1c2UgYW4gZXJyb3IuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRpciBcbiAgICAgKiBAcGFyYW0ge2FycmF5PHN0cmluZz59IFtmaWxlc10gT3B0aW9uYWwgbGlzdCBvZiBmaWxlcyB0byByZXN0cmljdCByZWFkaW5nIHRvLlxuICAgICAqL1xuICAgIHJlYWREaXIoZGlyLCBmaWxlcykge1xuXG4gICAgICAgIGZpbGVzID0gQXJyYXkuaXNBcnJheShmaWxlcykgPyBmaWxlcyA6IFtdO1xuXG4gICAgICAgIHJldHVybiAoZmlsZXMubGVuZ3RoID4gMCkgP1xuICAgICAgICAgICAgUHJvbWlzZS5hbGwoZmlsZXMubWFwKGYgPT4gdGhpcy5yZWFkRmlsZShwYXRoLmpvaW4oZGlyLCBmKSkpKSA6XG4gICAgICAgICAgICB0aGlzLl9ydy5yZWFkRGlyKHRoaXMuX3ByZWZpeChkaXIpKS5cbiAgICAgICAgdGhlbihsaXN0ID0+IFByb21pc2UuYWxsKGxpc3QubWFwKGYgPT4gdGhpcy5yZWFkRmlsZShwYXRoLmpvaW4oZGlyLCBmKSkpKSk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB3cml0ZUZpbGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZW5hbWUgXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnRzIFxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIHdyaXRlRmlsZShmaWxlbmFtZSwgY29udGVudHMpIHtcblxuICAgICAgICB2YXIgcDtcblxuICAgICAgICBmaWxlbmFtZSA9IHRoaXMuX3ByZWZpeChmaWxlbmFtZSk7XG4gICAgICAgIHAgPSBwYXRoLnBhcnNlKGZpbGVuYW1lKTtcblxucmV0dXJuIHRoaXMuX3J3Lm1ha2VEaXIocC5kaXIpLlxuICB0aGVuKCgpPT50aGlzLl9ydy53cml0ZUZpbGUoZmlsZW5hbWUsIGNvbnRlbnRzKSk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsZVN5c3RlbVxuIl19