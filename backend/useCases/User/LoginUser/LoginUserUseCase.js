const {compare} = require('../../../helpers/passwordSecurity')
const {UserResponseDTO} = require('../UserDTO')
module.exports = class {

    constructor(userRepository){
        this.userRepository = userRepository;
    }    

    async execute(loginUserRequestDTO){
        const user = await this.userRepository.findByEmail(loginUserRequestDTO.email);

        if(!user){
            throw new Error('The user does not exist.');
        }

        const value_compare = await compare(user.password,loginUserRequestDTO.password);
        if(!value_compare){
            throw new Error('Incorrect password.');
        }

        return UserResponseDTO(user);

    }
}