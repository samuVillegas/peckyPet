module.exports = {
    AnimalTypeResponseDTO: (data) => {
        return {
            id: data.id,
            animal_name: data.animal_name,
            description: data.description
        }
    }
}