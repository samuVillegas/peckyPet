module.exports = {
    GetPostsWithFiltersRequestDTO: (data) => {
        return {
            id_user: data.id_user,
            filters: data.filters
        }
    },
    GetRacesRequestDTO: (data) => {
        return {
            filter: data.filter
        }
    },
    GetAgesRequestDTO: (data) => {
        return {
            filter: data.filter
        }
    }
}