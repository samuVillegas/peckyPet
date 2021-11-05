const { Router } = require('express');
const { createUserController } = require('./useCases/User/CreateUser');
const { updateUserController } = require('./useCases/User/UpdateUser');
const { loginUserController } = require('./useCases/User/LoginUser');
const { listAnimalTypeController} = require('./useCases/Post/ListAmimalType')
const { createPostController } = require('./useCases/Post/CreatePost')
const router = Router()

//Users
router.post('/users', async (req, res) => {
  return await createUserController.handle(req, res);
});

router.patch('/users', async (req, res) => {
  return await updateUserController.handle(req, res);
});

router.post('/users/login', async (req, res) => {
  return await loginUserController.handle(req, res);
});

//Animal types
router.get('/animal_types', async (req,res) => {
  return await listAnimalTypeController.handle(req,res);
})

//Posts

router.post('/posts', async (req,res) => {
  return await createPostController.handle(req,res);
})



module.exports = { router }