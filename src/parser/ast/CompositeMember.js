import Node from './Node';

/**
 * CompositeMember 
 * @param {Member} member
 * @param {StringLiteral} module
 * @param {Location} location
 */
class CompositeMember extends Node {

    constructor(member, module, location) {

        super();
        this.type = 'composite-member';
        this.member = member;
        this.module = module;
        this.location = location;

    }

    transpile() {

        return `import * as ${this.member.transpile()} from ${this.module.transpile()};`;

    }

    compile(o) {

        return this.sourceNode(o.file, 'import * as').
        add(this.member.compile(o)).
        add(this.module.compile(o));

    }

}

export default CompositeMember
