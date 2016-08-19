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
 * ArrayLiteral 
 * @param {array} members 
 * @param {Location} location 
 */
var ArrayLiteral = function (_Node) {
    _inherits(ArrayLiteral, _Node);

    function ArrayLiteral(members, location) {
        _classCallCheck(this, ArrayLiteral);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ArrayLiteral).call(this));

        _this.type = 'array-literal';
        _this.members = members;
        _this.location = location;
        return _this;
    }

    _createClass(ArrayLiteral, [{
        key: 'transpile',
        value: function transpile() {

            return '[' + this.members.map(function (m) {
                return m.transpile();
            }).join(',') + ']';
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            var node = this.sourceNode(o.file, '[');
            this.compileList(this.members, node, o).add(']');
            return node;
        }
    }]);

    return ArrayLiteral;
}(_Node3.default);

exports.default = ArrayLiteral;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvYXN0L0FycmF5TGl0ZXJhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7SUFLTSxZOzs7QUFFRiwwQkFBWSxPQUFaLEVBQXFCLFFBQXJCLEVBQStCO0FBQUE7O0FBQUE7O0FBRzNCLGNBQUssSUFBTCxHQUFZLGVBQVo7QUFDQSxjQUFLLE9BQUwsR0FBZSxPQUFmO0FBQ0EsY0FBSyxRQUFMLEdBQWdCLFFBQWhCO0FBTDJCO0FBTTlCOzs7O29DQUVXOztBQUVSLG1CQUFPLE1BQU0sS0FBSyxPQUFMLENBQWEsR0FBYixDQUFpQjtBQUFBLHVCQUFLLEVBQUUsU0FBRixFQUFMO0FBQUEsYUFBakIsRUFBcUMsSUFBckMsQ0FBMEMsR0FBMUMsQ0FBTixHQUF1RCxHQUE5RDtBQUVIOzs7Z0NBRU8sQyxFQUFHOztBQUVQLGdCQUFJLE9BQU8sS0FBSyxVQUFMLENBQWdCLEVBQUUsSUFBbEIsRUFBd0IsR0FBeEIsQ0FBWDtBQUNBLGlCQUFLLFdBQUwsQ0FBaUIsS0FBSyxPQUF0QixFQUErQixJQUEvQixFQUFxQyxDQUFyQyxFQUF3QyxHQUF4QyxDQUE0QyxHQUE1QztBQUNBLG1CQUFPLElBQVA7QUFFSDs7Ozs7O2tCQUdVLFkiLCJmaWxlIjoiQXJyYXlMaXRlcmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBBcnJheUxpdGVyYWwgXG4gKiBAcGFyYW0ge2FycmF5fSBtZW1iZXJzIFxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb24gXG4gKi9cbmNsYXNzIEFycmF5TGl0ZXJhbCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IobWVtYmVycywgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnYXJyYXktbGl0ZXJhbCc7XG4gICAgICAgIHRoaXMubWVtYmVycyA9IG1lbWJlcnM7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICB9XG5cbiAgICB0cmFuc3BpbGUoKSB7XG5cbiAgICAgICAgcmV0dXJuICdbJyArIHRoaXMubWVtYmVycy5tYXAobSA9PiBtLnRyYW5zcGlsZSgpKS5qb2luKCcsJykgKyAnXSc7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuc291cmNlTm9kZShvLmZpbGUsICdbJyk7XG4gICAgICAgIHRoaXMuY29tcGlsZUxpc3QodGhpcy5tZW1iZXJzLCBub2RlLCBvKS5hZGQoJ10nKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5TGl0ZXJhbFxuIl19