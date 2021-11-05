const File = require('../../../entities/File');
const Post = require('../../../entities/Post');

module.exports = class {
    constructor(fileRepository,postRepository){
        this.fileRepository = fileRepository;
        this.postRepository = postRepository;
    }

    async execute(createPostRequestDTO){
        //Crear registro en la tabla file
        const file = new File(null,createPostRequestDTO.name_file,createPostRequestDTO.url_file);
        await this.fileRepository.persist(file);

        //Obtener el registro de la tabla file recien creado
        const responseGetFile = await this.fileRepository.getByNameFile(createPostRequestDTO.url_file,createPostRequestDTO.name_file);
        console.log(responseGetFile)
        //Crear registro en la tabla post
        const post = new Post(
            null,
            createPostRequestDTO.id_user,
            createPostRequestDTO.id_animal_type,
            createPostRequestDTO.race,
            createPostRequestDTO.age,
            createPostRequestDTO.vaccinated_state,
            createPostRequestDTO.extra_description,
            createPostRequestDTO.size,
            null,
            null,
            responseGetFile.id
        )
        await this.postRepository.persist(post);
    }
}