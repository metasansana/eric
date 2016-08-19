'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * File is an abstraction for files eric wants to read or write.
 * @param {string} name 
 * @param {string} contents 
 * @param {string} base 
 * @param {string} dir 
 */
var File = function () {
    function File(name, contents, base, dir) {
        _classCallCheck(this, File);

        this.name = name;
        this.contents = contents;
        this.base = base;
        this.directory = dir;
    }

    /**
     * require this file
     */


    _createClass(File, [{
        key: 'require',
        value: function (_require) {
            function require() {
                return _require.apply(this, arguments);
            }

            require.toString = function () {
                return _require.toString();
            };

            return require;
        }(function () {

            return require(_path2.default.join(this.directory, this.base));
        })
    }]);

    return File;
}();

exports.default = File;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGkvRmlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7OztBQUNBOzs7Ozs7O0lBT00sSTtBQUVGLGtCQUFZLElBQVosRUFBa0IsUUFBbEIsRUFBNEIsSUFBNUIsRUFBa0MsR0FBbEMsRUFBdUM7QUFBQTs7QUFFbkMsYUFBSyxJQUFMLEdBQVksSUFBWjtBQUNBLGFBQUssUUFBTCxHQUFnQixRQUFoQjtBQUNBLGFBQUssSUFBTCxHQUFZLElBQVo7QUFDQSxhQUFLLFNBQUwsR0FBaUIsR0FBakI7QUFFSDs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7c0JBR1U7O0FBRU4sbUJBQU8sUUFBUSxlQUFLLElBQUwsQ0FBVSxLQUFLLFNBQWYsRUFBMEIsS0FBSyxJQUEvQixDQUFSLENBQVA7QUFFSCxTOzs7Ozs7a0JBSVUsSSIsImZpbGUiOiJGaWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG4vKipcbiAqIEZpbGUgaXMgYW4gYWJzdHJhY3Rpb24gZm9yIGZpbGVzIGVyaWMgd2FudHMgdG8gcmVhZCBvciB3cml0ZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnRzIFxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2UgXG4gKiBAcGFyYW0ge3N0cmluZ30gZGlyIFxuICovXG5jbGFzcyBGaWxlIHtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGNvbnRlbnRzLCBiYXNlLCBkaXIpIHtcblxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmNvbnRlbnRzID0gY29udGVudHM7XG4gICAgICAgIHRoaXMuYmFzZSA9IGJhc2U7XG4gICAgICAgIHRoaXMuZGlyZWN0b3J5ID0gZGlyO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmVxdWlyZSB0aGlzIGZpbGVcbiAgICAgKi9cbiAgICByZXF1aXJlKCkge1xuXG4gICAgICAgIHJldHVybiByZXF1aXJlKHBhdGguam9pbih0aGlzLmRpcmVjdG9yeSwgdGhpcy5iYXNlKSk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsZVxuIl19