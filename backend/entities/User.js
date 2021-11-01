module.exports = class User {
    constructor(
        id,
        full_name,
        last_name,
        address,
        user_type,
        email,
        password,
        register_date
    ){
        this.id = id
        this.full_name = full_name
        this.last_name = last_name
        this.address = address
        this.user_type = user_type
        this.email = email
        this.password = password
        this.register_date = register_date
    }
}