'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Command2 = require('./Command');

var _Command3 = _interopRequireDefault(_Command2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * CheckCommand wraps around other commands to preform checks before
 * executing.
 * @param {FileSystem} fs 
 * @param {Command} cmd 
 */
var CheckCommand = function (_Command) {
    _inherits(CheckCommand, _Command);

    function CheckCommand(fs, cmd) {
        _classCallCheck(this, CheckCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CheckCommand).call(this));

        _this._fs = fs;
        _this._cmd = cmd;

        return _this;
    }

    _createClass(CheckCommand, [{
        key: 'setArgs',
        value: function setArgs(args) {

            this._cmd.setArgs(args);
            return this;
        }
    }, {
        key: 'execute',
        value: function execute() {
            var _this2 = this;

            return this._fs.check().then(function () {
                return _this2._cmd.execute();
            });
        }
    }]);

    return CheckCommand;
}(_Command3.default);

exports.default = CheckCommand;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGkvQ2hlY2tDb21tYW5kLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7SUFNTSxZOzs7QUFFRiwwQkFBWSxFQUFaLEVBQWdCLEdBQWhCLEVBQXFCO0FBQUE7O0FBQUE7O0FBR2pCLGNBQUssR0FBTCxHQUFXLEVBQVg7QUFDQSxjQUFLLElBQUwsR0FBWSxHQUFaOztBQUppQjtBQU1wQjs7OztnQ0FFTyxJLEVBQU07O0FBRVYsaUJBQUssSUFBTCxDQUFVLE9BQVYsQ0FBa0IsSUFBbEI7QUFDQSxtQkFBTyxJQUFQO0FBRUg7OztrQ0FFUztBQUFBOztBQUVOLG1CQUFPLEtBQUssR0FBTCxDQUFTLEtBQVQsR0FDUCxJQURPLENBQ0Y7QUFBQSx1QkFBTSxPQUFLLElBQUwsQ0FBVSxPQUFWLEVBQU47QUFBQSxhQURFLENBQVA7QUFHSDs7Ozs7O2tCQUlVLFkiLCJmaWxlIjoiQ2hlY2tDb21tYW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbW1hbmQgZnJvbSAnLi9Db21tYW5kJztcblxuLyoqXG4gKiBDaGVja0NvbW1hbmQgd3JhcHMgYXJvdW5kIG90aGVyIGNvbW1hbmRzIHRvIHByZWZvcm0gY2hlY2tzIGJlZm9yZVxuICogZXhlY3V0aW5nLlxuICogQHBhcmFtIHtGaWxlU3lzdGVtfSBmcyBcbiAqIEBwYXJhbSB7Q29tbWFuZH0gY21kIFxuICovXG5jbGFzcyBDaGVja0NvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcblxuICAgIGNvbnN0cnVjdG9yKGZzLCBjbWQpIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9mcyA9IGZzO1xuICAgICAgICB0aGlzLl9jbWQgPSBjbWQ7XG5cbiAgICB9XG5cbiAgICBzZXRBcmdzKGFyZ3MpIHtcblxuICAgICAgICB0aGlzLl9jbWQuc2V0QXJncyhhcmdzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICB9XG5cbiAgICBleGVjdXRlKCkge1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9mcy5jaGVjaygpLlxuICAgICAgICB0aGVuKCgpID0+IHRoaXMuX2NtZC5leGVjdXRlKCkpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrQ29tbWFuZFxuIl19