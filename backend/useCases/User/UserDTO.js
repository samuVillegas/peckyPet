'use strict'

module.exports = {
    CreateUserRequestDTO:(data) => {
        return {
            full_name:data.full_name,
            last_name:data.last_name,
            address:data.address,
            user_type:data.user_type,
            email:data.email,
            password:data.password
        }
    },
    UserResponseDTO:(data) => {
        return {
            id:data.id,
            full_name:data.full_name,
            last_name:data.last_name,
            address:data.address,
            user_type:data.user_type,
            email:data.email,
            password:data.password,
            register_date:data.register_date
        }
    }
}
