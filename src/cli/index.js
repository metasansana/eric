#!/usr/bin/env node

import 'source-map-support/register';
import path from 'path';
import nodeFs from 'fs';
import mkdirp from 'mkdirp';
import Promise from 'bluebird';
import * as docopt from 'docopt';
import parser from '../parser';
import FileSystem from './FileSystem';
import CommandRunner from './CommandRunner';
import CheckCommand from './CheckCommand';
import LoadCommand from './LoadCommand';
import InitCommand from './InitCommand';
import BuildCommand from './BuildCommand';
import ListCommand from './ListCommand';
import RunCommand from './RunCommand';
import pkg from '../../package.json';

process.on('unhandledRejection', function(e) {

    console.error(e.stack);
    process.exit(-1);

});

var args = docopt.docopt(`
Usage: eric
  eric init  [--dir=DIR]
  eric build [--dir=DIR <file>...]
  eric list  [--dir=DIR]
  eric run [--dir=DIR] <task>...
  eric -h | --help
  eric --version

Commands:
init                       Initializes a new eric folder.
build                      Builds task files into javascript.
list                       List all the tasks eric found.
run                        Allows you to execute a build task.

Arguments:
file                       The path to a file to build.
task                       The name of the task you want to run.

Options:
 -h --help                 Shows help message.
 --version                 Displays the current version of eric.
 -r SCRIPT                 Requires a file that is expected to contain tasks you want to run.
 --dir=DIR                 A directory eric will build and run tasks from. [default: ${process.cwd()}/eric]

`, {
    version: pkg.version
});

var rw = {
    writeFile: Promise.promisify(nodeFs.writeFile),
    readFile: Promise.promisify(nodeFs.readFile),
    readDir: Promise.promisify(nodeFs.readdir),
    makeDir: Promise.promisify(mkdirp)
};

var fs = new FileSystem(args['--dir'], rw);
var cmds = new CommandRunner(args);
var tasks = new CommandRunner(args['<task>'].reduce((prev, curr) => {
    prev[curr] = true;
    return prev;
}, Object.create(null)));

cmds.
addCommand('init', new InitCommand(fs, rw)).
addCommand('build', new CheckCommand(fs, new BuildCommand(fs))).
addCommand('list', new CheckCommand(fs, new LoadCommand(fs, tasks, new ListCommand(tasks)))).
addCommand('run', new CheckCommand(fs, new LoadCommand(fs, tasks, new RunCommand(tasks)))).
execute().
catch(e => console.error(e.stack || e));
