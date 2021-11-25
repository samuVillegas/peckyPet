'use strict'

const PostRepositoryPostgres = require('../../../repositories/implementations/PostRepositoryPostgres');
const GetPostsWithFiltersUseCase = require('./GetPostsWithFiltersUseCase');
const GetPostsWithFiltersController = require('./GetPostsWithFiltersController');

const postRepositoryPostgres = new PostRepositoryPostgres();
const getPostsWithFiltersUseCase = new GetPostsWithFiltersUseCase(
    postRepositoryPostgres
);
const getPostsWithFiltersController = new GetPostsWithFiltersController(
    getPostsWithFiltersUseCase
);

module.exports = {getPostsWithFiltersController}