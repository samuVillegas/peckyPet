const UserRepositoryPostgres = require('../../../repositories/implementations/UserRepositoryPostgres');
const UpdateUserUseCase = require('./UpdateUserUseCase');
const UpdateUserController = require('./UpdateUserController');

const userRepositoryPostgres = new UserRepositoryPostgres();

const updateUserUseCase =  new UpdateUserUseCase(
    userRepositoryPostgres
);

const updateUserController = new UpdateUserController(
    updateUserUseCase
);

module.exports = {updateUserController};

