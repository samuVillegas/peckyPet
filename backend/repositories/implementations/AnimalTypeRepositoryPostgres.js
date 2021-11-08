const AnimalTypeRepository = require('../AnimalTypeRepository')
const {pool} = require('../../config/db');

module.exports = class extends AnimalTypeRepository{
    
    async find(){
        const seqGetAnimalTypes = await pool.query(` SELECT * FROM animal_type`);
        return seqGetAnimalTypes.rows;
    }

}