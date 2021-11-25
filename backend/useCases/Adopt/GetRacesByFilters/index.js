'use strict'

const PostRepositoryPostgres = require('../../../repositories/implementations/PostRepositoryPostgres');
const GetRacesByFiltersUseCase = require('./GetRacesByFiltersUseCase');
const GetRacesByFiltersController = require('./GetRacesByFiltersController');

const postRepositoryPostgres = new PostRepositoryPostgres();
const getRacesByFiltersUseCase = new GetRacesByFiltersUseCase(
    postRepositoryPostgres
);
const getRacesByFiltersController = new GetRacesByFiltersController(
    getRacesByFiltersUseCase
);

module.exports = {getRacesByFiltersController}