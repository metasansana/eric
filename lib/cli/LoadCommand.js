'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _Command2 = require('./Command');

var _Command3 = _interopRequireDefault(_Command2);

var _Context = require('../tasks/Context');

var _Context2 = _interopRequireDefault(_Context);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * LoadCommand loads up the tasks that we know about.
 * @param {FileSystem} fs 
 * @param {CommandRunner} tasks 
 * @param {Commmand} next 
 */
var LoadCommand = function (_Command) {
    _inherits(LoadCommand, _Command);

    function LoadCommand(fs, tasks, next) {
        _classCallCheck(this, LoadCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LoadCommand).call(this, null));

        _this._fs = fs;
        _this._tasks = tasks;
        _this._next = next;

        return _this;
    }

    _createClass(LoadCommand, [{
        key: 'setArgs',
        value: function setArgs(args) {

            this._next.setArgs(args);
            return this;
        }
    }, {
        key: 'execute',
        value: function execute() {
            var _this2 = this;

            var cmds = this._tasks;
            var fs = this._fs.clone(_path2.default.join(this._fs.path, '..'));
            var ctx = new _Context2.default();

            return this._fs.readDir('build').then(function (files) {
                return files.map(function (f) {
                    return f.require();
                }).forEach(function (curr) {
                    Object.keys(curr).forEach(function (k) {
                        return cmds.addCommand(k, new curr[k](fs, cmds, ctx));
                    });
                });
            }).then(function () {
                return _this2._next.execute();
            });
        }
    }]);

    return LoadCommand;
}(_Command3.default);

exports.default = LoadCommand;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGkvTG9hZENvbW1hbmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7SUFNTSxXOzs7QUFFRix5QkFBWSxFQUFaLEVBQWdCLEtBQWhCLEVBQXVCLElBQXZCLEVBQTZCO0FBQUE7O0FBQUEsbUdBRW5CLElBRm1COztBQUd6QixjQUFLLEdBQUwsR0FBVyxFQUFYO0FBQ0EsY0FBSyxNQUFMLEdBQWMsS0FBZDtBQUNBLGNBQUssS0FBTCxHQUFhLElBQWI7O0FBTHlCO0FBTzVCOzs7O2dDQUVPLEksRUFBTTs7QUFFWixpQkFBSyxLQUFMLENBQVcsT0FBWCxDQUFtQixJQUFuQjtBQUNBLG1CQUFPLElBQVA7QUFFRDs7O2tDQUVTO0FBQUE7O0FBRU4sZ0JBQUksT0FBTyxLQUFLLE1BQWhCO0FBQ0EsZ0JBQUksS0FBSyxLQUFLLEdBQUwsQ0FBUyxLQUFULENBQWUsZUFBSyxJQUFMLENBQVUsS0FBSyxHQUFMLENBQVMsSUFBbkIsRUFBeUIsSUFBekIsQ0FBZixDQUFUO0FBQ0EsZ0JBQUksTUFBTSx1QkFBVjs7QUFFQSxtQkFBTyxLQUFLLEdBQUwsQ0FBUyxPQUFULENBQWlCLE9BQWpCLEVBQ1AsSUFETyxDQUNGO0FBQUEsdUJBQVMsTUFBTSxHQUFOLENBQVU7QUFBQSwyQkFBSyxFQUFFLE9BQUYsRUFBTDtBQUFBLGlCQUFWLEVBQTRCLE9BQTVCLENBQW9DLGdCQUFRO0FBQ3RELDJCQUFPLElBQVAsQ0FBWSxJQUFaLEVBQWtCLE9BQWxCLENBQTBCO0FBQUEsK0JBQUssS0FBSyxVQUFMLENBQWdCLENBQWhCLEVBQW1CLElBQUksS0FBSyxDQUFMLENBQUosQ0FBWSxFQUFaLEVBQWdCLElBQWhCLEVBQXNCLEdBQXRCLENBQW5CLENBQUw7QUFBQSxxQkFBMUI7QUFDSCxpQkFGYSxDQUFUO0FBQUEsYUFERSxFQUlQLElBSk8sQ0FJRjtBQUFBLHVCQUFNLE9BQUssS0FBTCxDQUFXLE9BQVgsRUFBTjtBQUFBLGFBSkUsQ0FBUDtBQU1IOzs7Ozs7a0JBSVUsVyIsImZpbGUiOiJMb2FkQ29tbWFuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IENvbW1hbmQgZnJvbSAnLi9Db21tYW5kJztcbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL3Rhc2tzL0NvbnRleHQnO1xuXG4vKipcbiAqIExvYWRDb21tYW5kIGxvYWRzIHVwIHRoZSB0YXNrcyB0aGF0IHdlIGtub3cgYWJvdXQuXG4gKiBAcGFyYW0ge0ZpbGVTeXN0ZW19IGZzIFxuICogQHBhcmFtIHtDb21tYW5kUnVubmVyfSB0YXNrcyBcbiAqIEBwYXJhbSB7Q29tbW1hbmR9IG5leHQgXG4gKi9cbmNsYXNzIExvYWRDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XG5cbiAgICBjb25zdHJ1Y3RvcihmcywgdGFza3MsIG5leHQpIHtcblxuICAgICAgICBzdXBlcihudWxsKTtcbiAgICAgICAgdGhpcy5fZnMgPSBmcztcbiAgICAgICAgdGhpcy5fdGFza3MgPSB0YXNrcztcbiAgICAgICAgdGhpcy5fbmV4dCA9IG5leHQ7XG5cbiAgICB9XG5cbiAgICBzZXRBcmdzKGFyZ3MpIHtcblxuICAgICAgdGhpcy5fbmV4dC5zZXRBcmdzKGFyZ3MpO1xuICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICB9XG5cbiAgICBleGVjdXRlKCkge1xuXG4gICAgICAgIHZhciBjbWRzID0gdGhpcy5fdGFza3M7XG4gICAgICAgIHZhciBmcyA9IHRoaXMuX2ZzLmNsb25lKHBhdGguam9pbih0aGlzLl9mcy5wYXRoLCAnLi4nKSk7XG4gICAgICAgIHZhciBjdHggPSBuZXcgQ29udGV4dCgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9mcy5yZWFkRGlyKCdidWlsZCcpLlxuICAgICAgICB0aGVuKGZpbGVzID0+IGZpbGVzLm1hcChmID0+IGYucmVxdWlyZSgpKS5mb3JFYWNoKGN1cnIgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoY3VycikuZm9yRWFjaChrID0+IGNtZHMuYWRkQ29tbWFuZChrLCBuZXcgY3VycltrXShmcywgY21kcywgY3R4KSkpXG4gICAgICAgIH0pKS5cbiAgICAgICAgdGhlbigoKSA9PiB0aGlzLl9uZXh0LmV4ZWN1dGUoKSk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZENvbW1hbmRcbiJdfQ==