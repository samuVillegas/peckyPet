const User = require('../../../entities/User')
const {encrypt} = require('../../../helpers/passwordSecurity')
module.exports = class {
    constructor(userRepository){
        this.userRepository = userRepository;
    }    

    async execute(createUserRequestDTO){
        const userAlreadyExists = await this.userRepository.findByEmail(createUserRequestDTO.email);
        
        if(userAlreadyExists) {
            throw new Error('User already exists.');
        }

        const encrypt_password = await encrypt(createUserRequestDTO.password);
        
        const user = new User(
            null,
            createUserRequestDTO.full_name,
            createUserRequestDTO.last_name,
            createUserRequestDTO.address,
            createUserRequestDTO.user_type,
            createUserRequestDTO.email,
            encrypt_password,
            createUserRequestDTO.register_date
            );
        
        await this.userRepository.persist(user);
    }
}