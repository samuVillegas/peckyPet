const User = require('../../../entities/User')
const {encrypt,compare} = require('../../../helpers/passwordSecurity')
module.exports = class {
    constructor(userRepository){
        this.userRepository = userRepository;
    }    

    async execute(updateUserRequestDTO){
        const userAlreadyExists = await this.userRepository.get(updateUserRequestDTO.id);
        const userSameEmail =  await this.userRepository.findByEmail(updateUserRequestDTO.email);

        if(!userAlreadyExists) {
            throw new Error('The user does not exist.');
        }
        if(userSameEmail && userAlreadyExists.email!==updateUserRequestDTO.email){
           throw new Error('A user with this email already exists.');
        }

        let encrypt_password;
        const value_compare = await compare(userAlreadyExists.password,updateUserRequestDTO.password);
        if(!value_compare) {
            encrypt_password = await encrypt(updateUserRequestDTO.password);
        }

        const user = new User(
            updateUserRequestDTO.id,
            updateUserRequestDTO.full_name,
            updateUserRequestDTO.last_name,
            updateUserRequestDTO.address,
            updateUserRequestDTO.user_type,
            updateUserRequestDTO.email,
            !value_compare?encrypt_password:userAlreadyExists.password,
            null
            );
        
        await this.userRepository.merge(user);
    }
}