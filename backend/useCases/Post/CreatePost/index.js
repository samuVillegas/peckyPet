const FileRepositoryPostgres = require('../../../repositories/implementations/FileRepositoryPostgres');
const PostRepositoryPostgres = require('../../../repositories/implementations/PostRepositoryPostgres');
const CreatePostUseCase = require('./CreatePostUseCase')
const CreatePostController = require('./CreatePostController')

const fileRepositoryPostgres = new FileRepositoryPostgres();
const postRepositoryPostgres = new PostRepositoryPostgres();

const createPostUseCase = new CreatePostUseCase(
    fileRepositoryPostgres,
    postRepositoryPostgres
);

const createPostController = new CreatePostController(
    createPostUseCase
);

module.exports = {createPostController};

