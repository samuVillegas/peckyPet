import { Card, Avatar } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
const { Meta } = Card;
const AnimalCard = () => {
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
        <FontAwesomeIcon icon={faHeart} size="lg" key="delete" />,
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
export default AnimalCard;