'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

var _Command2 = require('./Command');

var _Command3 = _interopRequireDefault(_Command2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mkdir = _bluebird2.default.promisify(_mkdirp2.default);

/**
 * InitCommand takes care of initializing the eric folder.
 * @param {FileSystem} fs 
 */

var InitCommand = function (_Command) {
    _inherits(InitCommand, _Command);

    function InitCommand(fs) {
        _classCallCheck(this, InitCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(InitCommand).call(this, null));

        _this._fs = fs;

        return _this;
    }

    _createClass(InitCommand, [{
        key: 'execute',
        value: function execute() {
            var _this2 = this;

            return _bluebird2.default.all(this._fs.ERIC_FOLDERS.map(function (p) {
                return _this2._fs.makeDir(p);
            }));
        }
    }]);

    return InitCommand;
}(_Command3.default);

exports.default = InitCommand;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGkvSW5pdENvbW1hbmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU0sUUFBUSxtQkFBUSxTQUFSLGtCQUFkOztBQUVBOzs7OztJQUlNLFc7OztBQUVGLHlCQUFZLEVBQVosRUFBZ0I7QUFBQTs7QUFBQSxtR0FFTixJQUZNOztBQUdaLGNBQUssR0FBTCxHQUFXLEVBQVg7O0FBSFk7QUFLZjs7OztrQ0FFUztBQUFBOztBQUVOLG1CQUFPLG1CQUFRLEdBQVIsQ0FBWSxLQUFLLEdBQUwsQ0FBUyxZQUFULENBQXNCLEdBQXRCLENBQTBCO0FBQUEsdUJBQUssT0FBSyxHQUFMLENBQVMsT0FBVCxDQUFpQixDQUFqQixDQUFMO0FBQUEsYUFBMUIsQ0FBWixDQUFQO0FBRUg7Ozs7OztrQkFJVSxXIiwiZmlsZSI6IkluaXRDb21tYW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb21pc2UgZnJvbSAnYmx1ZWJpcmQnO1xuaW1wb3J0IG1rZGlycCBmcm9tICdta2RpcnAnO1xuaW1wb3J0IENvbW1hbmQgZnJvbSAnLi9Db21tYW5kJztcblxuY29uc3QgbWtkaXIgPSBQcm9taXNlLnByb21pc2lmeShta2RpcnApO1xuXG4vKipcbiAqIEluaXRDb21tYW5kIHRha2VzIGNhcmUgb2YgaW5pdGlhbGl6aW5nIHRoZSBlcmljIGZvbGRlci5cbiAqIEBwYXJhbSB7RmlsZVN5c3RlbX0gZnMgXG4gKi9cbmNsYXNzIEluaXRDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihmcykge1xuXG4gICAgICAgIHN1cGVyKG51bGwpO1xuICAgICAgICB0aGlzLl9mcyA9IGZzO1xuXG4gICAgfVxuXG4gICAgZXhlY3V0ZSgpIHtcblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwodGhpcy5fZnMuRVJJQ19GT0xERVJTLm1hcChwID0+IHRoaXMuX2ZzLm1ha2VEaXIocCkpKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBJbml0Q29tbWFuZFxuIl19