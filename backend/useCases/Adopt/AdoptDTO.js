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
    }
}