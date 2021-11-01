const UserRepositoryPostgres = require('../../../repositories/implementations/UserRepositoryPostgres')
const CreateUserUseCase = require('../CreateUser/CreateUserUseCase');
const CreateUserController = require('../CreateUser/CreateUserController');

const userRepositoryPostgres = new UserRepositoryPostgres();
const createUserUseCase = new CreateUserUseCase(
    userRepositoryPostgres
);

const createUserController = new CreateUserController(
    createUserUseCase
);

module.exports = {createUserController}