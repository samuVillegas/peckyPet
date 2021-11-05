const {GetPostsByUserRequestDTO} = require('../PostDTO');
module.exports = class {
    constructor(getPostsByUsuerUseCase){
        this.getPostsByUsuerUseCase = getPostsByUsuerUseCase;
    }
    async handle(req,res){
        try{
            const posts = await this.getPostsByUsuerUseCase.execute(GetPostsByUserRequestDTO(req.body));
            return res.status(200).json({
                data: posts,
                message: 'Posts successfully obtained'
            })
        }catch(e){
            console.log(e);
            return res.status(400).json({
                message:e.message || 'Unexpected error.'
            });
        }
    }
}