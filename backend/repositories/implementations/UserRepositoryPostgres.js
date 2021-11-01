const UserRepository = require('../UserRepository');
const {pool} = require('../../config/db');

module.exports = class extends UserRepository{
    constructor(){
        super();
    }

    async persist(userEntity){
        await pool.query(`
            INSERT INTO "user" (full_name,last_name,address,user_type,email,password)
            VALUES('${userEntity.full_name}',
            '${userEntity.last_name}',
            '${userEntity.address}',
            '${userEntity.user_type}',
            '${userEntity.email}',
            '${userEntity.password}');
        `)
    }

    async find(){
        const seqGetUsers = await pool.query(`
            SELECT * FROM "user";
        `)
        return seqGetUsers;
    }

    async get(userId){
        const seqGetUser = await pool.query(`
            SELECT * FROM "user" WHERE id=${userId};
        `)
        return seqGetUser;
    }

    async merge(userEntity){
        const seqUpdateUser = await pool.query(`
            UPDATE "user" SET full_name = '${userEntity.full_name}',
            last_name = '${userEntity.last_name}',
            address = '${userEntity.address}',
            user_type = '${userEntity.user_type}',
            email = '${userEntity.email}',
            password = '${userEntity.password}'
            WHERE id=${userEntity.id};
        `)

    }

    async findByEmail(userEmail){
        const seqGetUserByEmail = await pool.query(`
            SELECT * FROM "user" WHERE email ='${userEmail}';
        `)
        return seqGetUserByEmail.rows[0];
    }
}