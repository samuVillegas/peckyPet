const { Router } = require('express');
const { createUserController } = require('./useCases/User/CreateUser');
const { updateUserController } = require('./useCases/User/UpdateUser');
const { loginUserController } = require('./useCases/User/LoginUser');
const { listAnimalTypeController} = require('./useCases/Post/ListAmimalType')
const { createPostController } = require('./useCases/Post/CreatePost')
const { getPostsByUserController } = require('./useCases/Post/GetPostsByUser');
const { updatePostController } = require('./useCases/Post/UpdatePost');
const { deletePostController } = require('./useCases/Post/DeletePost');
const { getPostsWithFiltersController } = require('./useCases/Adopt/GetPostsWithFilters');
const { getRacesByFiltersController } = require('./useCases/Adopt/GetRacesByFilters');
const { getAgesByFiltersController } = require('./useCases/Adopt/GetAgesByFilters');
const { showInterestController } = require('./useCases/Adopt/ShowInterest');
const { removeInterestController } = require('./useCases/Adopt/RemoveInterest')
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

router.post('/posts/by_user', async (req,res) => {
  return await getPostsByUserController.handle(req,res);
})

router.put('/posts',async (req,res) => {
  return await updatePostController.handle(req,res);
})

router.delete('/posts', async (req,res) => {
  return await deletePostController.handle(req,res);
})

//Adopt

router.post('/posts/filters', async (req,res) => {
  return await getPostsWithFiltersController.handle(req,res);
})

router.post('/posts/filters/races', async (req,res) => {
  return await getRacesByFiltersController.handle(req,res);
})

router.post('/posts/filters/ages', async (req,res) => {
  return await getAgesByFiltersController.handle(req,res);
})

router.post('/post/show-interest', async (req,res) => {
  return await showInterestController.handle(req,res);
})

router.delete('/post/remove-interest/:id', async (req,res) => {
  return await removeInterestController.handle(req,res);
})
module.exports = { router }