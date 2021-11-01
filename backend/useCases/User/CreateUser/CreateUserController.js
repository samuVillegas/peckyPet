const {CreateUserRequestDTO} = require('../UserDTO');

module.exports = class {
    constructor(createUserUseCase){
        this.createUserUseCase = createUserUseCase;
    }

    async handle(req,res){
        const userDTO = CreateUserRequestDTO(req.body);
        try{
            await this.createUserUseCase.execute(userDTO);
            return res.status(201).send();
        }catch(e){
            console.log(e);
            return res.status(400).json({
                message:e.message || 'Unexpected error.'
            });
        }
    }

}