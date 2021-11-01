const User = require('../../../entities/User')

module.exports = class {
    constructor(userRepository){
        this.userRepository = userRepository;
    }    

    async execute(updateUserRequestDTO){
        const userAlreadyExists = await this.userRepository.get(updateUserRequestDTO.id);
        
        if(!userAlreadyExists) {
            throw new Error('The user does not exist.');
        }

        const user = new User(
            updateUserRequestDTO.id,
            updateUserRequestDTO.full_name,
            updateUserRequestDTO.last_name,
            updateUserRequestDTO.address,
            updateUserRequestDTO.user_type,
            updateUserRequestDTO.email,
            updateUserRequestDTO.password,
            null
            );
        
        await this.userRepository.merge(user);
    }
}