import fs from 'fs';
import must from 'must';
import expects from './expectations';
import Parser from '../../src/parser/Parser';
import * as ast from '../../src/parser/ast';

var input = null;
var result = null;
var tests = null;

Parser.parser.yy.ast = ast;

function parse(text) {
    result = '' + Parser.parse(text || input);
    result = JSON.parse(result);
}

function json(tree) {
    return JSON.stringify(tree);
}

function print(tree, index) {
    console.log(index);
    console.log('================================BEGIN');
    console.log(json(result));
    console.log('================================END');
}

function compare(tree, that) {

    must(tree).eql(that);

}

function makeTest(test, index) {

    if (!test.skip) {

        input = test.input;
        parse();
        return test.print ? print(result, index) : compare(result, test.expect);

    } else {
        this.skip();
    }
}

tests = {

    'should work': {
        input: fs.readFileSync(__dirname + '/tasks/simple.eric', {
            encoding: 'utf8'
        }),
        expect: expects['should work']
    }
};

describe('Parser', function() {

    beforeEach(function() {

        input = null;
        result = null;

    });

    describe('parse()', function() {

        Object.keys(tests).forEach(k => {

            it(k, function() {

                if (Array.isArray(tests[k])) {

                    tests[k].forEach(makeTest.bind(this));

                } else {

                    makeTest.call(this, tests[k], k);

                }

            });
        });

    });

});
