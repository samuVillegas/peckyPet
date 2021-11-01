module.exports = class {
    persist(userEntity){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    get(userId) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    find() {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    merge(userEntity) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    findByEmail(userEmail){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }
}