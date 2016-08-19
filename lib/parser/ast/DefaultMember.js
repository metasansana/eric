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
 * DefaultMember 
 * @param {string} member 
 * @param {Location} location 
 */
var DefaultMember = function (_Node) {
    _inherits(DefaultMember, _Node);

    function DefaultMember(member, location) {
        _classCallCheck(this, DefaultMember);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DefaultMember).call(this));

        _this.type = 'default-member';
        _this.member = member;
        _this.location = location;

        return _this;
    }

    _createClass(DefaultMember, [{
        key: 'transpile',
        value: function transpile() {

            return this.member;
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            return this.sourceNode(o.file, this.member);
        }
    }]);

    return DefaultMember;
}(_Node3.default);

exports.default = DefaultMember;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvYXN0L0RlZmF1bHRNZW1iZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7O0lBS00sYTs7O0FBRUYsMkJBQVksTUFBWixFQUFvQixRQUFwQixFQUE4QjtBQUFBOztBQUFBOztBQUcxQixjQUFLLElBQUwsR0FBWSxnQkFBWjtBQUNBLGNBQUssTUFBTCxHQUFjLE1BQWQ7QUFDQSxjQUFLLFFBQUwsR0FBZ0IsUUFBaEI7O0FBTDBCO0FBTzdCOzs7O29DQUVXOztBQUVSLG1CQUFPLEtBQUssTUFBWjtBQUVIOzs7Z0NBRU8sQyxFQUFHOztBQUVQLG1CQUFPLEtBQUssVUFBTCxDQUFnQixFQUFFLElBQWxCLEVBQXdCLEtBQUssTUFBN0IsQ0FBUDtBQUVIOzs7Ozs7a0JBSVUsYSIsImZpbGUiOiJEZWZhdWx0TWVtYmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBEZWZhdWx0TWVtYmVyIFxuICogQHBhcmFtIHtzdHJpbmd9IG1lbWJlciBcbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uIFxuICovXG5jbGFzcyBEZWZhdWx0TWVtYmVyIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihtZW1iZXIsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2RlZmF1bHQtbWVtYmVyJztcbiAgICAgICAgdGhpcy5tZW1iZXIgPSBtZW1iZXI7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZSgpIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5tZW1iZXI7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2VOb2RlKG8uZmlsZSwgdGhpcy5tZW1iZXIpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IERlZmF1bHRNZW1iZXJcbiJdfQ==