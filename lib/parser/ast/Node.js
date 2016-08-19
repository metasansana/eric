'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sourceMap = require('source-map');

var _sourceMap2 = _interopRequireDefault(_sourceMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Node parent of all the nodes
 */
var Node = function () {
    function Node() {
        _classCallCheck(this, Node);
    }

    _createClass(Node, [{
        key: 'sourceNode',
        value: function sourceNode(file, chunk) {

            return new _sourceMap2.default.SourceNode(this.location.first_line, this.location.first_column, file, chunk || null);
        }
    }, {
        key: 'transpileList',
        value: function transpileList(list) {
            return list.map(function (m) {
                return m.transpile();
            }).join(',') || '';
        }
    }, {
        key: 'compileList',
        value: function compileList(list, node, o) {

            list.forEach(function (a, i, all) {

                node.add(a.compile(o));

                if (i < all.length - 1) node.add(',');
            });

            return node;
        }
    }, {
        key: 'toString',
        value: function toString() {

            return JSON.stringify(this);
        }
    }]);

    return Node;
}();

exports.default = Node;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvYXN0L05vZGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7QUFFQTs7O0lBR00sSTs7Ozs7OzttQ0FFUyxJLEVBQU0sSyxFQUFPOztBQUVwQixtQkFBTyxJQUFJLG9CQUFVLFVBQWQsQ0FBeUIsS0FBSyxRQUFMLENBQWMsVUFBdkMsRUFDSCxLQUFLLFFBQUwsQ0FBYyxZQURYLEVBRUgsSUFGRyxFQUdILFNBQVMsSUFITixDQUFQO0FBS0g7OztzQ0FFYSxJLEVBQU07QUFDaEIsbUJBQU8sS0FBSyxHQUFMLENBQVM7QUFBQSx1QkFBSyxFQUFFLFNBQUYsRUFBTDtBQUFBLGFBQVQsRUFBNkIsSUFBN0IsQ0FBa0MsR0FBbEMsS0FBMEMsRUFBakQ7QUFFSDs7O29DQUVXLEksRUFBTSxJLEVBQU0sQyxFQUFHOztBQUV2QixpQkFBSyxPQUFMLENBQWEsVUFBQyxDQUFELEVBQUksQ0FBSixFQUFPLEdBQVAsRUFBZTs7QUFFeEIscUJBQUssR0FBTCxDQUFTLEVBQUUsT0FBRixDQUFVLENBQVYsQ0FBVDs7QUFFQSxvQkFBSSxJQUFJLElBQUksTUFBSixHQUFhLENBQXJCLEVBQ0ksS0FBSyxHQUFMLENBQVMsR0FBVDtBQUVQLGFBUEQ7O0FBU0EsbUJBQU8sSUFBUDtBQUVIOzs7bUNBRVU7O0FBRVAsbUJBQU8sS0FBSyxTQUFMLENBQWUsSUFBZixDQUFQO0FBRUg7Ozs7OztrQkFHVSxJIiwiZmlsZSI6Ik5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc291cmNlTWFwIGZyb20gJ3NvdXJjZS1tYXAnO1xuXG4vKipcbiAqIE5vZGUgcGFyZW50IG9mIGFsbCB0aGUgbm9kZXNcbiAqL1xuY2xhc3MgTm9kZSB7XG5cbiAgICBzb3VyY2VOb2RlKGZpbGUsIGNodW5rKSB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBzb3VyY2VNYXAuU291cmNlTm9kZSh0aGlzLmxvY2F0aW9uLmZpcnN0X2xpbmUsXG4gICAgICAgICAgICB0aGlzLmxvY2F0aW9uLmZpcnN0X2NvbHVtbixcbiAgICAgICAgICAgIGZpbGUsXG4gICAgICAgICAgICBjaHVuayB8fCBudWxsKTtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZUxpc3QobGlzdCkge1xuICAgICAgICByZXR1cm4gbGlzdC5tYXAobSA9PiBtLnRyYW5zcGlsZSgpKS5qb2luKCcsJykgfHwgJyc7XG5cbiAgICB9XG5cbiAgICBjb21waWxlTGlzdChsaXN0LCBub2RlLCBvKSB7XG5cbiAgICAgICAgbGlzdC5mb3JFYWNoKChhLCBpLCBhbGwpID0+IHtcblxuICAgICAgICAgICAgbm9kZS5hZGQoYS5jb21waWxlKG8pKVxuXG4gICAgICAgICAgICBpZiAoaSA8IGFsbC5sZW5ndGggLSAxKVxuICAgICAgICAgICAgICAgIG5vZGUuYWRkKCcsJyk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG5cbiAgICB9XG5cbiAgICB0b1N0cmluZygpIHtcblxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcyk7XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vZGVcbiJdfQ==