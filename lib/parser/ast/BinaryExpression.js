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
 * BinaryExpression 
 */
var BinaryExpression = function (_Node) {
    _inherits(BinaryExpression, _Node);

    function BinaryExpression(left, op, right, location) {
        _classCallCheck(this, BinaryExpression);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BinaryExpression).call(this));

        _this.type = 'binary-expression';
        _this.left = left;
        _this.op = op;
        _this.right = right;
        _this.location = location;

        return _this;
    }

    _createClass(BinaryExpression, [{
        key: 'transpile',
        value: function transpile() {

            return this.left.transpile() + ' ' + this.op + ' ' + this.right.transpile();
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            return this.sourceNode(o.file, '').add(this.left.compile(o)).add(this.op).add(this.right.compile(o));
        }
    }]);

    return BinaryExpression;
}(_Node3.default);

exports.default = BinaryExpression;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvYXN0L0JpbmFyeUV4cHJlc3Npb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdNLGdCOzs7QUFFRiw4QkFBWSxJQUFaLEVBQWtCLEVBQWxCLEVBQXNCLEtBQXRCLEVBQTZCLFFBQTdCLEVBQXVDO0FBQUE7O0FBQUE7O0FBR25DLGNBQUssSUFBTCxHQUFZLG1CQUFaO0FBQ0EsY0FBSyxJQUFMLEdBQVksSUFBWjtBQUNBLGNBQUssRUFBTCxHQUFVLEVBQVY7QUFDQSxjQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0EsY0FBSyxRQUFMLEdBQWdCLFFBQWhCOztBQVBtQztBQVN0Qzs7OztvQ0FFVzs7QUFFUixtQkFBVSxLQUFLLElBQUwsQ0FBVSxTQUFWLEVBQVYsU0FBbUMsS0FBSyxFQUF4QyxTQUE4QyxLQUFLLEtBQUwsQ0FBVyxTQUFYLEVBQTlDO0FBRUg7OztnQ0FFTyxDLEVBQUc7O0FBRVAsbUJBQU8sS0FBSyxVQUFMLENBQWdCLEVBQUUsSUFBbEIsRUFBd0IsRUFBeEIsRUFDUCxHQURPLENBQ0gsS0FBSyxJQUFMLENBQVUsT0FBVixDQUFrQixDQUFsQixDQURHLEVBRVAsR0FGTyxDQUVILEtBQUssRUFGRixFQUdQLEdBSE8sQ0FHSCxLQUFLLEtBQUwsQ0FBVyxPQUFYLENBQW1CLENBQW5CLENBSEcsQ0FBUDtBQUtIOzs7Ozs7a0JBR1UsZ0IiLCJmaWxlIjoiQmluYXJ5RXhwcmVzc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogQmluYXJ5RXhwcmVzc2lvbiBcbiAqL1xuY2xhc3MgQmluYXJ5RXhwcmVzc2lvbiBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IobGVmdCwgb3AsIHJpZ2h0LCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdiaW5hcnktZXhwcmVzc2lvbic7XG4gICAgICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgICAgIHRoaXMub3AgPSBvcDtcbiAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUoKSB7XG5cbiAgICAgICAgcmV0dXJuIGAke3RoaXMubGVmdC50cmFuc3BpbGUoKX0gJHt0aGlzLm9wfSAke3RoaXMucmlnaHQudHJhbnNwaWxlKCl9YDtcblxuICAgIH1cblxuICAgIGNvbXBpbGUobykge1xuXG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZU5vZGUoby5maWxlLCAnJykuXG4gICAgICAgIGFkZCh0aGlzLmxlZnQuY29tcGlsZShvKSkuXG4gICAgICAgIGFkZCh0aGlzLm9wKS5cbiAgICAgICAgYWRkKHRoaXMucmlnaHQuY29tcGlsZShvKSk7XG5cbiAgICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IEJpbmFyeUV4cHJlc3Npb25cbiJdfQ==