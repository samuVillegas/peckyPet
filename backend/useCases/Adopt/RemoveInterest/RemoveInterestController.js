'use strict'
const {RemoveInterestRequestDTO} = require('../AdoptDTO');

module.exports = class {
    constructor(removeInterestUseCase){
        this.removeInterestUseCase = removeInterestUseCase;
    }

    async handle(req,res){
        try{
            await this.removeInterestUseCase.execute(RemoveInterestRequestDTO(req.body));
            return res.status(200).json({
                message: 'Interest deleted'
            })
        }catch(e){
            console.log(e);
            return res.status(400).json({
                message:e.message || 'Unexpected error.'
            });
        }
    }
}