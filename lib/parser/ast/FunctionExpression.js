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
 * FunctionExpression
 */
var FunctionExpression = function (_Node) {
    _inherits(FunctionExpression, _Node);

    function FunctionExpression(name, args, location) {
        _classCallCheck(this, FunctionExpression);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FunctionExpression).call(this));

        _this.type = 'function-expression';
        _this.name = name;
        _this.arguments = args;
        _this.location = location;

        return _this;
    }

    _createClass(FunctionExpression, [{
        key: 'transpile',
        value: function transpile() {

            var args = this.transpileList(this.arguments);
            return this.name + '(' + args + ')';
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            var node = this.sourceNode(o.file, 'this.' + this.name).add('(');

            return this.compileList(this.arguments, node, o).add(')');
        }
    }]);

    return FunctionExpression;
}(_Node3.default);

exports.default = FunctionExpression;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvYXN0L0Z1bmN0aW9uRXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR00sa0I7OztBQUVGLGdDQUFZLElBQVosRUFBa0IsSUFBbEIsRUFBd0IsUUFBeEIsRUFBa0M7QUFBQTs7QUFBQTs7QUFHOUIsY0FBSyxJQUFMLEdBQVkscUJBQVo7QUFDQSxjQUFLLElBQUwsR0FBWSxJQUFaO0FBQ0EsY0FBSyxTQUFMLEdBQWlCLElBQWpCO0FBQ0EsY0FBSyxRQUFMLEdBQWdCLFFBQWhCOztBQU44QjtBQVFqQzs7OztvQ0FFVzs7QUFFUixnQkFBSSxPQUFPLEtBQUssYUFBTCxDQUFtQixLQUFLLFNBQXhCLENBQVg7QUFDQSxtQkFBVSxLQUFLLElBQWYsU0FBdUIsSUFBdkI7QUFFSDs7O2dDQUVPLEMsRUFBRzs7QUFFUCxnQkFBSSxPQUFPLEtBQUssVUFBTCxDQUFnQixFQUFFLElBQWxCLFlBQWdDLEtBQUssSUFBckMsRUFDWCxHQURXLENBQ1AsR0FETyxDQUFYOztBQUdBLG1CQUFPLEtBQUssV0FBTCxDQUFpQixLQUFLLFNBQXRCLEVBQWlDLElBQWpDLEVBQXVDLENBQXZDLEVBQ1AsR0FETyxDQUNILEdBREcsQ0FBUDtBQUtIOzs7Ozs7a0JBR1Usa0IiLCJmaWxlIjoiRnVuY3Rpb25FeHByZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBGdW5jdGlvbkV4cHJlc3Npb25cbiAqL1xuY2xhc3MgRnVuY3Rpb25FeHByZXNzaW9uIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBhcmdzLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdmdW5jdGlvbi1leHByZXNzaW9uJztcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5hcmd1bWVudHMgPSBhcmdzO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUoKSB7XG5cbiAgICAgICAgdmFyIGFyZ3MgPSB0aGlzLnRyYW5zcGlsZUxpc3QodGhpcy5hcmd1bWVudHMpO1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5uYW1lfSgke2FyZ3N9KWA7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuc291cmNlTm9kZShvLmZpbGUsIGB0aGlzLiR7dGhpcy5uYW1lfWApLlxuICAgICAgICBhZGQoJygnKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5jb21waWxlTGlzdCh0aGlzLmFyZ3VtZW50cywgbm9kZSwgbykuXG4gICAgICAgIGFkZCgnKScpO1xuXG5cblxuICAgIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgRnVuY3Rpb25FeHByZXNzaW9uXG4iXX0=