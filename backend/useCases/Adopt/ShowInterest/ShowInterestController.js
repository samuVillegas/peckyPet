'use strict'

const {ShowInterestRequestDTO} = require('../AdoptDTO');

module.exports =  class {
    constructor(showInterestUseCase){
        this.showInterestUseCase = showInterestUseCase;
    }

    async handle(req,res){
        try{
            await this.showInterestUseCase.execute(ShowInterestRequestDTO(req.body));
            return res.status(200).json({
                message: 'Interest created'
            })
        }catch(e){
            console.log(e);
            return res.status(400).json({
                message:e.message || 'Unexpected error.'
            });
        }
    }
}