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
    return console.error(e.stack);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGkvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztJQUFZLE07O0FBQ1o7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsUUFBUSxFQUFSLENBQVcsb0JBQVgsRUFBaUMsVUFBUyxDQUFULEVBQVk7O0FBRXpDLFlBQVEsS0FBUixDQUFjLEVBQUUsS0FBaEI7QUFDQSxZQUFRLElBQVIsQ0FBYSxDQUFDLENBQWQ7QUFFSCxDQUxEOztBQU9BLElBQUksT0FBTyxPQUFPLE1BQVAsazNCQXVCNEUsUUFBUSxHQUFSLEVBdkI1RSxpQkF5QlI7QUFDQyxhQUFTLGtCQUFJO0FBRGQsQ0F6QlEsQ0FBWDs7QUE2QkEsSUFBSSxLQUFLO0FBQ0wsZUFBVyxtQkFBUSxTQUFSLENBQWtCLGFBQU8sU0FBekIsQ0FETjtBQUVMLGNBQVUsbUJBQVEsU0FBUixDQUFrQixhQUFPLFFBQXpCLENBRkw7QUFHTCxhQUFTLG1CQUFRLFNBQVIsQ0FBa0IsYUFBTyxPQUF6QixDQUhKO0FBSUwsYUFBUyxtQkFBUSxTQUFSO0FBSkosQ0FBVDs7QUFPQSxJQUFJLEtBQUsseUJBQWUsS0FBSyxPQUFMLENBQWYsRUFBOEIsRUFBOUIsQ0FBVDtBQUNBLElBQUksT0FBTyw0QkFBa0IsSUFBbEIsQ0FBWDtBQUNBLElBQUksUUFBUSw0QkFBa0IsS0FBSyxRQUFMLEVBQWUsTUFBZixDQUFzQixVQUFDLElBQUQsRUFBTyxJQUFQLEVBQWdCO0FBQ2hFLFNBQUssSUFBTCxJQUFhLElBQWI7QUFDQSxXQUFPLElBQVA7QUFDSCxDQUg2QixFQUczQixPQUFPLE1BQVAsQ0FBYyxJQUFkLENBSDJCLENBQWxCLENBQVo7O0FBS0EsS0FDQSxVQURBLENBQ1csTUFEWCxFQUNtQiwwQkFBZ0IsRUFBaEIsRUFBb0IsRUFBcEIsQ0FEbkIsRUFFQSxVQUZBLENBRVcsT0FGWCxFQUVvQiwyQkFBaUIsRUFBakIsRUFBcUIsMkJBQWlCLEVBQWpCLENBQXJCLENBRnBCLEVBR0EsVUFIQSxDQUdXLE1BSFgsRUFHbUIsMkJBQWlCLEVBQWpCLEVBQXFCLDBCQUFnQixFQUFoQixFQUFvQixLQUFwQixFQUEyQiwwQkFBZ0IsS0FBaEIsQ0FBM0IsQ0FBckIsQ0FIbkIsRUFJQSxVQUpBLENBSVcsS0FKWCxFQUlrQiwyQkFBaUIsRUFBakIsRUFBcUIsMEJBQWdCLEVBQWhCLEVBQW9CLEtBQXBCLEVBQTJCLHlCQUFlLEtBQWYsQ0FBM0IsQ0FBckIsQ0FKbEIsRUFLQSxPQUxBLEdBTUEsS0FOQSxDQU1NO0FBQUEsV0FBSyxRQUFRLEtBQVIsQ0FBYyxFQUFFLEtBQWhCLENBQUw7QUFBQSxDQU5OIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IG5vZGVGcyBmcm9tICdmcyc7XG5pbXBvcnQgbWtkaXJwIGZyb20gJ21rZGlycCc7XG5pbXBvcnQgUHJvbWlzZSBmcm9tICdibHVlYmlyZCc7XG5pbXBvcnQgKiBhcyBkb2NvcHQgZnJvbSAnZG9jb3B0JztcbmltcG9ydCBwYXJzZXIgZnJvbSAnLi4vcGFyc2VyJztcbmltcG9ydCBGaWxlU3lzdGVtIGZyb20gJy4vRmlsZVN5c3RlbSc7XG5pbXBvcnQgQ29tbWFuZFJ1bm5lciBmcm9tICcuL0NvbW1hbmRSdW5uZXInO1xuaW1wb3J0IENoZWNrQ29tbWFuZCBmcm9tICcuL0NoZWNrQ29tbWFuZCc7XG5pbXBvcnQgTG9hZENvbW1hbmQgZnJvbSAnLi9Mb2FkQ29tbWFuZCc7XG5pbXBvcnQgSW5pdENvbW1hbmQgZnJvbSAnLi9Jbml0Q29tbWFuZCc7XG5pbXBvcnQgQnVpbGRDb21tYW5kIGZyb20gJy4vQnVpbGRDb21tYW5kJztcbmltcG9ydCBMaXN0Q29tbWFuZCBmcm9tICcuL0xpc3RDb21tYW5kJztcbmltcG9ydCBSdW5Db21tYW5kIGZyb20gJy4vUnVuQ29tbWFuZCc7XG5pbXBvcnQgcGtnIGZyb20gJy4uLy4uL3BhY2thZ2UuanNvbic7XG5cbnByb2Nlc3Mub24oJ3VuaGFuZGxlZFJlamVjdGlvbicsIGZ1bmN0aW9uKGUpIHtcblxuICAgIGNvbnNvbGUuZXJyb3IoZS5zdGFjayk7XG4gICAgcHJvY2Vzcy5leGl0KC0xKTtcblxufSk7XG5cbnZhciBhcmdzID0gZG9jb3B0LmRvY29wdChgXG5Vc2FnZTogZXJpY1xuICBlcmljIGluaXQgIFstLWRpcj1ESVJdXG4gIGVyaWMgYnVpbGQgWy0tZGlyPURJUiA8ZmlsZT4uLi5dXG4gIGVyaWMgbGlzdCAgWy0tZGlyPURJUl1cbiAgZXJpYyBydW4gWy0tZGlyPURJUl0gPHRhc2s+Li4uXG4gIGVyaWMgLWggfCAtLWhlbHBcbiAgZXJpYyAtLXZlcnNpb25cblxuQ29tbWFuZHM6XG5pbml0ICAgICAgICAgICAgICAgICAgICAgICBJbml0aWFsaXplcyBhIG5ldyBlcmljIGZvbGRlci5cbmJ1aWxkICAgICAgICAgICAgICAgICAgICAgIEJ1aWxkcyB0YXNrIGZpbGVzIGludG8gamF2YXNjcmlwdC5cbmxpc3QgICAgICAgICAgICAgICAgICAgICAgIExpc3QgYWxsIHRoZSB0YXNrcyBlcmljIGZvdW5kLlxucnVuICAgICAgICAgICAgICAgICAgICAgICAgQWxsb3dzIHlvdSB0byBleGVjdXRlIGEgYnVpbGQgdGFzay5cblxuQXJndW1lbnRzOlxuZmlsZSAgICAgICAgICAgICAgICAgICAgICAgVGhlIHBhdGggdG8gYSBmaWxlIHRvIGJ1aWxkLlxudGFzayAgICAgICAgICAgICAgICAgICAgICAgVGhlIG5hbWUgb2YgdGhlIHRhc2sgeW91IHdhbnQgdG8gcnVuLlxuXG5PcHRpb25zOlxuIC1oIC0taGVscCAgICAgICAgICAgICAgICAgU2hvd3MgaGVscCBtZXNzYWdlLlxuIC0tdmVyc2lvbiAgICAgICAgICAgICAgICAgRGlzcGxheXMgdGhlIGN1cnJlbnQgdmVyc2lvbiBvZiBlcmljLlxuIC1yIFNDUklQVCAgICAgICAgICAgICAgICAgUmVxdWlyZXMgYSBmaWxlIHRoYXQgaXMgZXhwZWN0ZWQgdG8gY29udGFpbiB0YXNrcyB5b3Ugd2FudCB0byBydW4uXG4gLS1kaXI9RElSICAgICAgICAgICAgICAgICBBIGRpcmVjdG9yeSBlcmljIHdpbGwgYnVpbGQgYW5kIHJ1biB0YXNrcyBmcm9tLiBbZGVmYXVsdDogJHtwcm9jZXNzLmN3ZCgpfS9lcmljXVxuXG5gLCB7XG4gICAgdmVyc2lvbjogcGtnLnZlcnNpb25cbn0pO1xuXG52YXIgcncgPSB7XG4gICAgd3JpdGVGaWxlOiBQcm9taXNlLnByb21pc2lmeShub2RlRnMud3JpdGVGaWxlKSxcbiAgICByZWFkRmlsZTogUHJvbWlzZS5wcm9taXNpZnkobm9kZUZzLnJlYWRGaWxlKSxcbiAgICByZWFkRGlyOiBQcm9taXNlLnByb21pc2lmeShub2RlRnMucmVhZGRpciksXG4gICAgbWFrZURpcjogUHJvbWlzZS5wcm9taXNpZnkobWtkaXJwKVxufTtcblxudmFyIGZzID0gbmV3IEZpbGVTeXN0ZW0oYXJnc1snLS1kaXInXSwgcncpO1xudmFyIGNtZHMgPSBuZXcgQ29tbWFuZFJ1bm5lcihhcmdzKTtcbnZhciB0YXNrcyA9IG5ldyBDb21tYW5kUnVubmVyKGFyZ3NbJzx0YXNrPiddLnJlZHVjZSgocHJldiwgY3VycikgPT4ge1xuICAgIHByZXZbY3Vycl0gPSB0cnVlO1xuICAgIHJldHVybiBwcmV2O1xufSwgT2JqZWN0LmNyZWF0ZShudWxsKSkpO1xuXG5jbWRzLlxuYWRkQ29tbWFuZCgnaW5pdCcsIG5ldyBJbml0Q29tbWFuZChmcywgcncpKS5cbmFkZENvbW1hbmQoJ2J1aWxkJywgbmV3IENoZWNrQ29tbWFuZChmcywgbmV3IEJ1aWxkQ29tbWFuZChmcykpKS5cbmFkZENvbW1hbmQoJ2xpc3QnLCBuZXcgQ2hlY2tDb21tYW5kKGZzLCBuZXcgTG9hZENvbW1hbmQoZnMsIHRhc2tzLCBuZXcgTGlzdENvbW1hbmQodGFza3MpKSkpLlxuYWRkQ29tbWFuZCgncnVuJywgbmV3IENoZWNrQ29tbWFuZChmcywgbmV3IExvYWRDb21tYW5kKGZzLCB0YXNrcywgbmV3IFJ1bkNvbW1hbmQodGFza3MpKSkpLlxuZXhlY3V0ZSgpLlxuY2F0Y2goZSA9PiBjb25zb2xlLmVycm9yKGUuc3RhY2spKTtcbiJdfQ==