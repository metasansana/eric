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
 * TernaryExpression 
 * @param {Expression} logic 
 * @param {Expression} iftrue 
 * @param {Expression} iffalse 
 */
var TernaryExpression = function (_Node) {
    _inherits(TernaryExpression, _Node);

    function TernaryExpression(logic, iftrue, iffalse, location) {
        _classCallCheck(this, TernaryExpression);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TernaryExpression).call(this));

        _this.type = 'ternary-expression';
        _this.logic = logic;
        _this.iftrue = iftrue;
        _this.iffalse = iffalse;
        _this.location = location;

        return _this;
    }

    _createClass(TernaryExpression, [{
        key: 'transpile',
        value: function transpile() {

            return '(' + this.logic.transpile() + ')? ' + this.iftrue.transpile() + ' : ' + this.iffalse.transpile();
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            return this.sourceNode(o.file, '(').add(this.logic.compile(o)).add(')?').add(this.iftrue.compile(o)).add(':').add(this.iffalse.compile(o));
        }
    }]);

    return TernaryExpression;
}(_Node3.default);

exports.default = TernaryExpression;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvYXN0L1Rlcm5hcnlFeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7SUFNTSxpQjs7O0FBRUYsK0JBQVksS0FBWixFQUFtQixNQUFuQixFQUEyQixPQUEzQixFQUFvQyxRQUFwQyxFQUE4QztBQUFBOztBQUFBOztBQUcxQyxjQUFLLElBQUwsR0FBWSxvQkFBWjtBQUNBLGNBQUssS0FBTCxHQUFhLEtBQWI7QUFDQSxjQUFLLE1BQUwsR0FBYyxNQUFkO0FBQ0EsY0FBSyxPQUFMLEdBQWUsT0FBZjtBQUNBLGNBQUssUUFBTCxHQUFnQixRQUFoQjs7QUFQMEM7QUFTN0M7Ozs7b0NBRVc7O0FBRVIseUJBQVcsS0FBSyxLQUFMLENBQVcsU0FBWCxFQUFYLFdBQXVDLEtBQUssTUFBTCxDQUFZLFNBQVosRUFBdkMsV0FBb0UsS0FBSyxPQUFMLENBQWEsU0FBYixFQUFwRTtBQUVIOzs7Z0NBRU8sQyxFQUFHOztBQUVQLG1CQUFPLEtBQUssVUFBTCxDQUFnQixFQUFFLElBQWxCLEVBQXdCLEdBQXhCLEVBQ1AsR0FETyxDQUNILEtBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsQ0FBbkIsQ0FERyxFQUVQLEdBRk8sQ0FFSCxJQUZHLEVBR1AsR0FITyxDQUdILEtBQUssTUFBTCxDQUFZLE9BQVosQ0FBb0IsQ0FBcEIsQ0FIRyxFQUlQLEdBSk8sQ0FJSCxHQUpHLEVBS1AsR0FMTyxDQUtILEtBQUssT0FBTCxDQUFhLE9BQWIsQ0FBcUIsQ0FBckIsQ0FMRyxDQUFQO0FBT0g7Ozs7OztrQkFJVSxpQiIsImZpbGUiOiJUZXJuYXJ5RXhwcmVzc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogVGVybmFyeUV4cHJlc3Npb24gXG4gKiBAcGFyYW0ge0V4cHJlc3Npb259IGxvZ2ljIFxuICogQHBhcmFtIHtFeHByZXNzaW9ufSBpZnRydWUgXG4gKiBAcGFyYW0ge0V4cHJlc3Npb259IGlmZmFsc2UgXG4gKi9cbmNsYXNzIFRlcm5hcnlFeHByZXNzaW9uIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihsb2dpYywgaWZ0cnVlLCBpZmZhbHNlLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICd0ZXJuYXJ5LWV4cHJlc3Npb24nO1xuICAgICAgICB0aGlzLmxvZ2ljID0gbG9naWM7XG4gICAgICAgIHRoaXMuaWZ0cnVlID0gaWZ0cnVlO1xuICAgICAgICB0aGlzLmlmZmFsc2UgPSBpZmZhbHNlO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUoKSB7XG5cbiAgICAgICAgcmV0dXJuIGAoJHt0aGlzLmxvZ2ljLnRyYW5zcGlsZSgpfSk/ICR7dGhpcy5pZnRydWUudHJhbnNwaWxlKCl9IDogJHt0aGlzLmlmZmFsc2UudHJhbnNwaWxlKCl9YDtcblxuICAgIH1cblxuICAgIGNvbXBpbGUobykge1xuXG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZU5vZGUoby5maWxlLCAnKCcpLlxuICAgICAgICBhZGQodGhpcy5sb2dpYy5jb21waWxlKG8pKS5cbiAgICAgICAgYWRkKCcpPycpLlxuICAgICAgICBhZGQodGhpcy5pZnRydWUuY29tcGlsZShvKSkuXG4gICAgICAgIGFkZCgnOicpLlxuICAgICAgICBhZGQodGhpcy5pZmZhbHNlLmNvbXBpbGUobykpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlcm5hcnlFeHByZXNzaW9uXG4iXX0=