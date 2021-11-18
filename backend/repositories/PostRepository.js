module.exports = class {
    persist(postEntity){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    getByUser(userId){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    merge(postEntity){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    get(postId){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    getPostsWithFilters(id_user,filters){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    remove(postId){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }
}