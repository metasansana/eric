'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Command2 = require('./Command');

var _Command3 = _interopRequireDefault(_Command2);

var _ScriptWriter = require('./ScriptWriter');

var _ScriptWriter2 = _interopRequireDefault(_ScriptWriter);

var _parser = require('../parser');

var _parser2 = _interopRequireDefault(_parser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * BuildCommand is the command that will build all the .eric files the user
 * provides, turning them into javascript code the run command can use.
 */
var BuildCommand = function (_Command) {
    _inherits(BuildCommand, _Command);

    function BuildCommand(fs) {
        _classCallCheck(this, BuildCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BuildCommand).call(this, null));

        _this._fs = fs;

        return _this;
    }

    _createClass(BuildCommand, [{
        key: 'execute',
        value: function execute() {

            var writer = new _ScriptWriter2.default(this._fs);

            return this._fs.readDir('tasks', this.$args['<file>']).then(function (files) {
                return Promise.all(files.map(function (file) {
                    return writer.writeScript(file.name, file.base, (0, _parser2.default)(file.contents, {
                        file: file.base
                    }));
                }));
            });
        }
    }]);

    return BuildCommand;
}(_Command3.default);

exports.default = BuildCommand;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGkvQnVpbGRDb21tYW5kLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7OztJQUlNLFk7OztBQUVGLDBCQUFZLEVBQVosRUFBZ0I7QUFBQTs7QUFBQSxvR0FFTixJQUZNOztBQUdaLGNBQUssR0FBTCxHQUFXLEVBQVg7O0FBSFk7QUFLZjs7OztrQ0FFUzs7QUFFTixnQkFBSSxTQUFTLDJCQUFpQixLQUFLLEdBQXRCLENBQWI7O0FBRUEsbUJBQU8sS0FBSyxHQUFMLENBQVMsT0FBVCxDQUFpQixPQUFqQixFQUEwQixLQUFLLEtBQUwsQ0FBVyxRQUFYLENBQTFCLEVBQ1AsSUFETyxDQUNGO0FBQUEsdUJBQVMsUUFBUSxHQUFSLENBQ1YsTUFBTSxHQUFOLENBQVU7QUFBQSwyQkFBUSxPQUFPLFdBQVAsQ0FBbUIsS0FBSyxJQUF4QixFQUE4QixLQUFLLElBQW5DLEVBQXlDLHNCQUFRLEtBQUssUUFBYixFQUF1QjtBQUM5RSw4QkFBTSxLQUFLO0FBRG1FLHFCQUF2QixDQUF6QyxDQUFSO0FBQUEsaUJBQVYsQ0FEVSxDQUFUO0FBQUEsYUFERSxDQUFQO0FBTUg7Ozs7OztrQkFJVSxZIiwiZmlsZSI6IkJ1aWxkQ29tbWFuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21tYW5kIGZyb20gJy4vQ29tbWFuZCc7XG5pbXBvcnQgU2NyaXB0V3JpdGVyIGZyb20gJy4vU2NyaXB0V3JpdGVyJztcbmltcG9ydCBjb21waWxlIGZyb20gJy4uL3BhcnNlcic7XG5cbi8qKlxuICogQnVpbGRDb21tYW5kIGlzIHRoZSBjb21tYW5kIHRoYXQgd2lsbCBidWlsZCBhbGwgdGhlIC5lcmljIGZpbGVzIHRoZSB1c2VyXG4gKiBwcm92aWRlcywgdHVybmluZyB0aGVtIGludG8gamF2YXNjcmlwdCBjb2RlIHRoZSBydW4gY29tbWFuZCBjYW4gdXNlLlxuICovXG5jbGFzcyBCdWlsZENvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcblxuICAgIGNvbnN0cnVjdG9yKGZzKSB7XG5cbiAgICAgICAgc3VwZXIobnVsbCk7XG4gICAgICAgIHRoaXMuX2ZzID0gZnM7XG5cbiAgICB9XG5cbiAgICBleGVjdXRlKCkge1xuXG4gICAgICAgIHZhciB3cml0ZXIgPSBuZXcgU2NyaXB0V3JpdGVyKHRoaXMuX2ZzKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5fZnMucmVhZERpcigndGFza3MnLCB0aGlzLiRhcmdzWyc8ZmlsZT4nXSkuXG4gICAgICAgIHRoZW4oZmlsZXMgPT4gUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICBmaWxlcy5tYXAoZmlsZSA9PiB3cml0ZXIud3JpdGVTY3JpcHQoZmlsZS5uYW1lLCBmaWxlLmJhc2UsIGNvbXBpbGUoZmlsZS5jb250ZW50cywge1xuICAgICAgICAgICAgICAgIGZpbGU6IGZpbGUuYmFzZVxuICAgICAgICAgICAgfSkpKSkpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1aWxkQ29tbWFuZFxuIl19