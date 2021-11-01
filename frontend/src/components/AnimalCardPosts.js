import { Card, Avatar } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrashAlt, faPen } from "@fortawesome/free-solid-svg-icons";
const { Meta } = Card;
const AnimalCardPosts = () => {
  return (
    <Card
      style={{ width: 300 }}
      className="m-1"
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
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
        title="Card title"
        description="This is the description"
      />
    </Card>
  );
};
export default AnimalCardPosts;