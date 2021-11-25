'use strict'

const InterestRepositoryPostgres = require('../../../repositories/implementations/InterestRepositoryPostgres');
const RemoveInterestUseCase = require('./RemoveInterestUseCase');
const RemoveInterestController = require('./RemoveInterestController');

const interestRepositoryPostgres = new InterestRepositoryPostgres();
const removeInterestUseCase = new RemoveInterestUseCase(
    interestRepositoryPostgres
);
const removeInterestController = new RemoveInterestController(
    removeInterestUseCase
);

module.exports = {removeInterestController}