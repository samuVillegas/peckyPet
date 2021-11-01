const { Router } = require('express');
const { createUserController } = require('./useCases/User/CreateUser');
const { updateUserController } = require('./useCases/User/UpdateUser');
const { loginUserController } = require('./useCases/User/LoginUser');
const router = Router()


router.post('/users', async (req, res) => {
  return await createUserController.handle(req, res);
});

router.patch('/users', async (req, res) => {
  return await updateUserController.handle(req, res);
});

router.post('/users/login', async (req, res) => {
  return await loginUserController.handle(req, res);
});

module.exports = { router }