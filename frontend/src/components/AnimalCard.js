import {useState} from "react"
import { Card, Image, Modal, message} from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LIST_ENUM_VACCINATED_STATE_OBJ, LIST_ENUM_SIZE_OBJ } from "../constants/enums"
import axios from "axios";
const {solidFaEye,solidFaHeart} = require('../utilities/solidIcons')
const {regularFaHeart} = require('../utilities/regularIcons')
const { Meta } = Card;


const AnimalCard = ({ info}) => {

  const [toggleIcon,setToggleIcon] = useState(info.id_interest !== null);
  const [interestId,setInterestId] = useState(info.id_interest);

  const showInterest = async () => {
    if(interestId !== null) return 1;
    const data = {
      "id_user": sessionStorage.getItem('userId'),
      "id_publication": info.id
    }

    const response = await axios.post(`${process.env.REACT_APP_API_URL}post/show-interest`,data).then(res=>res).catch(err=>err);
    if (response.request.status != 200) {
      message.error('Error al mostrar interes');
      return 1;
    }
    setInterestId(response.data.data.id)
    return 2;
  }

  const removeInterest = async () => {
    if(interestId === null) return 1;
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}post/remove-interest/${interestId}`).then(res=>res).catch(err=>err);
    if (response.request.status != 200) {
      message.error('Error al eliminar interes');
      return 1;
    }
    setInterestId(null)
    return 2;
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
        <FontAwesomeIcon icon={toggleIcon?solidFaHeart:regularFaHeart} size="lg" key="delete"
          onClick={async () => {
            let responseRequest;
            if(toggleIcon) responseRequest = await removeInterest();
            else responseRequest = await showInterest();
            if(responseRequest !== 1) setToggleIcon(!toggleIcon);
          }}
        />,
        <FontAwesomeIcon
          icon={solidFaEye}
          size="lg"
          key="edit"
          onClick={() => {
            Modal.info({
              title: '',
              content: (<>
                <legend>Información del animal</legend>
                <div class="alert alert-primary text-center" role="alert">
                  <h6><b>Tipo de animal:</b> {info.animal_name} </h6>
                  <h6><b>Edad:</b> {info.age} </h6>
                  <h6><b>Raza:</b> {info.race} </h6>
                  <h6><b>Tamaño:</b> {info.size} </h6>
                  <h6><b>Descripción extra:</b> {info.extra_description} </h6>
                  <h6><b>Tipo de animal:</b> {info.animal_name} </h6>
                </div>
                <legend>Información de usuario que publica</legend>
                <div class="alert alert-primary text-center" role="alert">
                  <h6><b>Nombre:</b> {info.full_name} {info.last_name} </h6>
                  <h6><b>Celular:</b> {info.mobile_phone} </h6>
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