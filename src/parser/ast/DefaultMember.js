import Node from './Node';

/**
 * DefaultMember 
 * @param {string} member 
 * @param {Location} location 
 */
class DefaultMember extends Node {

    constructor(member, location) {

        super();
        this.type = 'default-member';
        this.member = member;
        this.location = location;

    }

    transpile() {

        return this.member;

    }

    compile(o) {

        return this.sourceNode(o.file, this.member);

    }

}

export default DefaultMember
