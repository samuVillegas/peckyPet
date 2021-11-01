const { Router } = require('express');
const { createUserController } = require('./useCases/User/CreateUser')

const router = Router()


router.post('/users', async (req, res) => {
  return await createUserController.handle(req, res);
});

module.exports = { router }