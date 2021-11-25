'use strict'

module.exports = class {
    constructor(id,id_user,id_publication,register_date,bool_actual ){
        this.id = id;
        this.id_user = id_user;
        this.id_publication = id_publication;
        this.register_date = register_date;
        this.bool_actual = bool_actual;
    }
}