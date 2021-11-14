const PostRepositoryPostgres = require('../../../repositories/implementations/PostRepositoryPostgres');
const DeletePostUseCase = require('./DeletePostUseCase');
const DeletePostController = require('./DeletePostController');

const postRepositoryPostgres = new PostRepositoryPostgres();

const deletePostUseCase = new DeletePostUseCase(
    postRepositoryPostgres
);

const deletePostController = new DeletePostController(
    deletePostUseCase
);

module.exports = {deletePostController}


