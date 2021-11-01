const UserRepositoryPostgres = require('../../../repositories/implementations/UserRepositoryPostgres')
const LoginUserUseCase = require('../LoginUser/LoginUserUseCase');
const LoginUserController = require('../LoginUser/LoginUserController');

const userRepositoryPostgres = new UserRepositoryPostgres();
const loginUserUseCase = new LoginUserUseCase(
    userRepositoryPostgres
);

const loginUserController = new LoginUserController(
    loginUserUseCase
);

module.exports = {loginUserController}