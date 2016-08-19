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
 * NewExpression
 */
var NewExpression = function (_Node) {
    _inherits(NewExpression, _Node);

    function NewExpression(name, args, location) {
        _classCallCheck(this, NewExpression);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NewExpression).call(this));

        _this.type = 'new-expression';
        _this.name = name;
        _this.arguments = args;
        _this.location = location;

        return _this;
    }

    _createClass(NewExpression, [{
        key: 'transpile',
        value: function transpile() {

            var args = this.transpileList(this.arguments);
            return 'new ' + this.name + '(' + args + ')';
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            var node = this.sourceNode(o.file, 'new ' + this.name).add('(');

            return this.compileList(this.arguments, node, o);
        }
    }]);

    return NewExpression;
}(_Node3.default);

exports.default = NewExpression;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvYXN0L05ld0V4cHJlc3Npb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdNLGE7OztBQUVGLDJCQUFZLElBQVosRUFBa0IsSUFBbEIsRUFBd0IsUUFBeEIsRUFBa0M7QUFBQTs7QUFBQTs7QUFHOUIsY0FBSyxJQUFMLEdBQVksZ0JBQVo7QUFDQSxjQUFLLElBQUwsR0FBWSxJQUFaO0FBQ0EsY0FBSyxTQUFMLEdBQWlCLElBQWpCO0FBQ0EsY0FBSyxRQUFMLEdBQWdCLFFBQWhCOztBQU44QjtBQVFqQzs7OztvQ0FFVzs7QUFFUixnQkFBSSxPQUFPLEtBQUssYUFBTCxDQUFtQixLQUFLLFNBQXhCLENBQVg7QUFDQSw0QkFBYyxLQUFLLElBQW5CLFNBQTJCLElBQTNCO0FBRUg7OztnQ0FFTyxDLEVBQUc7O0FBRVAsZ0JBQUksT0FBTyxLQUFLLFVBQUwsQ0FBZ0IsRUFBRSxJQUFsQixXQUErQixLQUFLLElBQXBDLEVBQ1gsR0FEVyxDQUNQLEdBRE8sQ0FBWDs7QUFHQSxtQkFBTyxLQUFLLFdBQUwsQ0FBaUIsS0FBSyxTQUF0QixFQUFpQyxJQUFqQyxFQUF1QyxDQUF2QyxDQUFQO0FBRUg7Ozs7OztrQkFHVSxhIiwiZmlsZSI6Ik5ld0V4cHJlc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIE5ld0V4cHJlc3Npb25cbiAqL1xuY2xhc3MgTmV3RXhwcmVzc2lvbiBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IobmFtZSwgYXJncywgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnbmV3LWV4cHJlc3Npb24nO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmFyZ3VtZW50cyA9IGFyZ3M7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZSgpIHtcblxuICAgICAgICB2YXIgYXJncyA9IHRoaXMudHJhbnNwaWxlTGlzdCh0aGlzLmFyZ3VtZW50cyk7XG4gICAgICAgIHJldHVybiBgbmV3ICR7dGhpcy5uYW1lfSgke2FyZ3N9KWA7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuc291cmNlTm9kZShvLmZpbGUsIGBuZXcgJHt0aGlzLm5hbWV9YCkuXG4gICAgICAgIGFkZCgnKCcpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBpbGVMaXN0KHRoaXMuYXJndW1lbnRzLCBub2RlLCBvKTtcblxuICAgIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgTmV3RXhwcmVzc2lvblxuIl19