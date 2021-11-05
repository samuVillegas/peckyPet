const PostRepositoryPostgres = require('../../../repositories/implementations/PostRepositoryPostgres')
const GetPostsByUserUseCase =  require('./GetPostsByUserUseCase');
const GetPostsByUserController = require('./GetPostsByUserController')

const postRepositoryPostgres = new PostRepositoryPostgres();

const getPostsByUserUseCase = new GetPostsByUserUseCase(
    postRepositoryPostgres
);

const getPostsByUserController = new GetPostsByUserController(
    getPostsByUserUseCase
);

module.exports = {getPostsByUserController}