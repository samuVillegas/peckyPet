module.exports = class {
    constructor(listAnimalTypeUseCase){
        this.listAnimalTypeUseCase = listAnimalTypeUseCase
    }

    async handle(req,res){
        try{
            const animalTypes = await this.listAnimalTypeUseCase.execute();
            return res.status(200).json({
                data: animalTypes,
                message: 'Types of animals successfully obtained'
            })
        }catch(e){
            console.log(e);
            return res.status(400).json({
                message:e.message || 'Unexpected error.'
            });
        }
    }
}