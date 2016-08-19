'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

var _sourceMap = require('source-map');

var _sourceMap2 = _interopRequireDefault(_sourceMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * TaskFile
 * @param {array<Import>} imports 
 * @param {array<string>} args 
 * @param {Tag} root
 * @param {Location} location 
 */
var TaskFile = function (_Node) {
    _inherits(TaskFile, _Node);

    function TaskFile(imports, tasks, location) {
        _classCallCheck(this, TaskFile);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TaskFile).call(this));

        _this.type = 'task-file';
        _this.imports = imports;
        _this.tasks = tasks;
        _this.location = location;

        return _this;
    }

    _createClass(TaskFile, [{
        key: 'transpile',
        value: function transpile() {

            var str = '';
            var args = this.parameters.map(function (p) {
                return p.transpile();
            }).join(',');

            args = args ? ' ,' + args : args;
            this.imports.forEach(function (i) {
                return str = str + i.transpile() + '\n';
            });
            return str + 'export default function (make' + args + ') { return ' + this.root.transpile() + '; }';
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            var node = this.sourceNode(o.file, this.imports.map(function (i) {
                return i.compile(o);
            }));

            node.add('let tasks = {};');

            this.tasks.forEach(function (t) {
                return node.add(t.compile(o)).add('\n           tasks[\'' + t.name + '\'] = ' + t.name + ';');
            });

            node.add('export default tasks;');
            return node;
        }
    }]);

    return TaskFile;
}(_Node3.default);

exports.default = TaskFile;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvYXN0L1Rhc2tGaWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7SUFPTSxROzs7QUFFRixzQkFBWSxPQUFaLEVBQXFCLEtBQXJCLEVBQTRCLFFBQTVCLEVBQXNDO0FBQUE7O0FBQUE7O0FBR2xDLGNBQUssSUFBTCxHQUFZLFdBQVo7QUFDQSxjQUFLLE9BQUwsR0FBZSxPQUFmO0FBQ0EsY0FBSyxLQUFMLEdBQWEsS0FBYjtBQUNBLGNBQUssUUFBTCxHQUFnQixRQUFoQjs7QUFOa0M7QUFRckM7Ozs7b0NBRVc7O0FBRVIsZ0JBQUksTUFBTSxFQUFWO0FBQ0EsZ0JBQUksT0FBTyxLQUFLLFVBQUwsQ0FBZ0IsR0FBaEIsQ0FBb0I7QUFBQSx1QkFBSyxFQUFFLFNBQUYsRUFBTDtBQUFBLGFBQXBCLEVBQXdDLElBQXhDLENBQTZDLEdBQTdDLENBQVg7O0FBRUEsbUJBQVEsSUFBRCxHQUFTLE9BQU8sSUFBaEIsR0FBdUIsSUFBOUI7QUFDQSxpQkFBSyxPQUFMLENBQWEsT0FBYixDQUFxQjtBQUFBLHVCQUFLLE1BQU0sTUFBTSxFQUFFLFNBQUYsRUFBTixHQUFzQixJQUFqQztBQUFBLGFBQXJCO0FBQ0EsbUJBQVUsR0FBVixxQ0FBNkMsSUFBN0MsbUJBQStELEtBQUssSUFBTCxDQUFVLFNBQVYsRUFBL0Q7QUFFSDs7O2dDQUVPLEMsRUFBRzs7QUFFUCxnQkFBSSxPQUFPLEtBQUssVUFBTCxDQUFnQixFQUFFLElBQWxCLEVBQXdCLEtBQUssT0FBTCxDQUFhLEdBQWIsQ0FBaUI7QUFBQSx1QkFBSyxFQUFFLE9BQUYsQ0FBVSxDQUFWLENBQUw7QUFBQSxhQUFqQixDQUF4QixDQUFYOztBQUVBLGlCQUFLLEdBQUwsQ0FBUyxpQkFBVDs7QUFFQSxpQkFBSyxLQUFMLENBQVcsT0FBWCxDQUFtQjtBQUFBLHVCQUFLLEtBQUssR0FBTCxDQUFTLEVBQUUsT0FBRixDQUFVLENBQVYsQ0FBVCxFQUF1QixHQUF2QiwyQkFDWixFQUFFLElBRFUsY0FDRSxFQUFFLElBREosT0FBTDtBQUFBLGFBQW5COztBQUdBLGlCQUFLLEdBQUwsQ0FBUyx1QkFBVDtBQUNBLG1CQUFPLElBQVA7QUFFSDs7Ozs7O2tCQUlVLFEiLCJmaWxlIjoiVGFza0ZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuaW1wb3J0IHNvdXJjZU1hcCBmcm9tICdzb3VyY2UtbWFwJztcblxuLyoqXG4gKiBUYXNrRmlsZVxuICogQHBhcmFtIHthcnJheTxJbXBvcnQ+fSBpbXBvcnRzIFxuICogQHBhcmFtIHthcnJheTxzdHJpbmc+fSBhcmdzIFxuICogQHBhcmFtIHtUYWd9IHJvb3RcbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uIFxuICovXG5jbGFzcyBUYXNrRmlsZSBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IoaW1wb3J0cywgdGFza3MsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ3Rhc2stZmlsZSc7XG4gICAgICAgIHRoaXMuaW1wb3J0cyA9IGltcG9ydHM7XG4gICAgICAgIHRoaXMudGFza3MgPSB0YXNrcztcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKCkge1xuXG4gICAgICAgIHZhciBzdHIgPSAnJztcbiAgICAgICAgdmFyIGFyZ3MgPSB0aGlzLnBhcmFtZXRlcnMubWFwKHAgPT4gcC50cmFuc3BpbGUoKSkuam9pbignLCcpO1xuXG4gICAgICAgIGFyZ3MgPSAoYXJncykgPyAnICwnICsgYXJncyA6IGFyZ3M7XG4gICAgICAgIHRoaXMuaW1wb3J0cy5mb3JFYWNoKGkgPT4gc3RyID0gc3RyICsgaS50cmFuc3BpbGUoKSArICdcXG4nKTtcbiAgICAgICAgcmV0dXJuIGAke3N0cn1leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobWFrZSR7YXJnc30pIHsgcmV0dXJuICR7dGhpcy5yb290LnRyYW5zcGlsZSgpfTsgfWBcblxuICAgIH1cblxuICAgIGNvbXBpbGUobykge1xuXG4gICAgICAgIHZhciBub2RlID0gdGhpcy5zb3VyY2VOb2RlKG8uZmlsZSwgdGhpcy5pbXBvcnRzLm1hcChpID0+IGkuY29tcGlsZShvKSkpO1xuXG4gICAgICAgIG5vZGUuYWRkKCdsZXQgdGFza3MgPSB7fTsnKTtcblxuICAgICAgICB0aGlzLnRhc2tzLmZvckVhY2godCA9PiBub2RlLmFkZCh0LmNvbXBpbGUobykpLmFkZChgXG4gICAgICAgICAgIHRhc2tzWycke3QubmFtZX0nXSA9ICR7dC5uYW1lfTtgKSk7XG5cbiAgICAgICAgbm9kZS5hZGQoJ2V4cG9ydCBkZWZhdWx0IHRhc2tzOycpO1xuICAgICAgICByZXR1cm4gbm9kZTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrRmlsZVxuIl19