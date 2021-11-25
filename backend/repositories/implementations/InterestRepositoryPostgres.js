'use strict'

const InterestRepository = require('../InterestRepository');
const { pool } = require('../../config/db');

module.exports = class extends InterestRepository{
    async persist(interestEntity){
       const seqCreateInterest = await pool.query(`
            INSERT INTO interest(id_user,id_publication) VALUES (${interestEntity.id_user},${interestEntity.id_publication})
            RETURNING id;
        `);
        return seqCreateInterest;
    }

    async remove(interestId){
        await pool.query(`
        DELETE FROM interest
        WHERE id=${interestId}
    `)
    }

    async getByIdUserAndIdPublication(userId,publicationId){
        const seqGetInterest = await pool.query(`
            SELECT * FROM interest
            WHERE id_user=${userId} AND id_publication = ${publicationId}
        `);

        return seqGetInterest;
    }

    async get(interestId){
        const seqGetInterest = await pool.query(`
        SELECT * FROM interest 
            WHERE id = ${interestId}
        `)

        return seqGetInterest;
    }
}