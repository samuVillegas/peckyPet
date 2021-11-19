'use strict'
const {GetPostsWithFiltersRequestDTO} = require('../AdoptDTO');

module.exports = class {
    constructor(getPostsWithFilersUseCase){
        this.getPostsWithFilersUseCase = getPostsWithFilersUseCase;
    }

    async handle(req,res){
        try{
            const posts = await this.getPostsWithFilersUseCase.execute(GetPostsWithFiltersRequestDTO(req.body));
            return res.status(200).json({
                data: posts.rows,
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