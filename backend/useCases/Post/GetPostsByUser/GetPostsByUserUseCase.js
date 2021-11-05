const {PostResponseDTO} = require('../PostDTO')

module.exports = class {
    constructor(postRepository){
        this.postRepository = postRepository;
    }

    async execute(getPostsByUserRequestDTO){
        const posts = await this.postRepository.getByUser(getPostsByUserRequestDTO.id_user);
        return posts.map(PostResponseDTO);
    }
}