const AnimalTypeRepositoryPostgres = require('../../../repositories/implementations/AnimalTypeRepositoryPostgres')
const ListAnimalTypeUseCase = require('../ListAmimalType/ListAnimalTypeUseCase');
const ListAnimalTypeController = require('../ListAmimalType/ListAnimalTypeController');

const animalTypeRepositoryPostgres = new AnimalTypeRepositoryPostgres();
const listAnimalTypeUseCase = new ListAnimalTypeUseCase(
    animalTypeRepositoryPostgres
);

const listAnimalTypeController = new ListAnimalTypeController(
    listAnimalTypeUseCase
);

module.exports = {listAnimalTypeController}