'use strict'

module.exports = class {
    constructor(postRepository){
        this.postRepository = postRepository;
    }

    async execute(getPostsWithFiltersRequestDTO){
        return this.postRepository.getPostsWithFilters(getPostsWithFiltersRequestDTO.id_user,getPostsWithFiltersRequestDTO.filters);
    }
}