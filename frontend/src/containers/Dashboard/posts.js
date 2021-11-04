import { useState } from "react"
import Header from "../../components/Header/index"
import Footer from "../../components/Footer/index"
import AnimalCardPosts from "../../components/AnimalCardPosts"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { Layout, Row, Col,Select} from 'antd';
import AnimalPostAdd from "../../components/AnimalPostAdd";

const { Content } = Layout;
const { Option } = Select;
const Posts = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleOk = (e) => {
    console.log(e);
    setIsModalVisible(false);
  };


  return (
    <Layout className="layout">
      <Header />
      <Content className='mt-5' style={{
        padding: '0 50px',
        'min-height': '280px',
        'padding': '24px',
        'background': '#fff'
      }}>
        <Row justify="space-around">
          <button className="btn mb-2 mt-0" onClick={toggleModal} style={{ marginLeft: "92%" }}>
            <FontAwesomeIcon
              icon={faPlusSquare}
              size="3x"
              color="#001529"
            />
          </button>
          <Col>
            <AnimalCardPosts />
          </Col>
          <Col>
            <AnimalCardPosts />
          </Col>
          <Col>
            <AnimalCardPosts />
          </Col>
          <Col>
            <AnimalCardPosts />
          </Col>
          <Col>
            <AnimalCardPosts />
          </Col>
          <Col>
            <AnimalCardPosts />
          </Col>
        </Row>

      </Content>
      <AnimalPostAdd isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={toggleModal} />
      <Footer />
    </Layout>
  )
}
export default Posts;