#!/usr/bin/env node
'use strict';

require('source-map-support/register');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _docopt = require('docopt');

var docopt = _interopRequireWildcard(_docopt);

var _parser = require('../parser');

var _parser2 = _interopRequireDefault(_parser);

var _FileSystem = require('./FileSystem');

var _FileSystem2 = _interopRequireDefault(_FileSystem);

var _CommandRunner = require('./CommandRunner');

var _CommandRunner2 = _interopRequireDefault(_CommandRunner);

var _CheckCommand = require('./CheckCommand');

var _CheckCommand2 = _interopRequireDefault(_CheckCommand);

var _LoadCommand = require('./LoadCommand');

var _LoadCommand2 = _interopRequireDefault(_LoadCommand);

var _InitCommand = require('./InitCommand');

var _InitCommand2 = _interopRequireDefault(_InitCommand);

var _BuildCommand = require('./BuildCommand');

var _BuildCommand2 = _interopRequireDefault(_BuildCommand);

var _ListCommand = require('./ListCommand');

var _ListCommand2 = _interopRequireDefault(_ListCommand);

var _RunCommand = require('./RunCommand');

var _RunCommand2 = _interopRequireDefault(_RunCommand);

var _package = require('../../package.json');

var _package2 = _interopRequireDefault(_package);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

process.on('unhandledRejection', function (e) {

    console.error(e.stack);
    process.exit(-1);
});

var args = docopt.docopt('\nUsage: eric\n  eric init  [--dir=DIR]\n  eric build [--dir=DIR <file>...]\n  eric list  [--dir=DIR]\n  eric run [--dir=DIR] <task>...\n  eric -h | --help\n  eric --version\n\nCommands:\ninit                       Initializes a new eric folder.\nbuild                      Builds task files into javascript.\nlist                       List all the tasks eric found.\nrun                        Allows you to execute a build task.\n\nArguments:\nfile                       The path to a file to build.\ntask                       The name of the task you want to run.\n\nOptions:\n -h --help                 Shows help message.\n --version                 Displays the current version of eric.\n -r SCRIPT                 Requires a file that is expected to contain tasks you want to run.\n --dir=DIR                 A directory eric will build and run tasks from. [default: ' + process.cwd() + '/eric]\n\n', {
    version: _package2.default.version
});

var rw = {
    writeFile: _bluebird2.default.promisify(_fs2.default.writeFile),
    readFile: _bluebird2.default.promisify(_fs2.default.readFile),
    readDir: _bluebird2.default.promisify(_fs2.default.readdir),
    makeDir: _bluebird2.default.promisify(_mkdirp2.default)
};

var fs = new _FileSystem2.default(args['--dir'], rw);
var cmds = new _CommandRunner2.default(args);
var tasks = new _CommandRunner2.default(args['<task>'].reduce(function (prev, curr) {
    prev[curr] = true;
    return prev;
}, Object.create(null)));

cmds.addCommand('init', new _InitCommand2.default(fs, rw)).addCommand('build', new _CheckCommand2.default(fs, new _BuildCommand2.default(fs))).addCommand('list', new _CheckCommand2.default(fs, new _LoadCommand2.default(fs, tasks, new _ListCommand2.default(tasks)))).addCommand('run', new _CheckCommand2.default(fs, new _LoadCommand2.default(fs, tasks, new _RunCommand2.default(tasks)))).execute().catch(function (e) {
    return console.error(e.stack || e);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGkvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztJQUFZLE07O0FBQ1o7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsUUFBUSxFQUFSLENBQVcsb0JBQVgsRUFBaUMsVUFBUyxDQUFULEVBQVk7O0FBRXpDLFlBQVEsS0FBUixDQUFjLEVBQUUsS0FBaEI7QUFDQSxZQUFRLElBQVIsQ0FBYSxDQUFDLENBQWQ7QUFFSCxDQUxEOztBQU9BLElBQUksT0FBTyxPQUFPLE1BQVAsazNCQXVCNEUsUUFBUSxHQUFSLEVBdkI1RSxpQkF5QlI7QUFDQyxhQUFTLGtCQUFJO0FBRGQsQ0F6QlEsQ0FBWDs7QUE2QkEsSUFBSSxLQUFLO0FBQ0wsZUFBVyxtQkFBUSxTQUFSLENBQWtCLGFBQU8sU0FBekIsQ0FETjtBQUVMLGNBQVUsbUJBQVEsU0FBUixDQUFrQixhQUFPLFFBQXpCLENBRkw7QUFHTCxhQUFTLG1CQUFRLFNBQVIsQ0FBa0IsYUFBTyxPQUF6QixDQUhKO0FBSUwsYUFBUyxtQkFBUSxTQUFSO0FBSkosQ0FBVDs7QUFPQSxJQUFJLEtBQUsseUJBQWUsS0FBSyxPQUFMLENBQWYsRUFBOEIsRUFBOUIsQ0FBVDtBQUNBLElBQUksT0FBTyw0QkFBa0IsSUFBbEIsQ0FBWDtBQUNBLElBQUksUUFBUSw0QkFBa0IsS0FBSyxRQUFMLEVBQWUsTUFBZixDQUFzQixVQUFDLElBQUQsRUFBTyxJQUFQLEVBQWdCO0FBQ2hFLFNBQUssSUFBTCxJQUFhLElBQWI7QUFDQSxXQUFPLElBQVA7QUFDSCxDQUg2QixFQUczQixPQUFPLE1BQVAsQ0FBYyxJQUFkLENBSDJCLENBQWxCLENBQVo7O0FBS0EsS0FDQSxVQURBLENBQ1csTUFEWCxFQUNtQiwwQkFBZ0IsRUFBaEIsRUFBb0IsRUFBcEIsQ0FEbkIsRUFFQSxVQUZBLENBRVcsT0FGWCxFQUVvQiwyQkFBaUIsRUFBakIsRUFBcUIsMkJBQWlCLEVBQWpCLENBQXJCLENBRnBCLEVBR0EsVUFIQSxDQUdXLE1BSFgsRUFHbUIsMkJBQWlCLEVBQWpCLEVBQXFCLDBCQUFnQixFQUFoQixFQUFvQixLQUFwQixFQUEyQiwwQkFBZ0IsS0FBaEIsQ0FBM0IsQ0FBckIsQ0FIbkIsRUFJQSxVQUpBLENBSVcsS0FKWCxFQUlrQiwyQkFBaUIsRUFBakIsRUFBcUIsMEJBQWdCLEVBQWhCLEVBQW9CLEtBQXBCLEVBQTJCLHlCQUFlLEtBQWYsQ0FBM0IsQ0FBckIsQ0FKbEIsRUFLQSxPQUxBLEdBTUEsS0FOQSxDQU1NO0FBQUEsV0FBSyxRQUFRLEtBQVIsQ0FBYyxFQUFFLEtBQUYsSUFBVyxDQUF6QixDQUFMO0FBQUEsQ0FOTiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5pbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBub2RlRnMgZnJvbSAnZnMnO1xuaW1wb3J0IG1rZGlycCBmcm9tICdta2RpcnAnO1xuaW1wb3J0IFByb21pc2UgZnJvbSAnYmx1ZWJpcmQnO1xuaW1wb3J0ICogYXMgZG9jb3B0IGZyb20gJ2RvY29wdCc7XG5pbXBvcnQgcGFyc2VyIGZyb20gJy4uL3BhcnNlcic7XG5pbXBvcnQgRmlsZVN5c3RlbSBmcm9tICcuL0ZpbGVTeXN0ZW0nO1xuaW1wb3J0IENvbW1hbmRSdW5uZXIgZnJvbSAnLi9Db21tYW5kUnVubmVyJztcbmltcG9ydCBDaGVja0NvbW1hbmQgZnJvbSAnLi9DaGVja0NvbW1hbmQnO1xuaW1wb3J0IExvYWRDb21tYW5kIGZyb20gJy4vTG9hZENvbW1hbmQnO1xuaW1wb3J0IEluaXRDb21tYW5kIGZyb20gJy4vSW5pdENvbW1hbmQnO1xuaW1wb3J0IEJ1aWxkQ29tbWFuZCBmcm9tICcuL0J1aWxkQ29tbWFuZCc7XG5pbXBvcnQgTGlzdENvbW1hbmQgZnJvbSAnLi9MaXN0Q29tbWFuZCc7XG5pbXBvcnQgUnVuQ29tbWFuZCBmcm9tICcuL1J1bkNvbW1hbmQnO1xuaW1wb3J0IHBrZyBmcm9tICcuLi8uLi9wYWNrYWdlLmpzb24nO1xuXG5wcm9jZXNzLm9uKCd1bmhhbmRsZWRSZWplY3Rpb24nLCBmdW5jdGlvbihlKSB7XG5cbiAgICBjb25zb2xlLmVycm9yKGUuc3RhY2spO1xuICAgIHByb2Nlc3MuZXhpdCgtMSk7XG5cbn0pO1xuXG52YXIgYXJncyA9IGRvY29wdC5kb2NvcHQoYFxuVXNhZ2U6IGVyaWNcbiAgZXJpYyBpbml0ICBbLS1kaXI9RElSXVxuICBlcmljIGJ1aWxkIFstLWRpcj1ESVIgPGZpbGU+Li4uXVxuICBlcmljIGxpc3QgIFstLWRpcj1ESVJdXG4gIGVyaWMgcnVuIFstLWRpcj1ESVJdIDx0YXNrPi4uLlxuICBlcmljIC1oIHwgLS1oZWxwXG4gIGVyaWMgLS12ZXJzaW9uXG5cbkNvbW1hbmRzOlxuaW5pdCAgICAgICAgICAgICAgICAgICAgICAgSW5pdGlhbGl6ZXMgYSBuZXcgZXJpYyBmb2xkZXIuXG5idWlsZCAgICAgICAgICAgICAgICAgICAgICBCdWlsZHMgdGFzayBmaWxlcyBpbnRvIGphdmFzY3JpcHQuXG5saXN0ICAgICAgICAgICAgICAgICAgICAgICBMaXN0IGFsbCB0aGUgdGFza3MgZXJpYyBmb3VuZC5cbnJ1biAgICAgICAgICAgICAgICAgICAgICAgIEFsbG93cyB5b3UgdG8gZXhlY3V0ZSBhIGJ1aWxkIHRhc2suXG5cbkFyZ3VtZW50czpcbmZpbGUgICAgICAgICAgICAgICAgICAgICAgIFRoZSBwYXRoIHRvIGEgZmlsZSB0byBidWlsZC5cbnRhc2sgICAgICAgICAgICAgICAgICAgICAgIFRoZSBuYW1lIG9mIHRoZSB0YXNrIHlvdSB3YW50IHRvIHJ1bi5cblxuT3B0aW9uczpcbiAtaCAtLWhlbHAgICAgICAgICAgICAgICAgIFNob3dzIGhlbHAgbWVzc2FnZS5cbiAtLXZlcnNpb24gICAgICAgICAgICAgICAgIERpc3BsYXlzIHRoZSBjdXJyZW50IHZlcnNpb24gb2YgZXJpYy5cbiAtciBTQ1JJUFQgICAgICAgICAgICAgICAgIFJlcXVpcmVzIGEgZmlsZSB0aGF0IGlzIGV4cGVjdGVkIHRvIGNvbnRhaW4gdGFza3MgeW91IHdhbnQgdG8gcnVuLlxuIC0tZGlyPURJUiAgICAgICAgICAgICAgICAgQSBkaXJlY3RvcnkgZXJpYyB3aWxsIGJ1aWxkIGFuZCBydW4gdGFza3MgZnJvbS4gW2RlZmF1bHQ6ICR7cHJvY2Vzcy5jd2QoKX0vZXJpY11cblxuYCwge1xuICAgIHZlcnNpb246IHBrZy52ZXJzaW9uXG59KTtcblxudmFyIHJ3ID0ge1xuICAgIHdyaXRlRmlsZTogUHJvbWlzZS5wcm9taXNpZnkobm9kZUZzLndyaXRlRmlsZSksXG4gICAgcmVhZEZpbGU6IFByb21pc2UucHJvbWlzaWZ5KG5vZGVGcy5yZWFkRmlsZSksXG4gICAgcmVhZERpcjogUHJvbWlzZS5wcm9taXNpZnkobm9kZUZzLnJlYWRkaXIpLFxuICAgIG1ha2VEaXI6IFByb21pc2UucHJvbWlzaWZ5KG1rZGlycClcbn07XG5cbnZhciBmcyA9IG5ldyBGaWxlU3lzdGVtKGFyZ3NbJy0tZGlyJ10sIHJ3KTtcbnZhciBjbWRzID0gbmV3IENvbW1hbmRSdW5uZXIoYXJncyk7XG52YXIgdGFza3MgPSBuZXcgQ29tbWFuZFJ1bm5lcihhcmdzWyc8dGFzaz4nXS5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHtcbiAgICBwcmV2W2N1cnJdID0gdHJ1ZTtcbiAgICByZXR1cm4gcHJldjtcbn0sIE9iamVjdC5jcmVhdGUobnVsbCkpKTtcblxuY21kcy5cbmFkZENvbW1hbmQoJ2luaXQnLCBuZXcgSW5pdENvbW1hbmQoZnMsIHJ3KSkuXG5hZGRDb21tYW5kKCdidWlsZCcsIG5ldyBDaGVja0NvbW1hbmQoZnMsIG5ldyBCdWlsZENvbW1hbmQoZnMpKSkuXG5hZGRDb21tYW5kKCdsaXN0JywgbmV3IENoZWNrQ29tbWFuZChmcywgbmV3IExvYWRDb21tYW5kKGZzLCB0YXNrcywgbmV3IExpc3RDb21tYW5kKHRhc2tzKSkpKS5cbmFkZENvbW1hbmQoJ3J1bicsIG5ldyBDaGVja0NvbW1hbmQoZnMsIG5ldyBMb2FkQ29tbWFuZChmcywgdGFza3MsIG5ldyBSdW5Db21tYW5kKHRhc2tzKSkpKS5cbmV4ZWN1dGUoKS5cbmNhdGNoKGUgPT4gY29uc29sZS5lcnJvcihlLnN0YWNrIHx8IGUpKTtcbiJdfQ==