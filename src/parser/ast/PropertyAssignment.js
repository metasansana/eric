import Node from './Node';

/**
 * PropertyAssignment 
 * @param {string} name
 * @param {ValueExpression} value 
 */
class PropertyAssignment extends Node {

    constructor(name, value, location) {

        super();
        this.type = 'property-assignment';
        this.name = name;
        this.value = value;
        this.location = location;

    }

    transpile() {

        return this.name;

    }

    compile(o) {

        return this.sourceNode(o.file, [`this.${this.name} = `, this.value.compile(o)]);

    }

}

export default PropertyAssignment
