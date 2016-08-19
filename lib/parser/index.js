'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = parse;

var _Parser = require('./Parser');

var _Parser2 = _interopRequireDefault(_Parser);

var _ast = require('./ast');

var ast = _interopRequireWildcard(_ast);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Parser2.default.parser.yy.ast = ast;

function parse(src, o) {

    o = o || {
        filename: 'unknown'
    };
    return _Parser2.default.parse(src).compile(o).toStringWithSourceMap(o);
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZXIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBS3dCLEs7O0FBTHhCOzs7O0FBQ0E7O0lBQVksRzs7Ozs7O0FBRVosaUJBQU8sTUFBUCxDQUFjLEVBQWQsQ0FBaUIsR0FBakIsR0FBdUIsR0FBdkI7O0FBRWUsU0FBUyxLQUFULENBQWUsR0FBZixFQUFvQixDQUFwQixFQUF1Qjs7QUFFbEMsUUFBSSxLQUFLO0FBQ0wsa0JBQVU7QUFETCxLQUFUO0FBR0EsV0FBTyxpQkFBTyxLQUFQLENBQWEsR0FBYixFQUFrQixPQUFsQixDQUEwQixDQUExQixFQUE2QixxQkFBN0IsQ0FBbUQsQ0FBbkQsQ0FBUDtBQUVIIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhcnNlciBmcm9tICcuL1BhcnNlcic7XG5pbXBvcnQgKiBhcyBhc3QgZnJvbSAnLi9hc3QnO1xuXG5QYXJzZXIucGFyc2VyLnl5LmFzdCA9IGFzdDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2Uoc3JjLCBvKSB7XG5cbiAgICBvID0gbyB8fCB7XG4gICAgICAgIGZpbGVuYW1lOiAndW5rbm93bidcbiAgICB9XG4gICAgcmV0dXJuIFBhcnNlci5wYXJzZShzcmMpLmNvbXBpbGUobykudG9TdHJpbmdXaXRoU291cmNlTWFwKG8pO1xuXG59XG4iXX0=