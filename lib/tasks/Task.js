'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _Command2 = require('../cli/Command');

var _Command3 = _interopRequireDefault(_Command2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Task is the parent class for all eric tasks, every task
 * must either inherit from it directly or via some sub class
 * @param {FileSystem} fs 
 * @param {CommandRunner} runner 
 * @param {Context} context 
 */
var Task = function (_Command) {
    _inherits(Task, _Command);

    function Task(fs, runner, context) {
        _classCallCheck(this, Task);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Task).call(this, fs, runner, context));

        _this.fs = fs;
        _this.runner = runner;
        _this.context = context;
        return _this;
    }

    _createClass(Task, [{
        key: 'run',
        value: function run() {}
    }, {
        key: 'execute',
        value: function execute() {
            var _this2 = this;

            return _bluebird2.default.resolve().then(function () {
                return _this2.run();
            });
        }
    }]);

    return Task;
}(_Command3.default);

exports.default = Task;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90YXNrcy9UYXNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7SUFPTSxJOzs7QUFFRixrQkFBWSxFQUFaLEVBQWdCLE1BQWhCLEVBQXdCLE9BQXhCLEVBQWlDO0FBQUE7O0FBQUEsNEZBQ3pCLEVBRHlCLEVBQ3RCLE1BRHNCLEVBQ2YsT0FEZTs7QUFFN0IsY0FBSyxFQUFMLEdBQVUsRUFBVjtBQUNBLGNBQUssTUFBTCxHQUFjLE1BQWQ7QUFDQSxjQUFLLE9BQUwsR0FBZSxPQUFmO0FBSjZCO0FBS2hDOzs7OzhCQUVLLENBRUw7OztrQ0FFUztBQUFBOztBQUVOLG1CQUFPLG1CQUFRLE9BQVIsR0FDUCxJQURPLENBQ0Y7QUFBQSx1QkFBTSxPQUFLLEdBQUwsRUFBTjtBQUFBLGFBREUsQ0FBUDtBQUdIOzs7Ozs7a0JBSVUsSSIsImZpbGUiOiJUYXNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb21pc2UgZnJvbSAnYmx1ZWJpcmQnO1xuaW1wb3J0IENvbW1hbmQgZnJvbSAnLi4vY2xpL0NvbW1hbmQnO1xuXG4vKipcbiAqIFRhc2sgaXMgdGhlIHBhcmVudCBjbGFzcyBmb3IgYWxsIGVyaWMgdGFza3MsIGV2ZXJ5IHRhc2tcbiAqIG11c3QgZWl0aGVyIGluaGVyaXQgZnJvbSBpdCBkaXJlY3RseSBvciB2aWEgc29tZSBzdWIgY2xhc3NcbiAqIEBwYXJhbSB7RmlsZVN5c3RlbX0gZnMgXG4gKiBAcGFyYW0ge0NvbW1hbmRSdW5uZXJ9IHJ1bm5lciBcbiAqIEBwYXJhbSB7Q29udGV4dH0gY29udGV4dCBcbiAqL1xuY2xhc3MgVGFzayBleHRlbmRzIENvbW1hbmQge1xuXG4gICAgY29uc3RydWN0b3IoZnMsIHJ1bm5lciwgY29udGV4dCkge1xuICAgICAgc3VwZXIoZnMscnVubmVyLGNvbnRleHQpO1xuICAgICAgICB0aGlzLmZzID0gZnM7XG4gICAgICAgIHRoaXMucnVubmVyID0gcnVubmVyO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIH1cblxuICAgIHJ1bigpIHtcblxuICAgIH1cblxuICAgIGV4ZWN1dGUoKSB7XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLlxuICAgICAgICB0aGVuKCgpID0+IHRoaXMucnVuKCkpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tcbiJdfQ==