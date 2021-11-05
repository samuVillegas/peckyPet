module.exports = class {
    constructor(
        id,
        id_user,
        id_animal_type,
        race,
        age,
        vaccinated_state,
        extra_description,
        size,
        register_date,
        update_date,
        id_file
    ){
        this.id = id;
        this.id_user = id_user;
        this.id_animal_type = id_animal_type;
        this.race = race;
        this.age = age;
        this.vaccinated_state = vaccinated_state;
        this.extra_description = extra_description;
        this.size = size;
        this.register_date = register_date;
        this.update_date = update_date;
        this.id_file = id_file;
    }
}