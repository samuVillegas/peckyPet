'use strict'

module.exports = class {
    constructor(postRepository){
        this.postRepository = postRepository;
    }

    async execute(deletePostsRequestDTO){
        //Buscamos que el registro a eliminar
        const existingPost = await this.postRepository.get(deletePostsRequestDTO.id);
        if(!existingPost) throw new Error('The publication does not exist.');

        //Si existe procedemos a eliminar el registro del post
        await this.postRepository.remove(deletePostsRequestDTO.id);
    }
}