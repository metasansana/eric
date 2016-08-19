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
 * PropertyAssignment 
 * @param {string} name
 * @param {ValueExpression} value 
 */
var PropertyAssignment = function (_Node) {
    _inherits(PropertyAssignment, _Node);

    function PropertyAssignment(name, value, location) {
        _classCallCheck(this, PropertyAssignment);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PropertyAssignment).call(this));

        _this.type = 'property-assignment';
        _this.name = name;
        _this.value = value;
        _this.location = location;

        return _this;
    }

    _createClass(PropertyAssignment, [{
        key: 'transpile',
        value: function transpile() {

            return this.name;
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            return this.sourceNode(o.file, ['this.' + this.name + ' = ', this.value.compile(o)]);
        }
    }]);

    return PropertyAssignment;
}(_Node3.default);

exports.default = PropertyAssignment;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvYXN0L1Byb3BlcnR5QXNzaWdubWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7SUFLTSxrQjs7O0FBRUYsZ0NBQVksSUFBWixFQUFrQixLQUFsQixFQUF5QixRQUF6QixFQUFtQztBQUFBOztBQUFBOztBQUcvQixjQUFLLElBQUwsR0FBWSxxQkFBWjtBQUNBLGNBQUssSUFBTCxHQUFZLElBQVo7QUFDQSxjQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0EsY0FBSyxRQUFMLEdBQWdCLFFBQWhCOztBQU4rQjtBQVFsQzs7OztvQ0FFVzs7QUFFUixtQkFBTyxLQUFLLElBQVo7QUFFSDs7O2dDQUVPLEMsRUFBRzs7QUFFUCxtQkFBTyxLQUFLLFVBQUwsQ0FBZ0IsRUFBRSxJQUFsQixFQUF3QixXQUFTLEtBQUssSUFBZCxVQUF5QixLQUFLLEtBQUwsQ0FBVyxPQUFYLENBQW1CLENBQW5CLENBQXpCLENBQXhCLENBQVA7QUFFSDs7Ozs7O2tCQUlVLGtCIiwiZmlsZSI6IlByb3BlcnR5QXNzaWdubWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogUHJvcGVydHlBc3NpZ25tZW50IFxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7VmFsdWVFeHByZXNzaW9ufSB2YWx1ZSBcbiAqL1xuY2xhc3MgUHJvcGVydHlBc3NpZ25tZW50IGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB2YWx1ZSwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAncHJvcGVydHktYXNzaWdubWVudCc7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKCkge1xuXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2VOb2RlKG8uZmlsZSwgW2B0aGlzLiR7dGhpcy5uYW1lfSA9IGAsIHRoaXMudmFsdWUuY29tcGlsZShvKV0pO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb3BlcnR5QXNzaWdubWVudFxuIl19