module.exports = {
    AnimalTypeResponseDTO: (data) => {
        return {
            id: data.id,
            animal_name: data.animal_name,
            description: data.description
        }
    },
    PostRequestDTO: (data) => {
        return {
            id_user: data.id_user,
            id_animal_type: data.id_animal_type ,
            race: data.race ,
            age: data.age,
            vaccinated_state: data.vaccinated_state,
            extra_description: data.extra_description,
            size: data.size,
            name_file: data.name_file,
            url_file: data.url_file
        }
    },

    GetPostsByUserRequestDTO: (data) => {
        return {
            id_user: data.id_user
        }
    },

    PostResponseDTO: (data) => {
        return {
            id: data.id,
            id_user: data.id_user,
            id_animal_type: data.id_animal_type ,
            race: data.race ,
            age: data.age,
            vaccinated_state: data.vaccinated_state,
            extra_description: data.extra_description,
            size: data.size,
            name_file: data.name_file,
            url_file: data.url_file
        }
    }


}