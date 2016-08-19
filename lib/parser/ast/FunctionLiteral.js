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

var count = 0;
/**
 * FunctionLiteral 
 * @param {array<string>} parameters 
 * @param {Expression} body 
 * @param {Location} location 
 */

var FunctionLiteral = function (_Node) {
    _inherits(FunctionLiteral, _Node);

    function FunctionLiteral(parameters, body, location) {
        _classCallCheck(this, FunctionLiteral);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FunctionLiteral).call(this));

        _this.type = 'function-literal';
        _this.parameters = parameters;
        _this.body = body;
        _this.location = location;

        return _this;
    }

    _createClass(FunctionLiteral, [{
        key: 'transpile',
        value: function transpile() {

            var params = this.parameters.join(',');
            count = count + 1;

            return 'function function_literal_' + count + '(' + params + ')' + ('{ return ' + this.body.transpile() + '; }.bind(this)');
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            var node = this.sourceNode(o.file, '');

            node.add('function function_literal_' + count + '(' + this.parameters.join(',') + ')').add('{ return ');

            return this.compileList(this.body.compile(o)).add('; } bind(this)');
        }
    }]);

    return FunctionLiteral;
}(_Node3.default);

exports.default = FunctionLiteral;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvYXN0L0Z1bmN0aW9uTGl0ZXJhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJLFFBQVEsQ0FBWjtBQUNBOzs7Ozs7O0lBTU0sZTs7O0FBRUYsNkJBQVksVUFBWixFQUF3QixJQUF4QixFQUE4QixRQUE5QixFQUF3QztBQUFBOztBQUFBOztBQUdwQyxjQUFLLElBQUwsR0FBWSxrQkFBWjtBQUNBLGNBQUssVUFBTCxHQUFrQixVQUFsQjtBQUNBLGNBQUssSUFBTCxHQUFZLElBQVo7QUFDQSxjQUFLLFFBQUwsR0FBZ0IsUUFBaEI7O0FBTm9DO0FBUXZDOzs7O29DQUVXOztBQUVSLGdCQUFJLFNBQVMsS0FBSyxVQUFMLENBQWdCLElBQWhCLENBQXFCLEdBQXJCLENBQWI7QUFDQSxvQkFBUSxRQUFRLENBQWhCOztBQUVBLG1CQUFPLCtCQUE2QixLQUE3QixTQUFzQyxNQUF0Qyx3QkFDUyxLQUFLLElBQUwsQ0FBVSxTQUFWLEVBRFQsb0JBQVA7QUFHSDs7O2dDQUVPLEMsRUFBRzs7QUFFUCxnQkFBSSxPQUFPLEtBQUssVUFBTCxDQUFnQixFQUFFLElBQWxCLEVBQXdCLEVBQXhCLENBQVg7O0FBRUEsaUJBQUssR0FBTCxnQ0FBc0MsS0FBdEMsU0FBK0MsS0FBSyxVQUFMLENBQWdCLElBQWhCLENBQXFCLEdBQXJCLENBQS9DLFFBQ0EsR0FEQSxDQUNJLFdBREo7O0FBR0EsbUJBQU8sS0FBSyxXQUFMLENBQWlCLEtBQUssSUFBTCxDQUFVLE9BQVYsQ0FBa0IsQ0FBbEIsQ0FBakIsRUFDUCxHQURPLENBQ0gsZ0JBREcsQ0FBUDtBQUdIOzs7Ozs7a0JBSVUsZSIsImZpbGUiOiJGdW5jdGlvbkxpdGVyYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG52YXIgY291bnQgPSAwO1xuLyoqXG4gKiBGdW5jdGlvbkxpdGVyYWwgXG4gKiBAcGFyYW0ge2FycmF5PHN0cmluZz59IHBhcmFtZXRlcnMgXG4gKiBAcGFyYW0ge0V4cHJlc3Npb259IGJvZHkgXG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvbiBcbiAqL1xuY2xhc3MgRnVuY3Rpb25MaXRlcmFsIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihwYXJhbWV0ZXJzLCBib2R5LCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdmdW5jdGlvbi1saXRlcmFsJztcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgICAgICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKCkge1xuXG4gICAgICAgIHZhciBwYXJhbXMgPSB0aGlzLnBhcmFtZXRlcnMuam9pbignLCcpO1xuICAgICAgICBjb3VudCA9IGNvdW50ICsgMTtcblxuICAgICAgICByZXR1cm4gYGZ1bmN0aW9uIGZ1bmN0aW9uX2xpdGVyYWxfJHtjb3VudH0oJHtwYXJhbXN9KWAgK1xuICAgICAgICAgICAgYHsgcmV0dXJuICR7dGhpcy5ib2R5LnRyYW5zcGlsZSgpfTsgfS5iaW5kKHRoaXMpYDtcblxuICAgIH1cblxuICAgIGNvbXBpbGUobykge1xuXG4gICAgICAgIHZhciBub2RlID0gdGhpcy5zb3VyY2VOb2RlKG8uZmlsZSwgJycpO1xuXG4gICAgICAgIG5vZGUuYWRkKGBmdW5jdGlvbiBmdW5jdGlvbl9saXRlcmFsXyR7Y291bnR9KCR7dGhpcy5wYXJhbWV0ZXJzLmpvaW4oJywnKX0pYCkuXG4gICAgICAgIGFkZCgneyByZXR1cm4gJyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGlsZUxpc3QodGhpcy5ib2R5LmNvbXBpbGUobykpLlxuICAgICAgICBhZGQoJzsgfSBiaW5kKHRoaXMpJyk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRnVuY3Rpb25MaXRlcmFsXG4iXX0=