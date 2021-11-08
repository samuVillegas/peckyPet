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

    async getByUser(userId){
        const seqGetPostsByUser = await pool.query(`
        SELECT publication.id,
            publication.id_user,
            publication.id_animal_type,
            publication.race,
            publication.age,
            publication.vaccinated_state,
            publication.extra_description,
            publication.size_type,
            file.name_file,
            file.url_file,
            animal_type.animal_name,
            publication.id_file
            FROM "publication"
            INNER JOIN file ON file.id = publication.id_file
            INNER JOIN animal_type ON animal_type.id = publication.id_animal_type
            WHERE publication.id_user=${userId}
        `);
        return seqGetPostsByUser.rows;
    }

    async merge(postEntity){
        await pool.query(`
            UPDATE "publication" SET 
            id_animal_type=${postEntity.id_animal_type},
            race='${postEntity.race}',
            age='${postEntity.age}',
            vaccinated_state='${postEntity.vaccinated_state}',
            extra_description='${postEntity.extra_description}',
            size_type='${postEntity.size}',
            id_file=${postEntity.id_file},
            update_date='${postEntity.update_date}'
            WHERE id=${postEntity.id}
        `)
    }

    async get(postId){
        const seqGetPostById = await pool.query(`
            SELECT FROM "publication"
            INNER JOIN file ON file.id = publication.id_file
            INNER JOIN animal_type ON animal_type.id = publication.id_animal_type
            WHERE "publication".id='${postId}'
        ;
        `);

        return seqGetPostById;
    }
}