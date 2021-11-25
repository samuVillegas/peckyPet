'use strict'
const {GetAgesRequestDTO} = require('../AdoptDTO');

module.exports = class {
    constructor(getAgesByFiltersUseCase){
        this.getAgesByFiltersUseCase = getAgesByFiltersUseCase;
    }

    async handle(req,res){
        try{
            const ages = await this.getAgesByFiltersUseCase.execute(GetAgesRequestDTO(req.body));
            return res.status(200).json({
                data: ages,
                message: 'Ages successfully obtained'
            })
        }catch(e){
            console.log(e);
            return res.status(400).json({
                message:e.message || 'Unexpected error.'
            });
        }
    }
}