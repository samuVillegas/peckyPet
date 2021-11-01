const {LoginUserRequestDTO} = require('../UserDTO')
module.exports = class {
    constructor(loginUserUseCase){
        this.loginUserUseCase = loginUserUseCase;
    }

    async handle(req,res){
        const userDTO = LoginUserRequestDTO(req.body);
        try{
            const userResponse = await this.loginUserUseCase.execute(userDTO);
            return res.status(200).json({
                data: userResponse,
                message: 'Access granted.'
            })
        }catch(e){
            console.log(e);
            return res.status(400).json({
                message:e.message || 'Unexpected error.'
            });
        }
    }
}