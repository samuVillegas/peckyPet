const User = require('../../../entities/User')

module.exports = class {
    constructor(userRepository){
        this.userRepository = userRepository;
    }    

    async execute(createUserRequestDTO){
        const userAlreadyExists = await this.userRepository.findByEmail(createUserRequestDTO.email);
        
        if(userAlreadyExists) {
            throw new Error('User already exists.');
        }

        const user = new User(
            null,
            createUserRequestDTO.full_name,
            createUserRequestDTO.last_name,
            createUserRequestDTO.address,
            createUserRequestDTO.user_type,
            createUserRequestDTO.email,
            createUserRequestDTO.password,
            createUserRequestDTO.register_date
            );
        
        await this.userRepository.persist(user);
    }
}