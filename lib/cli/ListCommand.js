'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _cliTable = require('cli-table');

var _cliTable2 = _interopRequireDefault(_cliTable);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _Command2 = require('./Command');

var _Command3 = _interopRequireDefault(_Command2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * ListCommand takes care of running the tasks the user specified.
 */
var ListCommand = function (_Command) {
    _inherits(ListCommand, _Command);

    function ListCommand(cmds) {
        _classCallCheck(this, ListCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ListCommand).call(this, null));

        _this._cmds = cmds;

        return _this;
    }

    _createClass(ListCommand, [{
        key: 'execute',
        value: function execute() {

            var table = new _cliTable2.default({
                head: ['task', 'description'],
                colWidths: [30, 50]
            });

            //created with Object.create(null);
            for (var k in this._cmds.getCommands()) {
                table.push([k, k.description || 'N/A']);
            }console.log(table.toString());
            return _bluebird2.default.resolve();
        }
    }]);

    return ListCommand;
}(_Command3.default);

exports.default = ListCommand;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGkvTGlzdENvbW1hbmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdNLFc7OztBQUVGLHlCQUFZLElBQVosRUFBa0I7QUFBQTs7QUFBQSxtR0FFUixJQUZROztBQUdkLGNBQUssS0FBTCxHQUFhLElBQWI7O0FBSGM7QUFLakI7Ozs7a0NBRVM7O0FBRU4sZ0JBQUksUUFBUSx1QkFBVTtBQUNsQixzQkFBTSxDQUFDLE1BQUQsRUFBUyxhQUFULENBRFk7QUFFbEIsMkJBQVcsQ0FBQyxFQUFELEVBQUssRUFBTDtBQUZPLGFBQVYsQ0FBWjs7QUFLQTtBQUNBLGlCQUFLLElBQUksQ0FBVCxJQUFjLEtBQUssS0FBTCxDQUFXLFdBQVgsRUFBZDtBQUNJLHNCQUFNLElBQU4sQ0FBVyxDQUFDLENBQUQsRUFBSSxFQUFFLFdBQUYsSUFBaUIsS0FBckIsQ0FBWDtBQURKLGFBR0EsUUFBUSxHQUFSLENBQVksTUFBTSxRQUFOLEVBQVo7QUFDQSxtQkFBTyxtQkFBUSxPQUFSLEVBQVA7QUFFSDs7Ozs7O2tCQUlVLFciLCJmaWxlIjoiTGlzdENvbW1hbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBUYWJsZSBmcm9tICdjbGktdGFibGUnO1xuaW1wb3J0IFByb21pc2UgZnJvbSAnYmx1ZWJpcmQnO1xuaW1wb3J0IENvbW1hbmQgZnJvbSAnLi9Db21tYW5kJztcblxuLyoqXG4gKiBMaXN0Q29tbWFuZCB0YWtlcyBjYXJlIG9mIHJ1bm5pbmcgdGhlIHRhc2tzIHRoZSB1c2VyIHNwZWNpZmllZC5cbiAqL1xuY2xhc3MgTGlzdENvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcblxuICAgIGNvbnN0cnVjdG9yKGNtZHMpIHtcblxuICAgICAgICBzdXBlcihudWxsKTtcbiAgICAgICAgdGhpcy5fY21kcyA9IGNtZHM7XG5cbiAgICB9XG5cbiAgICBleGVjdXRlKCkge1xuXG4gICAgICAgIHZhciB0YWJsZSA9IG5ldyBUYWJsZSh7XG4gICAgICAgICAgICBoZWFkOiBbJ3Rhc2snLCAnZGVzY3JpcHRpb24nXSxcbiAgICAgICAgICAgIGNvbFdpZHRoczogWzMwLCA1MF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9jcmVhdGVkIHdpdGggT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgZm9yICh2YXIgayBpbiB0aGlzLl9jbWRzLmdldENvbW1hbmRzKCkpXG4gICAgICAgICAgICB0YWJsZS5wdXNoKFtrLCBrLmRlc2NyaXB0aW9uIHx8ICdOL0EnXSk7XG5cbiAgICAgICAgY29uc29sZS5sb2codGFibGUudG9TdHJpbmcoKSk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0Q29tbWFuZFxuIl19