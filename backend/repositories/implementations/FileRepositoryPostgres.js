const FileRepository = require('../FileRepository');
const {pool} = require('../../config/db');

module.exports = class extends FileRepository {
    constructor(){
        super();
    }

    async persist(fileEntity){
        await pool.query(`INSERT INTO file(name_file,url_file) VALUES ('${fileEntity.name_file}','${fileEntity.url_file}')`);
    }

    async getByNameFile(urlFile,nameFile){
        const seqGetFile = await pool.query(`
            SELECT * FROM "file" WHERE url_file='${urlFile}' AND name_file='${nameFile}';
        `)
        return seqGetFile.rows[0];
    }
}