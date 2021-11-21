'use strict'
const {PostResponseDTO} = require('../../Post/PostDTO')

module.exports = class {
    constructor(postRepository){
        this.postRepository = postRepository;
    }

    async execute(getPostsWithFiltersRequestDTO){
        const {rows} = await this.postRepository.getPostsWithFilters(getPostsWithFiltersRequestDTO.id_user,getPostsWithFiltersRequestDTO.filters);
        return rows.map(PostResponseDTO);
    }
}