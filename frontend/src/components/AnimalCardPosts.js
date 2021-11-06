import { Card, Avatar, Image} from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrashAlt, faPen } from "@fortawesome/free-solid-svg-icons";
import {LIST_ENUM_VACCINATED_STATE_OBJ,LIST_ENUM_SIZE_OBJ} from "../constants/enums"
const { Meta } = Card;
const AnimalCardPosts = ({info}) => {
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
        <FontAwesomeIcon icon={faTrashAlt} size="lg" key="delete" />,
        <FontAwesomeIcon
          icon={faPen}
          size="lg"
          key="edit"
          onClick={() => {
            console.log("hola");
          }}
        />,
        <FontAwesomeIcon icon={faEye} size="lg" key="preview" />,
      ]}
    >
      <Meta
        avatar={
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }
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