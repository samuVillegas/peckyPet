const FileRepositoryPostgres = require('../../../repositories/implementations/FileRepositoryPostgres');
const PostRepositoryPostgres = require('../../../repositories/implementations/PostRepositoryPostgres');
const UpdatePostUseCase = require('./UpdatePostUseCase');
const UpdatePostController = require('./UpdatePostController');

const fileRepositoryPostgres = new FileRepositoryPostgres();
const postRepositoryPostgres = new PostRepositoryPostgres();

const updatePostUseCase = new UpdatePostUseCase(
    fileRepositoryPostgres,
    postRepositoryPostgres
);

const updatePostController = new UpdatePostController(
    updatePostUseCase
);

module.exports = {updatePostController}