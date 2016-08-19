import Parser from './Parser';
import * as ast from './ast';

Parser.parser.yy.ast = ast;

export default function parse(src, o) {

    o = o || {
        filename: 'unknown'
    }
    return Parser.parse(src).compile(o).toStringWithSourceMap(o);

}
