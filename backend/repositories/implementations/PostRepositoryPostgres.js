const PostRepository =  require('../PostRepository')
const {pool} = require('../../config/db');

module.exports = class extends PostRepository{
    constructor(){
        super();
    }

    async persist(postEntity){
        await pool.query(`INSERT INTO "publication"
        (id_user,
        id_animal_type,
        race,
        age,
        vaccinated_state,
        extra_description,
        size_type,
        id_file)
        VALUES(${postEntity.id_user}
            ,${postEntity.id_animal_type},
            '${postEntity.race}',
            '${postEntity.age}',
            '${postEntity.vaccinated_state}',
            '${postEntity.extra_description}',
            '${postEntity.size}',
            ${postEntity.id_file}
            )
        `);
    }
}