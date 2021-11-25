'use strict'

const PostRepositoryPostgres = require('../../../repositories/implementations/PostRepositoryPostgres');
const GetAgesByFiltersUseCase = require('./GetAgesByFiltersUseCase');
const GetAgesByFiltersController = require('./GetAgesByFiltersController');

const postRepositoryPostgres = new PostRepositoryPostgres();
const getAgesByFiltersUseCase = new GetAgesByFiltersUseCase(
    postRepositoryPostgres
);
const getAgesByFiltersController = new GetAgesByFiltersController(
    getAgesByFiltersUseCase
);

module.exports = {getAgesByFiltersController}