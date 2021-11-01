const {UpdateUserRequestDTO} = require('../UserDTO');

module.exports = class {
    constructor(updateUserUseCase){
        this.updateUserUseCase = updateUserUseCase;
    }

    async handle(req,res){
        const userDTO = UpdateUserRequestDTO(req.body);
        try{
            await this.updateUserUseCase.execute(userDTO);
            return res.status(201).json({
                message: 'User updated'
            })
        }catch(e){
            console.log(e);
            return res.status(400).json({
                message:e.message || 'Unexpected error.'
            });
        }
    }

}