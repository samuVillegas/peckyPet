module.exports = {
    GetPostsWithFiltersRequestDTO: (data) => {
        return {
            id_user: data.id_user,
            filters: data.filters
        }
    }
}