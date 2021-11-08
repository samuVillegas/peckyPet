const {AnimalTypeResponseDTO} = require('../PostDTO')

module.exports = class {
    constructor(animalTypeRepository){
        this.animalTypeRepository = animalTypeRepository
    }

    async execute(){
        const animalTypes = await this.animalTypeRepository.find();
        return animalTypes.map(AnimalTypeResponseDTO);
    }
}