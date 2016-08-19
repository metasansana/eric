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
 * BindExpression 
 * @param {string} path 
 * @param {string} target
 * @param {array<Expression>} args
 */
var BindExpression = function (_Node) {
    _inherits(BindExpression, _Node);

    function BindExpression(path, target, args, location) {
        _classCallCheck(this, BindExpression);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BindExpression).call(this));

        _this.type = 'bind-expression';
        _this.path = path;
        _this.target = target;
        _this.arguments = args;
        _this.location = location;

        return _this;
    }

    _createClass(BindExpression, [{
        key: 'transpile',
        value: function transpile() {

            var args = this.arguments.map(function (a) {
                return a.transpile();
            }).join(',');
            args = args ? ' ,' + args : args;

            return this.path + '.' + this.target + '.bind(' + this.path + args + ')';
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            var node = this.sourceNode(o.file, '');

            node.add(this.path).add('.').add(this.target).add('.bind(');
            return this.compileList(this.arguments, node, o);
        }
    }]);

    return BindExpression;
}(_Node3.default);

exports.default = BindExpression;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvYXN0L0JpbmRFeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7SUFNTSxjOzs7QUFFRiw0QkFBWSxJQUFaLEVBQWtCLE1BQWxCLEVBQTBCLElBQTFCLEVBQWdDLFFBQWhDLEVBQTBDO0FBQUE7O0FBQUE7O0FBR3RDLGNBQUssSUFBTCxHQUFZLGlCQUFaO0FBQ0EsY0FBSyxJQUFMLEdBQVksSUFBWjtBQUNBLGNBQUssTUFBTCxHQUFjLE1BQWQ7QUFDQSxjQUFLLFNBQUwsR0FBaUIsSUFBakI7QUFDQSxjQUFLLFFBQUwsR0FBZ0IsUUFBaEI7O0FBUHNDO0FBU3pDOzs7O29DQUVXOztBQUVSLGdCQUFJLE9BQU8sS0FBSyxTQUFMLENBQWUsR0FBZixDQUFtQjtBQUFBLHVCQUFLLEVBQUUsU0FBRixFQUFMO0FBQUEsYUFBbkIsRUFBdUMsSUFBdkMsQ0FBNEMsR0FBNUMsQ0FBWDtBQUNBLG1CQUFRLElBQUQsR0FBUyxPQUFPLElBQWhCLEdBQXVCLElBQTlCOztBQUVBLG1CQUFVLEtBQUssSUFBZixTQUF1QixLQUFLLE1BQTVCLGNBQTJDLEtBQUssSUFBaEQsR0FBdUQsSUFBdkQ7QUFFSDs7O2dDQUVPLEMsRUFBRzs7QUFFUCxnQkFBSSxPQUFPLEtBQUssVUFBTCxDQUFnQixFQUFFLElBQWxCLEVBQXdCLEVBQXhCLENBQVg7O0FBRUEsaUJBQUssR0FBTCxDQUFTLEtBQUssSUFBZCxFQUNBLEdBREEsQ0FDSSxHQURKLEVBRUEsR0FGQSxDQUVJLEtBQUssTUFGVCxFQUdBLEdBSEEsQ0FHSSxRQUhKO0FBSUEsbUJBQU8sS0FBSyxXQUFMLENBQWlCLEtBQUssU0FBdEIsRUFBaUMsSUFBakMsRUFBdUMsQ0FBdkMsQ0FBUDtBQUVIOzs7Ozs7a0JBSVUsYyIsImZpbGUiOiJCaW5kRXhwcmVzc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogQmluZEV4cHJlc3Npb24gXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YXJnZXRcbiAqIEBwYXJhbSB7YXJyYXk8RXhwcmVzc2lvbj59IGFyZ3NcbiAqL1xuY2xhc3MgQmluZEV4cHJlc3Npb24gZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKHBhdGgsIHRhcmdldCwgYXJncywgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnYmluZC1leHByZXNzaW9uJztcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMuYXJndW1lbnRzID0gYXJncztcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKCkge1xuXG4gICAgICAgIHZhciBhcmdzID0gdGhpcy5hcmd1bWVudHMubWFwKGEgPT4gYS50cmFuc3BpbGUoKSkuam9pbignLCcpO1xuICAgICAgICBhcmdzID0gKGFyZ3MpID8gJyAsJyArIGFyZ3MgOiBhcmdzO1xuXG4gICAgICAgIHJldHVybiBgJHt0aGlzLnBhdGh9LiR7dGhpcy50YXJnZXR9LmJpbmQoJHt0aGlzLnBhdGh9JHthcmdzfSlgO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZShvKSB7XG5cbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLnNvdXJjZU5vZGUoby5maWxlLCAnJyk7XG5cbiAgICAgICAgbm9kZS5hZGQodGhpcy5wYXRoKS5cbiAgICAgICAgYWRkKCcuJykuXG4gICAgICAgIGFkZCh0aGlzLnRhcmdldCkuXG4gICAgICAgIGFkZCgnLmJpbmQoJyk7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBpbGVMaXN0KHRoaXMuYXJndW1lbnRzLCBub2RlLCBvKVxuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJpbmRFeHByZXNzaW9uXG4iXX0=