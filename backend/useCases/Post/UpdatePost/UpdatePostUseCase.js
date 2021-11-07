const Post = require('../../../entities/Post');
const File = require('../../../entities/File');
const moment = require('moment');
module.exports = class {
    constructor(fileRepository, postRepository) {
        this.fileRepository = fileRepository;
        this.postRepository = postRepository;
    }

    async execute(updatePostRequestDTO) {
        const existingPost = await this.postRepository.get(updatePostRequestDTO.id);
        if (!existingPost) {
            throw new Error('The publication does not exist.');
        }

        let responseGetFile;
        if (existingPost.name_file != updatePostRequestDTO.name_file) {
            //Crear registro en la tabla file
            const file = new File(null, updatePostRequestDTO.name_file, updatePostRequestDTO.url_file);
            await this.fileRepository.persist(file);

            //Obtener el registro de la tabla file recien creado
            responseGetFile = await this.fileRepository.getByNameFile(updatePostRequestDTO.url_file, updatePostRequestDTO.name_file);
        }
        const actualDate = await moment();
        const post = new Post(
            updatePostRequestDTO.id,
            updatePostRequestDTO.id_user,
            updatePostRequestDTO.id_animal_type,
            updatePostRequestDTO.race,
            updatePostRequestDTO.age,
            updatePostRequestDTO.vaccinated_state,
            updatePostRequestDTO.extra_description,
            updatePostRequestDTO.size,
            null,
            actualDate.format('YYYY/MM/DD'),
            responseGetFile?responseGetFile.id:updatePostRequestDTO.id_file
        );
        //Se actualiza la publicación
        await this.postRepository.merge(post);
    }
}