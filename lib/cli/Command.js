'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Command is the parent class of all commands eric can execute.
 * @abstract
 * @param {object} args 
 */
var Command = function () {
  function Command(args) {
    _classCallCheck(this, Command);

    this.$args = args;
  }

  /**
   * setArgs changes the arguments provided to the command
   * @param {object} args 
   * @returns {Command}
   */


  _createClass(Command, [{
    key: 'setArgs',
    value: function setArgs(args) {

      this.$args = args;
      return this;
    }

    /**
     * execute this command
     * @returns {Promise}
     */

  }, {
    key: 'execute',
    value: function execute() {

      return _bluebird2.default.resolved();
    }
  }]);

  return Command;
}();

exports.default = Command;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGkvQ29tbWFuZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7OztBQUNBOzs7OztJQUtNLE87QUFFRixtQkFBWSxJQUFaLEVBQWtCO0FBQUE7O0FBQ2QsU0FBSyxLQUFMLEdBQWEsSUFBYjtBQUNIOztBQUVEOzs7Ozs7Ozs7NEJBS1EsSSxFQUFNOztBQUVWLFdBQUssS0FBTCxHQUFhLElBQWI7QUFDQSxhQUFPLElBQVA7QUFFSDs7QUFFRDs7Ozs7Ozs4QkFJVTs7QUFFUixhQUFPLG1CQUFRLFFBQVIsRUFBUDtBQUVEOzs7Ozs7a0JBSVUsTyIsImZpbGUiOiJDb21tYW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb21pc2UgZnJvbSAnYmx1ZWJpcmQnO1xuLyoqXG4gKiBDb21tYW5kIGlzIHRoZSBwYXJlbnQgY2xhc3Mgb2YgYWxsIGNvbW1hbmRzIGVyaWMgY2FuIGV4ZWN1dGUuXG4gKiBAYWJzdHJhY3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBhcmdzIFxuICovXG5jbGFzcyBDb21tYW5kIHtcblxuICAgIGNvbnN0cnVjdG9yKGFyZ3MpIHtcbiAgICAgICAgdGhpcy4kYXJncyA9IGFyZ3M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc2V0QXJncyBjaGFuZ2VzIHRoZSBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIGNvbW1hbmRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gYXJncyBcbiAgICAgKiBAcmV0dXJucyB7Q29tbWFuZH1cbiAgICAgKi9cbiAgICBzZXRBcmdzKGFyZ3MpIHtcblxuICAgICAgICB0aGlzLiRhcmdzID0gYXJncztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBleGVjdXRlIHRoaXMgY29tbWFuZFxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIGV4ZWN1dGUoKSB7XG5cbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmVkKCk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tbWFuZFxuIl19