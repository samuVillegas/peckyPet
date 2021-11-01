import Header from "../../components/Header/index"
import Footer from "../../components/Footer/index"
import AnimalCard from "../../components/AnimalCard"
import {Layout,Row,Col} from 'antd';
const {Content} = Layout;

const Dashboard = () => {
  return (
    <Layout className="layout">
        <Header/>
        <Content className='mt-5' style={{ padding: '0 50px',
          'minHeight': '280px',
            'padding': '24px',
            'background': '#fff'
        }}>
        <Row>
          <Col>
            <AnimalCard></AnimalCard>
          </Col>
          <Col>
            <AnimalCard></AnimalCard>
          </Col>
          <Col>
            <AnimalCard></AnimalCard>
          </Col>
          <Col>
            <AnimalCard></AnimalCard>
          </Col>
          <Col>
            <AnimalCard></AnimalCard>
          </Col>
          <Col>
            <AnimalCard></AnimalCard>
          </Col>
          <Col>
            <AnimalCard></AnimalCard>
          </Col>
        </Row>
        </Content>  
        <Footer/>
    </Layout>

  );
}

export default Dashboard;
