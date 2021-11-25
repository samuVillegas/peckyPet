'use Case'

module.exports = class {
    constructor(interestRepository){
        this.interestRepository = interestRepository;
    }

    async execute(removeInterestRequestDTO){
        const existingInterest = await this.interestRepository.get(removeInterestRequestDTO.id);
        if(!existingInterest) throw new Error('The interest does not exist.');

        //Si existe procedemos a eliminar el registro del post
        await this.interestRepository.remove(removeInterestRequestDTO.id);
    }
}