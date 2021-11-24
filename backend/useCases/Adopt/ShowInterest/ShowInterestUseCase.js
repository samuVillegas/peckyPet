'use strict'

const Interest = require('../../../entities/Interest');

module.exports = class {
    constructor(interestRepository){
        this.interestRepository = interestRepository;
    }

    async execute(showInterestRequestDTO){
        const interestExist = await this.interestRepository.getByIdUserAndIdPublication(showInterestRequestDTO.id_user,showInterestRequestDTO.id_publication);
        
        if(interestExist.rows[0]) throw new Error('Interest already exist');

        const interest = new Interest(
            null,
            showInterestRequestDTO.id_user,
            showInterestRequestDTO.id_publication,
            null,
            null
        )

        await this.interestRepository.persist(interest);
    }
}