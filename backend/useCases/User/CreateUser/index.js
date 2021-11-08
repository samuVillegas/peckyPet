const UserRepositoryPostgres = require('../../../repositories/implementations/UserRepositoryPostgres')
const CreateUserUseCase = require('./CreateUserUseCase');
const CreateUserController = require('./CreateUserController');

const userRepositoryPostgres = new UserRepositoryPostgres();
const createUserUseCase = new CreateUserUseCase(
    userRepositoryPostgres
);

const createUserController = new CreateUserController(
    createUserUseCase
);

module.exports = {createUserController}