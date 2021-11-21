'use strict'

module.exports = class {
    constructor(postRepository){
        this.postRepository = postRepository;
    }

    async execute(getRacesRequestDTO){
        const {rows} = await this.postRepository.getRaces(getRacesRequestDTO.id_user,getRacesRequestDTO.filter);
        const racesWithoutRepeatArray = [];
        const setRaces = new Set();
        rows.forEach(element => {
            if(!setRaces.has(element.race.toLowerCase())){
                setRaces.add(element.race.toLowerCase());
                racesWithoutRepeatArray.push(element.race.toLowerCase())
            }   
        });
        return racesWithoutRepeatArray;
    }
}