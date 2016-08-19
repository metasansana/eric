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
 * MethodExpression 
 * @param {string} path 
 * @param {array} args 
 */
var MethodExpression = function (_Node) {
    _inherits(MethodExpression, _Node);

    function MethodExpression(path, args, location) {
        _classCallCheck(this, MethodExpression);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MethodExpression).call(this));

        _this.type = 'method-expression';
        _this.path = path;
        _this.arguments = args;
        _this.location = location;

        return _this;
    }

    _createClass(MethodExpression, [{
        key: 'transpile',
        value: function transpile() {

            var args = this.arguments.map(function (m) {
                return m.transpile();
            }).join(',');
            return this.path + '(' + args + ')';
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            var node = this.sourceNode(o.file, this.path);

            node.add('(');

            return this.compileList(this.arguments, node, o).add(')');
        }
    }]);

    return MethodExpression;
}(_Node3.default);

exports.default = MethodExpression;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvYXN0L01ldGhvZEV4cHJlc3Npb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7O0lBS00sZ0I7OztBQUVGLDhCQUFZLElBQVosRUFBa0IsSUFBbEIsRUFBd0IsUUFBeEIsRUFBa0M7QUFBQTs7QUFBQTs7QUFHOUIsY0FBSyxJQUFMLEdBQVksbUJBQVo7QUFDQSxjQUFLLElBQUwsR0FBWSxJQUFaO0FBQ0EsY0FBSyxTQUFMLEdBQWlCLElBQWpCO0FBQ0EsY0FBSyxRQUFMLEdBQWdCLFFBQWhCOztBQU44QjtBQVFqQzs7OztvQ0FFVzs7QUFFUixnQkFBSSxPQUFPLEtBQUssU0FBTCxDQUFlLEdBQWYsQ0FBbUI7QUFBQSx1QkFBSyxFQUFFLFNBQUYsRUFBTDtBQUFBLGFBQW5CLEVBQXVDLElBQXZDLENBQTRDLEdBQTVDLENBQVg7QUFDQSxtQkFBVSxLQUFLLElBQWYsU0FBdUIsSUFBdkI7QUFFSDs7O2dDQUVPLEMsRUFBRzs7QUFFUCxnQkFBSSxPQUFPLEtBQUssVUFBTCxDQUFnQixFQUFFLElBQWxCLEVBQXdCLEtBQUssSUFBN0IsQ0FBWDs7QUFFQSxpQkFBSyxHQUFMLENBQVMsR0FBVDs7QUFFQSxtQkFBTyxLQUFLLFdBQUwsQ0FBaUIsS0FBSyxTQUF0QixFQUFpQyxJQUFqQyxFQUF1QyxDQUF2QyxFQUNQLEdBRE8sQ0FDSCxHQURHLENBQVA7QUFJSDs7Ozs7O2tCQUdVLGdCIiwiZmlsZSI6Ik1ldGhvZEV4cHJlc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIE1ldGhvZEV4cHJlc3Npb24gXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBcbiAqIEBwYXJhbSB7YXJyYXl9IGFyZ3MgXG4gKi9cbmNsYXNzIE1ldGhvZEV4cHJlc3Npb24gZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKHBhdGgsIGFyZ3MsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ21ldGhvZC1leHByZXNzaW9uJztcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICAgICAgdGhpcy5hcmd1bWVudHMgPSBhcmdzO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUoKSB7XG5cbiAgICAgICAgdmFyIGFyZ3MgPSB0aGlzLmFyZ3VtZW50cy5tYXAobSA9PiBtLnRyYW5zcGlsZSgpKS5qb2luKCcsJyk7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLnBhdGh9KCR7YXJnc30pYDtcblxuICAgIH1cblxuICAgIGNvbXBpbGUobykge1xuXG4gICAgICAgIHZhciBub2RlID0gdGhpcy5zb3VyY2VOb2RlKG8uZmlsZSwgdGhpcy5wYXRoKTtcblxuICAgICAgICBub2RlLmFkZCgnKCcpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBpbGVMaXN0KHRoaXMuYXJndW1lbnRzLCBub2RlLCBvKS5cbiAgICAgICAgYWRkKCcpJyk7XG5cblxuICAgIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgTWV0aG9kRXhwcmVzc2lvblxuIl19