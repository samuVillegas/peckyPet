'use strict'
const {GetRacesRequestDTO} = require('../AdoptDTO');

module.exports = class {
    constructor(getRacesByFiltersUseCase){
        this.getRacesByFiltersUseCase = getRacesByFiltersUseCase;
    }

    async handle(req,res){
        try{
            const races = await this.getRacesByFiltersUseCase.execute(GetRacesRequestDTO(req.body));
            return res.status(200).json({
                data: races,
                message: 'Races successfully obtained'
            })
        }catch(e){
            console.log(e);
            return res.status(400).json({
                message:e.message || 'Unexpected error.'
            });
        }
    }
}