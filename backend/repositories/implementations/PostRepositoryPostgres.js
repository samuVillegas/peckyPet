const PostRepository = require('../PostRepository')
const { pool } = require('../../config/db');

module.exports = class extends PostRepository {
    constructor() {
        super();
    }

    async persist(postEntity) {
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

    async getByUser(userId) {
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

    async merge(postEntity) {
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

    async get(postId) {
        const seqGetPostById = await pool.query(`
            SELECT FROM "publication"
            INNER JOIN file ON file.id = publication.id_file
            INNER JOIN animal_type ON animal_type.id = publication.id_animal_type
            WHERE "publication".id='${postId}'
        ;
        `);

        return seqGetPostById;
    }

    async remove(postId) {
        await pool.query(`
            DELETE FROM "publication" 
            WHERE id=${postId}
        `)
    }

    async getPostsWithFilters(id_user,filters) {
        const fields = ["id_animal_type", "race", "age", "vaccinated_state", "size_type"]
        let conditions = '';
        fields.forEach(columnName => {
            if(filters[`${columnName}`]){
                filters[`${columnName}`].forEach(filterItem => {
                    conditions += `${columnName}=`;
                    typeof(filterItem) == 'string' ? conditions += `'${filterItem}' OR ` : conditions += `${filterItem} OR `
                })
                conditions = conditions.slice(0,-3);
                conditions+=' AND ';
            }  
        })
        conditions = conditions.slice(0,-4);
        const seqGetPostsWithFilters = await pool.query(`
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
                WHERE "publication".id_user != ${id_user} ${conditions.length>0?' AND '+conditions:''}
        `);

        return seqGetPostsWithFilters;
    }

    async getRaces(filter){
        const seqGetRaces = await pool.query(`
            SELECT race FROM "publication"
            WHERE race ILIKE '%${filter}%'
            LIMIT 10;
        `);
        return seqGetRaces;
    }
}