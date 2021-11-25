module.exports = {
    GetPostsWithFiltersRequestDTO: (data) => {
        return {
            id_user: data.id_user,
            filters: data.filters
        }
    },
    GetRacesRequestDTO: (data) => {
        return {
            id_user: data.id_user,
            filter: data.filter
        }
    },
    GetAgesRequestDTO: (data) => {
        return {
            id_user: data.id_user,
            filter: data.filter
        }
    },
    ShowInterestRequestDTO: (data) => {
        return {
            id_user: data.id_user,
            id_publication: data.id_publication
        }
    },
    RemoveInterestRequestDTO: (data) => {
        return {
            id: data.id
        }
    },
    GetPostsWithFiltersResponseDTO: (data) => {
        return {
            id: data.id,
            id_user: data.id_user,
            id_animal_type: data.id_animal_type ,
            race: data.race ,
            age: data.age,
            vaccinated_state: data.vaccinated_state,
            extra_description: data.extra_description,
            size: data.size_type,
            name_file: data.name_file,
            url_file: data.url_file,
            animal_name: data.animal_name,
            id_file:data.id_file,
            id_interest: data.id_interest,
            full_name:data.full_name,
            last_name:data.last_name,
            user_type:data.user_type,
            address:data.address,
            mobile_phone:data.mobile_phone,
        }
    }
}