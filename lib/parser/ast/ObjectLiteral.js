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
 * ObjectLiteral 
 * @param {array<object>} keys 
 * @param {Location} location 
 */
var ObjectLiteral = function (_Node) {
    _inherits(ObjectLiteral, _Node);

    function ObjectLiteral(keys, location) {
        _classCallCheck(this, ObjectLiteral);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ObjectLiteral).call(this));

        _this.type = 'object-literal';
        _this.keys = keys;
        _this.location = location;

        return _this;
    }

    _createClass(ObjectLiteral, [{
        key: 'transpile',
        value: function transpile() {

            return '{' + this.keys.map(function (p) {
                return k.key + ':' + k.value.transpile();
            }).join(',') + '}';
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            var node = this.sourceNode(o.file, '{');

            this.keys.forEach(function (p, i, all) {
                node.add(['\'' + p.key + '\':', p.value.compile(o)]);
                if (i < all.length - 1) node.add(',');
            });

            return node.add('}');
        }
    }]);

    return ObjectLiteral;
}(_Node3.default);

exports.default = ObjectLiteral;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvYXN0L09iamVjdExpdGVyYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7O0lBS00sYTs7O0FBRUYsMkJBQVksSUFBWixFQUFrQixRQUFsQixFQUE0QjtBQUFBOztBQUFBOztBQUd4QixjQUFLLElBQUwsR0FBWSxnQkFBWjtBQUNBLGNBQUssSUFBTCxHQUFZLElBQVo7QUFDQSxjQUFLLFFBQUwsR0FBZ0IsUUFBaEI7O0FBTHdCO0FBTzNCOzs7O29DQUVXOztBQUVSLG1CQUFPLE1BQU0sS0FBSyxJQUFMLENBQVUsR0FBVixDQUFjO0FBQUEsdUJBQVEsRUFBRSxHQUFWLFNBQWlCLEVBQUUsS0FBRixDQUFRLFNBQVIsRUFBakI7QUFBQSxhQUFkLEVBQXNELElBQXRELENBQTJELEdBQTNELENBQU4sR0FBd0UsR0FBL0U7QUFFSDs7O2dDQUVPLEMsRUFBRzs7QUFFUCxnQkFBSSxPQUFPLEtBQUssVUFBTCxDQUFnQixFQUFFLElBQWxCLEVBQXdCLEdBQXhCLENBQVg7O0FBRUEsaUJBQUssSUFBTCxDQUFVLE9BQVYsQ0FBa0IsVUFBQyxDQUFELEVBQUksQ0FBSixFQUFPLEdBQVAsRUFBZTtBQUM3QixxQkFBSyxHQUFMLENBQVMsUUFBSyxFQUFFLEdBQVAsVUFBZ0IsRUFBRSxLQUFGLENBQVEsT0FBUixDQUFnQixDQUFoQixDQUFoQixDQUFUO0FBQ0Esb0JBQUcsSUFBSyxJQUFJLE1BQUosR0FBYSxDQUFyQixFQUNGLEtBQUssR0FBTCxDQUFTLEdBQVQ7QUFDRCxhQUpEOztBQU1BLG1CQUFPLEtBQUssR0FBTCxDQUFTLEdBQVQsQ0FBUDtBQUVIOzs7Ozs7a0JBSVUsYSIsImZpbGUiOiJPYmplY3RMaXRlcmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBPYmplY3RMaXRlcmFsIFxuICogQHBhcmFtIHthcnJheTxvYmplY3Q+fSBrZXlzIFxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb24gXG4gKi9cbmNsYXNzIE9iamVjdExpdGVyYWwgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGtleXMsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ29iamVjdC1saXRlcmFsJztcbiAgICAgICAgdGhpcy5rZXlzID0ga2V5cztcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKCkge1xuXG4gICAgICAgIHJldHVybiAneycgKyB0aGlzLmtleXMubWFwKHAgPT4gYCR7ay5rZXl9OiR7ay52YWx1ZS50cmFuc3BpbGUoKX1gKS5qb2luKCcsJykgKyAnfSc7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuc291cmNlTm9kZShvLmZpbGUsICd7Jyk7XG5cbiAgICAgICAgdGhpcy5rZXlzLmZvckVhY2goKHAsIGksIGFsbCkgPT4ge1xuICAgICAgICAgICAgbm9kZS5hZGQoW2AnJHtwLmtleX0nOmAsIHAudmFsdWUuY29tcGlsZShvKV0pO1xuICAgICAgICAgICAgaWYoaSA8IChhbGwubGVuZ3RoIC0gMSkpXG4gICAgICAgICAgbm9kZS5hZGQoJywnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG5vZGUuYWRkKCd9Jyk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0TGl0ZXJhbFxuIl19