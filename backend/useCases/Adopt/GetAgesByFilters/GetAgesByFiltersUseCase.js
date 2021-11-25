'use strict'

module.exports = class {
    constructor(postRepository){
        this.postRepository = postRepository;
    }

    async execute(getAgesRequestDTO){
        const {rows} = await this.postRepository.getAges(getAgesRequestDTO.id_user,getAgesRequestDTO.filter);
        const agesWithoutRepeatArray = [];
        const setAges = new Set();
        rows.forEach(element => {
            if(!setAges.has(element.age.toLowerCase())){
                setAges.add(element.age.toLowerCase());
                agesWithoutRepeatArray.push(element.age.toLowerCase())
            }   
        });
        return agesWithoutRepeatArray;
    }
}