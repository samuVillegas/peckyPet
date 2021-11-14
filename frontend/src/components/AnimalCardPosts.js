import { Card, message, Image} from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPen } from "@fortawesome/free-solid-svg-icons";
import {LIST_ENUM_VACCINATED_STATE_OBJ,LIST_ENUM_SIZE_OBJ} from "../constants/enums"
import axios from "axios";
const { Meta } = Card;
const AnimalCardPosts = ({info,toggleModalAnimal,setObjEdit,getPosts}) => { 
  const deletePost = async () => {
    const key = 'updatable';
    message.loading({ content: 'Eliminando publicación...', key });

    const data = {
      id: info.id
    }

    const response = await axios.delete(`${process.env.REACT_APP_API_URL}posts`, {data}).then((res) => res).catch((err) => err);

    if (response.request.status != 200) message.error({ content: 'Error inesperado al eliminar la publicación', key, duration: 2 });
    else {
      message.success({ content: 'Publicación eliminada correctamente', key, duration: 2 });
      getPosts();
    };
  }

  return (
    <Card
      style={{ width: 300 }}
      className="m-1"
      cover={
        <Image
          alt="example"
          src={info.url_file}
          width={300}
          height={200}
        />
      }
      actions={[
        <FontAwesomeIcon icon={faTrashAlt} size="lg" key="delete" 
          onClick={async ()=>{
            await deletePost();
          }}
        />,
        <FontAwesomeIcon
          icon={faPen}
          size="lg"
          key="edit"
          onClick={() => {
            setObjEdit({...info});
            toggleModalAnimal();
          }}
        />
      ]}
    >
      <Meta
        title={info.animal_name}
        description={<>
          <p><b>Raza</b>:  {info.race}</p>
          <p><b>¿Vacunado?</b>:  {LIST_ENUM_VACCINATED_STATE_OBJ[info.vaccinated_state]}</p>
          <p><b>Tamaño</b>:  {LIST_ENUM_SIZE_OBJ[info.size]}</p>
        </>}
      />
    </Card>
  );
};
export default AnimalCardPosts;