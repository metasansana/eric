'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _Command2 = require('./Command');

var _Command3 = _interopRequireDefault(_Command2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * CommandRunner is responsible for executing the command the user specifies.
 * @param {object} args 
 */
var CommandRunner = function (_Command) {
    _inherits(CommandRunner, _Command);

    function CommandRunner(args) {
        _classCallCheck(this, CommandRunner);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CommandRunner).call(this, args));

        _this._cmds = Object.create(null);
        return _this;
    }

    /**
     * getCommands 
     * @returns {object}
     */


    _createClass(CommandRunner, [{
        key: 'getCommands',
        value: function getCommands() {
            return this._cmds;
        }

        /**
         * addCommand will add a Command to this CommandRunner
         * @param {string} name
         * @param {Command} cmd 
         * @returns {CommandRunner}
         */

    }, {
        key: 'addCommand',
        value: function addCommand(name, cmd) {

            cmd.setArgs(this.$args);

            if (this._cmds[name]) throw new Error('Duplicate task ' + name + ' is not allowed!');

            this._cmds[name] = cmd;
            return this;
        }

        /**
         * execute the requested command
         */

    }, {
        key: 'execute',
        value: function execute() {
            var _this2 = this;

            return _bluebird2.default.all(Object.keys(this._cmds).map(function (k) {
                return _this2.$args[k] === true ? _this2._cmds[k].execute() : null;
            }).filter(function (p) {
                return p;
            }));
        }
    }]);

    return CommandRunner;
}(_Command3.default);

exports.default = CommandRunner;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGkvQ29tbWFuZFJ1bm5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUNBOzs7O0lBSU0sYTs7O0FBRUYsMkJBQVksSUFBWixFQUFrQjtBQUFBOztBQUFBLHFHQUNSLElBRFE7O0FBRWQsY0FBSyxLQUFMLEdBQWEsT0FBTyxNQUFQLENBQWMsSUFBZCxDQUFiO0FBRmM7QUFHakI7O0FBRUQ7Ozs7Ozs7O3NDQUljO0FBQ1osbUJBQU8sS0FBSyxLQUFaO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OzttQ0FNVyxJLEVBQU0sRyxFQUFLOztBQUVsQixnQkFBSSxPQUFKLENBQVksS0FBSyxLQUFqQjs7QUFFQSxnQkFBSSxLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQUosRUFDSSxNQUFNLElBQUksS0FBSixxQkFBNEIsSUFBNUIsc0JBQU47O0FBRUosaUJBQUssS0FBTCxDQUFXLElBQVgsSUFBbUIsR0FBbkI7QUFDQSxtQkFBTyxJQUFQO0FBRUg7O0FBRUQ7Ozs7OztrQ0FHVTtBQUFBOztBQUVOLG1CQUFPLG1CQUFRLEdBQVIsQ0FBWSxPQUFPLElBQVAsQ0FBWSxLQUFLLEtBQWpCLEVBQXdCLEdBQXhCLENBQTRCO0FBQUEsdUJBQU0sT0FBSyxLQUFMLENBQVcsQ0FBWCxNQUFrQixJQUFuQixHQUNoRCxPQUFLLEtBQUwsQ0FBVyxDQUFYLEVBQWMsT0FBZCxFQURnRCxHQUN0QixJQURpQjtBQUFBLGFBQTVCLEVBQ2lCLE1BRGpCLENBQ3dCO0FBQUEsdUJBQUssQ0FBTDtBQUFBLGFBRHhCLENBQVosQ0FBUDtBQUdIOzs7Ozs7a0JBSVUsYSIsImZpbGUiOiJDb21tYW5kUnVubmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb21pc2UgZnJvbSAnYmx1ZWJpcmQnO1xuaW1wb3J0IENvbW1hbmQgZnJvbSAnLi9Db21tYW5kJztcbi8qKlxuICogQ29tbWFuZFJ1bm5lciBpcyByZXNwb25zaWJsZSBmb3IgZXhlY3V0aW5nIHRoZSBjb21tYW5kIHRoZSB1c2VyIHNwZWNpZmllcy5cbiAqIEBwYXJhbSB7b2JqZWN0fSBhcmdzIFxuICovXG5jbGFzcyBDb21tYW5kUnVubmVyIGV4dGVuZHMgQ29tbWFuZCB7XG5cbiAgICBjb25zdHJ1Y3RvcihhcmdzKSB7XG4gICAgICAgIHN1cGVyKGFyZ3MpO1xuICAgICAgICB0aGlzLl9jbWRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBnZXRDb21tYW5kcyBcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgICAqL1xuICAgIGdldENvbW1hbmRzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NtZHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogYWRkQ29tbWFuZCB3aWxsIGFkZCBhIENvbW1hbmQgdG8gdGhpcyBDb21tYW5kUnVubmVyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge0NvbW1hbmR9IGNtZCBcbiAgICAgKiBAcmV0dXJucyB7Q29tbWFuZFJ1bm5lcn1cbiAgICAgKi9cbiAgICBhZGRDb21tYW5kKG5hbWUsIGNtZCkge1xuXG4gICAgICAgIGNtZC5zZXRBcmdzKHRoaXMuJGFyZ3MpO1xuXG4gICAgICAgIGlmICh0aGlzLl9jbWRzW25hbWVdKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBEdXBsaWNhdGUgdGFzayAke25hbWV9IGlzIG5vdCBhbGxvd2VkIWApO1xuXG4gICAgICAgIHRoaXMuX2NtZHNbbmFtZV0gPSBjbWQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZXhlY3V0ZSB0aGUgcmVxdWVzdGVkIGNvbW1hbmRcbiAgICAgKi9cbiAgICBleGVjdXRlKCkge1xuXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChPYmplY3Qua2V5cyh0aGlzLl9jbWRzKS5tYXAoayA9PiAodGhpcy4kYXJnc1trXSA9PT0gdHJ1ZSkgP1xuICAgICAgICAgICAgdGhpcy5fY21kc1trXS5leGVjdXRlKCkgOiBudWxsKS5maWx0ZXIocCA9PiBwKSk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tbWFuZFJ1bm5lclxuIl19