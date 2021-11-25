'use strict'

const InterestRepositoryPostgres = require('../../../repositories/implementations/InterestRepositoryPostgres');
const ShowInterestUseCase = require('./ShowInterestUseCase');
const ShowInterestController = require('./ShowInterestController');

const interestRepositoryPostgres = new InterestRepositoryPostgres();
const showInterestUseCase = new ShowInterestUseCase(
    interestRepositoryPostgres
);
const showInterestController = new ShowInterestController(
    showInterestUseCase
);

module.exports = {showInterestController}