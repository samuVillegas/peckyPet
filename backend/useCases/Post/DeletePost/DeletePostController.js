'use strict'
const {DeletePostsRequestDTO} = require('../PostDTO');

module.exports = class {
    constructor(detelePostUseCase){
        this.detelePostUseCase = detelePostUseCase;
    }

    async handle(req,res){
        try{
            await this.detelePostUseCase.execute(DeletePostsRequestDTO(req.body));
            return res.status(200).json({
                message: 'Post deleted'
            })
        }catch(e){
            console.log(e);
            return res.status(400).json({
                message:e.message || 'Unexpected error.'
            });
        }
    }
}