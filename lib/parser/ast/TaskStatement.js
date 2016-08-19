'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * TaskStatement 
 * @param {string} name 
 * @param {string} parent
 * @param {array<PropertyAssignment|FunctionExpression>} body 
 * @param {Location} location 
 */
var TaskStatement = function (_Node) {
    _inherits(TaskStatement, _Node);

    function TaskStatement(name, parent, body, location) {
        _classCallCheck(this, TaskStatement);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TaskStatement).call(this));

        _this.type = 'task-statement';
        _this.name = name;
        _this.parent = parent;
        _this.body = body;
        _this.location = location;

        return _this;
    }

    _createClass(TaskStatement, [{
        key: 'compile',
        value: function compile(o) {

            var node = this.sourceNode(o.file, 'class ' + this.name + ' extends ' + this.parent + ' { ');
            var props = this.body.filter(function (b) {
                return b.type === 'property-assignment';
            });
            var calls = this.body.filter(function (b) {
                return b.type === 'function-expression';
            });

            node.add('constructor($fs, $runner, $context) { super($fs, $runner, $context); ');
            props.forEach(function (p) {
                return node.add([p.compile(o), ';']);
            });
            node.add(' } ');
            node.add('run() { ');
            calls.forEach(function (c) {
                return node.add([c.compile(o), ';']);
            });
            return node.add(' } } ');
        }
    }]);

    return TaskStatement;
}(_Node3.default);

exports.default = TaskStatement;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvYXN0L1Rhc2tTdGF0ZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7SUFPTSxhOzs7QUFFRiwyQkFBWSxJQUFaLEVBQWtCLE1BQWxCLEVBQTBCLElBQTFCLEVBQWdDLFFBQWhDLEVBQTBDO0FBQUE7O0FBQUE7O0FBR3RDLGNBQUssSUFBTCxHQUFZLGdCQUFaO0FBQ0EsY0FBSyxJQUFMLEdBQVksSUFBWjtBQUNBLGNBQUssTUFBTCxHQUFjLE1BQWQ7QUFDQSxjQUFLLElBQUwsR0FBWSxJQUFaO0FBQ0EsY0FBSyxRQUFMLEdBQWdCLFFBQWhCOztBQVBzQztBQVN6Qzs7OztnQ0FFTyxDLEVBQUc7O0FBRVAsZ0JBQUksT0FBTyxLQUFLLFVBQUwsQ0FBZ0IsRUFBRSxJQUFsQixhQUFpQyxLQUFLLElBQXRDLGlCQUFzRCxLQUFLLE1BQTNELFNBQVg7QUFDQSxnQkFBSSxRQUFRLEtBQUssSUFBTCxDQUFVLE1BQVYsQ0FBaUI7QUFBQSx1QkFBSyxFQUFFLElBQUYsS0FBVyxxQkFBaEI7QUFBQSxhQUFqQixDQUFaO0FBQ0EsZ0JBQUksUUFBUSxLQUFLLElBQUwsQ0FBVSxNQUFWLENBQWlCO0FBQUEsdUJBQUssRUFBRSxJQUFGLEtBQVcscUJBQWhCO0FBQUEsYUFBakIsQ0FBWjs7QUFFQSxpQkFBSyxHQUFMO0FBQ0Esa0JBQU0sT0FBTixDQUFjO0FBQUEsdUJBQUssS0FBSyxHQUFMLENBQVMsQ0FBQyxFQUFFLE9BQUYsQ0FBVSxDQUFWLENBQUQsTUFBVCxDQUFMO0FBQUEsYUFBZDtBQUNBLGlCQUFLLEdBQUw7QUFDQSxpQkFBSyxHQUFMLENBQVMsVUFBVDtBQUNBLGtCQUFNLE9BQU4sQ0FBYztBQUFBLHVCQUFLLEtBQUssR0FBTCxDQUFTLENBQUMsRUFBRSxPQUFGLENBQVUsQ0FBVixDQUFELEVBQWUsR0FBZixDQUFULENBQUw7QUFBQSxhQUFkO0FBQ0EsbUJBQU8sS0FBSyxHQUFMLENBQVMsT0FBVCxDQUFQO0FBRUg7Ozs7OztrQkFJVSxhIiwiZmlsZSI6IlRhc2tTdGF0ZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIFRhc2tTdGF0ZW1lbnQgXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJlbnRcbiAqIEBwYXJhbSB7YXJyYXk8UHJvcGVydHlBc3NpZ25tZW50fEZ1bmN0aW9uRXhwcmVzc2lvbj59IGJvZHkgXG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvbiBcbiAqL1xuY2xhc3MgVGFza1N0YXRlbWVudCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IobmFtZSwgcGFyZW50LCBib2R5LCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICd0YXNrLXN0YXRlbWVudCc7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLmJvZHkgPSBib2R5O1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuc291cmNlTm9kZShvLmZpbGUsIGBjbGFzcyAke3RoaXMubmFtZX0gZXh0ZW5kcyAke3RoaXMucGFyZW50fSB7IGApO1xuICAgICAgICB2YXIgcHJvcHMgPSB0aGlzLmJvZHkuZmlsdGVyKGIgPT4gYi50eXBlID09PSAncHJvcGVydHktYXNzaWdubWVudCcpO1xuICAgICAgICB2YXIgY2FsbHMgPSB0aGlzLmJvZHkuZmlsdGVyKGIgPT4gYi50eXBlID09PSAnZnVuY3Rpb24tZXhwcmVzc2lvbicpO1xuXG4gICAgICAgIG5vZGUuYWRkKGBjb25zdHJ1Y3RvcigkZnMsICRydW5uZXIsICRjb250ZXh0KSB7IHN1cGVyKCRmcywgJHJ1bm5lciwgJGNvbnRleHQpOyBgKTtcbiAgICAgICAgcHJvcHMuZm9yRWFjaChwID0+IG5vZGUuYWRkKFtwLmNvbXBpbGUobyksIGA7YF0pKTtcbiAgICAgICAgbm9kZS5hZGQoYCB9IGApO1xuICAgICAgICBub2RlLmFkZCgncnVuKCkgeyAnKTtcbiAgICAgICAgY2FsbHMuZm9yRWFjaChjID0+IG5vZGUuYWRkKFtjLmNvbXBpbGUobyksICc7J10pKTtcbiAgICAgICAgcmV0dXJuIG5vZGUuYWRkKCcgfSB9ICcpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tTdGF0ZW1lbnRcbiJdfQ==