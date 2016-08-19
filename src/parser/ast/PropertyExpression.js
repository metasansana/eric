import Node from './Node';

/**
 * PropertyExpression 
 * @param {string} path 
 */
class PropertyExpression extends Node {

    constructor(path, location) {

        super();
        this.type = 'property-expression';
        this.path = path;
        this.location = location;

    }

    transpile() {

        return this.path;

    }

    compile(o) {

        return this.sourceNode(o.file, this.path);

    }

}
export default PropertyExpression
