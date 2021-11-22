import { Card, Image, Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { LIST_ENUM_VACCINATED_STATE_OBJ, LIST_ENUM_SIZE_OBJ } from "../constants/enums"
const { Meta } = Card;
const AnimalCard = ({ info, toggleModalAnimalDescription }) => {
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
        <FontAwesomeIcon icon={faHeart} size="lg" key="delete"
          onClick={async () => {

          }}
        />,
        <FontAwesomeIcon
          icon={faEye}
          size="lg"
          key="edit"
          onClick={() => {
            Modal.info({
              title: 'Información del animal domestico',
              content: (<>
                <div class="alert alert-primary text-center" role="alert">
                  <img src={info.url_file} className="img-thumbnail" alt="Responsive image"></img>
                  <h6><b>Tipo de animal:</b> {info.animal_name} </h6>
                </div>
              </>),
              width: '500px'
            }

            )
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
export default AnimalCard;