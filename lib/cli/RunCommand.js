'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _Command2 = require('./Command');

var _Command3 = _interopRequireDefault(_Command2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * RunCommand takes care of running the tasks the user specified.
 * @param {CommandRunner} cmds 
 */
var RunCommand = function (_Command) {
    _inherits(RunCommand, _Command);

    function RunCommand(cmds) {
        _classCallCheck(this, RunCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RunCommand).call(this, null));

        _this._cmds = cmds;

        return _this;
    }

    _createClass(RunCommand, [{
        key: 'execute',
        value: function execute() {

            return this._cmds.execute();
        }
    }]);

    return RunCommand;
}(_Command3.default);

exports.default = RunCommand;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGkvUnVuQ29tbWFuZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7O0lBSU0sVTs7O0FBRUYsd0JBQVksSUFBWixFQUFrQjtBQUFBOztBQUFBLGtHQUVSLElBRlE7O0FBR2QsY0FBSyxLQUFMLEdBQWEsSUFBYjs7QUFIYztBQUtqQjs7OztrQ0FFUzs7QUFFTixtQkFBTyxLQUFLLEtBQUwsQ0FBVyxPQUFYLEVBQVA7QUFFSDs7Ozs7O2tCQUlVLFUiLCJmaWxlIjoiUnVuQ29tbWFuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IENvbW1hbmQgZnJvbSAnLi9Db21tYW5kJztcblxuLyoqXG4gKiBSdW5Db21tYW5kIHRha2VzIGNhcmUgb2YgcnVubmluZyB0aGUgdGFza3MgdGhlIHVzZXIgc3BlY2lmaWVkLlxuICogQHBhcmFtIHtDb21tYW5kUnVubmVyfSBjbWRzIFxuICovXG5jbGFzcyBSdW5Db21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XG5cbiAgICBjb25zdHJ1Y3RvcihjbWRzKSB7XG5cbiAgICAgICAgc3VwZXIobnVsbCk7XG4gICAgICAgIHRoaXMuX2NtZHMgPSBjbWRzO1xuXG4gICAgfVxuXG4gICAgZXhlY3V0ZSgpIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5fY21kcy5leGVjdXRlKCk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUnVuQ29tbWFuZFxuIl19