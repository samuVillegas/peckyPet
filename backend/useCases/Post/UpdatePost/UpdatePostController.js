const {UpdatePostRequestDTO} = require('../PostDTO');
module.exports = class {
    constructor(updatePostUseCase){
        this.updatePostUseCase = updatePostUseCase
    }

    async handle(req,res){
        const postDTO = UpdatePostRequestDTO(req.body);
        try{
            await this.updatePostUseCase.execute(postDTO);
            return res.status(201).json({
                message: 'Post updated'
            })
        }catch(e){
            console.log(e);
            return res.status(400).json({
                message:e.message || 'Unexpected error.'
            });
        }
    }
}