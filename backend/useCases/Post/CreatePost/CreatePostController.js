const {PostRequestDTO} = require('../PostDTO');
module.exports = class {
    constructor(createPostUseCase){
        this.createPostUseCase = createPostUseCase;
    }

    async handle(req,res){
        try{
            await this.createPostUseCase.execute(PostRequestDTO(req.body));
            return res.status(201).json({
                message: 'Post created'
            })
        }catch(e){
            console.log(e);
            return res.status(400).json({
                message:e.message || 'Unexpected error.'
            });
        }

    }
}