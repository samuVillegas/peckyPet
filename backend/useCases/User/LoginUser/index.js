const UserRepositoryPostgres = require('../../../repositories/implementations/UserRepositoryPostgres')
const LoginUserUseCase = require('./LoginUserUseCase');
const LoginUserController = require('./LoginUserController');

const userRepositoryPostgres = new UserRepositoryPostgres();
const loginUserUseCase = new LoginUserUseCase(
    userRepositoryPostgres
);

const loginUserController = new LoginUserController(
    loginUserUseCase
);

module.exports = {loginUserController}