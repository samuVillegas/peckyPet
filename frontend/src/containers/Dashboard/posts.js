import { useEffect, useState } from "react"
import Header from "../../components/Header/index"
import Footer from "../../components/Footer/index"
import AnimalCardPosts from "../../components/AnimalCardPosts"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { Layout, Row, Col,message} from 'antd';
import AnimalPostAdd from "../../components/AnimalPostAdd";
import AnimalPostEdit from "../../components/AnimalPostEdit";
import axios from "axios";
const { Content } = Layout;

const Posts = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalAnimalVisible,setIsModalAnimalVisible] = useState(false);
  const [listPosts,setListPosts] = useState([]);
  const [objEdit,setObjEdit] = useState({});

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  const handleOk = (e) => {
    setIsModalAnimalVisible(false);
  };

  const toggleModalAnimal = () => {
    setIsModalAnimalVisible(!isModalAnimalVisible);
  };
  const handleOkAnimal = (e) => {
    setIsModalAnimalVisible(false);
  };



  const getPosts = async () => {
    const data = {
      id_user: parseInt(sessionStorage.getItem('userId'))
    }
    const key = 'updatable';
    message.loading({ content: 'Cargando publicaciones', key });
    const response = await axios.post(`${process.env.REACT_APP_API_URL}posts/by_user`,data).then((res)=>res).catch((err)=>err);
    if (response.request.status != 200) message.error({ content: 'Error inesperado al cargar las publicaciones', key, duration: 2 });
    else {
      setListPosts([...response.data.data])
    }
  }

  useEffect(()=>{
    getPosts();
  },[])

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
          {listPosts.length>0?
            listPosts.map((item)=>{
              return <AnimalCardPosts toggleModalAnimal={toggleModalAnimal} info={item} setObjEdit={setObjEdit} getPosts={getPosts}/>
            })
          :null}
        </Row>

      </Content>
      {isModalVisible?<AnimalPostAdd isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={toggleModal}  getPosts={getPosts}/>:null}
      {isModalAnimalVisible && Object.keys(objEdit).length>0?<AnimalPostEdit isModalVisible={isModalAnimalVisible} handleOk={handleOkAnimal} handleCancel={toggleModalAnimal}  getPosts={getPosts} pastData={objEdit} setObjEdit={setObjEdit}/> :null}
      
      <Footer />
    </Layout>
  )
}
export default Posts;