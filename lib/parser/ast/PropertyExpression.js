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
 * PropertyExpression 
 * @param {string} path 
 */
var PropertyExpression = function (_Node) {
    _inherits(PropertyExpression, _Node);

    function PropertyExpression(path, location) {
        _classCallCheck(this, PropertyExpression);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PropertyExpression).call(this));

        _this.type = 'property-expression';
        _this.path = path;
        _this.location = location;

        return _this;
    }

    _createClass(PropertyExpression, [{
        key: 'transpile',
        value: function transpile() {

            return this.path;
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            return this.sourceNode(o.file, this.path);
        }
    }]);

    return PropertyExpression;
}(_Node3.default);

exports.default = PropertyExpression;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvYXN0L1Byb3BlcnR5RXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7OztJQUlNLGtCOzs7QUFFRixnQ0FBWSxJQUFaLEVBQWtCLFFBQWxCLEVBQTRCO0FBQUE7O0FBQUE7O0FBR3hCLGNBQUssSUFBTCxHQUFZLHFCQUFaO0FBQ0EsY0FBSyxJQUFMLEdBQVksSUFBWjtBQUNBLGNBQUssUUFBTCxHQUFnQixRQUFoQjs7QUFMd0I7QUFPM0I7Ozs7b0NBRVc7O0FBRVIsbUJBQU8sS0FBSyxJQUFaO0FBRUg7OztnQ0FFTyxDLEVBQUc7O0FBRVAsbUJBQU8sS0FBSyxVQUFMLENBQWdCLEVBQUUsSUFBbEIsRUFBd0IsS0FBSyxJQUE3QixDQUFQO0FBRUg7Ozs7OztrQkFHVSxrQiIsImZpbGUiOiJQcm9wZXJ0eUV4cHJlc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIFByb3BlcnR5RXhwcmVzc2lvbiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFxuICovXG5jbGFzcyBQcm9wZXJ0eUV4cHJlc3Npb24gZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKHBhdGgsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ3Byb3BlcnR5LWV4cHJlc3Npb24nO1xuICAgICAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUoKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucGF0aDtcblxuICAgIH1cblxuICAgIGNvbXBpbGUobykge1xuXG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZU5vZGUoby5maWxlLCB0aGlzLnBhdGgpO1xuXG4gICAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBQcm9wZXJ0eUV4cHJlc3Npb25cbiJdfQ==