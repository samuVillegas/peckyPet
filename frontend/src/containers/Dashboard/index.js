import { useState, useEffect } from "react"
import Header from "../../components/Header/index"
import Footer from "../../components/Footer/index"
import AnimalCard from "../../components/AnimalCard"
import { Layout, Row, Col, Card, Select, message,Checkbox } from 'antd';
import { LIST_ENUM_VACCINATED_STATE, LIST_ENUM_SIZE } from "../../constants/enums"
import axios from "axios";
const { Content } = Layout;
const { Option } = Select;

const Dashboard = () => {

  const [animalTypesList, setAnimalTypeList] = useState([]);
  const [racesList, setRacesList] = useState([]);
  const [agesList, setAgesList] = useState([]);
  const [listPosts, setListPosts] = useState([]);
  const [auxlistPosts, setAuxListPosts] = useState([]);
  const [filters, setFilters] = useState({});  
  const [optionFilterInterest,setOptionFilterInterest] = useState(3);

  const getAnimalTypes = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}animal_types`);
    if (response.request.status !== 200) message.error('Error al traer datos');
    else {
      setAnimalTypeList([...response.data.data])
    }
  }

  const getRaces = async (filter) => {
    const data = {
      "id_user": sessionStorage.getItem('userId'),
      "filter": filter
    }
    const response = await axios.post(`${process.env.REACT_APP_API_URL}posts/filters/races`, data);
    if (response.request.status !== 200) message.error('Error al traer datos');
    else {
      setRacesList([...response.data.data])
    }
  }

  const getAges = async (filter) => {
    const data = {
      "id_user": sessionStorage.getItem("userId"),
      "filter": filter
    }
    const response = await axios.post(`${process.env.REACT_APP_API_URL}posts/filters/ages`, data);
    if (response.request.status !== 200) message.error('Error al traer datos');
    else {
      setAgesList([...response.data.data])
    }
  }

  const getPosts = async (filterParams) => {
    const data = {
      "id_user": sessionStorage.getItem('userId'),
      "filters": filterParams
    }
    const response = await axios.post(`${process.env.REACT_APP_API_URL}posts/filters`, data);
    if (response.request.status !== 200) message.error('Error al traer datos');
    else {
      setListPosts([...response.data.data]);
      setAuxListPosts([...response.data.data]);
    }
  }


  const sendFilter = async (propierty, actuaDataPropierty) => {
    const auxFilters = {
      ...filters,
      [propierty]: actuaDataPropierty.length > 0 ? actuaDataPropierty : undefined
    }
    setFilters(auxFilters)
    await getPosts(auxFilters);
  }


  // const filterInterestGeneral = (option) => {
  //   if(option != 3){
  //     const arrFiltered = [];
  //     auxlistPosts.forEach(item => {
  //       if(option == 1 && item.id_interest !== null ) arrFiltered.push(item)
  //       if(option == 2 && item.id_interest === null ) arrFiltered.push(item)
  //     })
  //     setListPosts(arrFiltered);
  //   }else{
  //     setListPosts(auxlistPosts)
  //   }

    
  // }

  // useEffect(()=>{
  //   filterInterestGeneral(optionFilterInterest);
  // },[optionFilterInterest])


  useEffect(() => {
    getRaces("");
    getAges("");
    getAnimalTypes();
    getPosts({});
  }, [])


  return (
    <Layout className="layout">
      <Header />
      <Content className='mt-5' style={{
        padding: '0 50px',
        'minHeight': '280px',
        'padding': '24px',
        'background': '#fff'
      }}>

        <Card className='m-2' bordered>
          <legend>Filtros</legend>
          <Row>
            <Col>
              <Select
                mode="multiple"
                placeholder={'Tipo de animal'}
                style={{ width: '300px' }}
                className='m-1'
                onChange={async (e) => await sendFilter('id_animal_type', e)}
              >
                {
                  animalTypesList?.map((animal) => {
                    return <Option value={animal.id} key={animal.id}>{animal.animal_name}</Option>
                  })
                }
              </Select>

            </Col>
            <Col>
              <Select
                name={'race'}
                mode="multiple"
                placeholder={'Raza'}
                style={{ width: '300px' }}
                className='m-1'
                onChange={async (e) => await sendFilter('race', e)}
                onSearch={(e) => {
                  getRaces(e)
                }}
              >
                {
                  racesList?.map((race) => {
                    return <Option value={race} key={race}>{race}</Option>
                  })
                }
              </Select>

            </Col>
            <Col>
              <Select
                mode="multiple"
                placeholder={'Edad'}
                style={{ width: '300px' }}
                className='m-1'
                onChange={async (e) => await sendFilter('age', e)}
                onSearch={(e) => {
                  getAges(e)
                }}
              >
                {
                  agesList?.map((age) => {
                    return <Option value={age} key={age}>{age}</Option>
                  })
                }
              </Select>

            </Col><Col>
              <Select
                mode="multiple"
                placeholder={'??Est?? vacunado?'}
                style={{ width: '300px' }}
                className='m-1'
                onChange={async (e) => await sendFilter('vaccinated_state', e)}
              >
                {
                  LIST_ENUM_VACCINATED_STATE?.map((vacc) => {
                    return <Option key={vacc.type} value={vacc.type} >{vacc.value}</Option>
                  })
                }
              </Select>

            </Col><Col>
              <Select
                mode="multiple"
                placeholder={'Tama??o'}
                style={{ width: '300px' }}
                className='m-1'
                onChange={async (e) => await sendFilter('size_type', e)}
              >
                {
                  LIST_ENUM_SIZE?.map((vacc) => {
                    return <Option key={vacc.type} value={vacc.type} >{vacc.value}</Option>
                  })
                }
              </Select>

            </Col>

            <Col>
                <Select
                  name='interest'
                  placeholder='Intereses'
                  className='m-1'
                  style={{ width: '300px' }}
                  onChange={async (e) =>{
                    setOptionFilterInterest(e);
                  }}
                >
                  <Option key={1}> Mis intereses</Option>
                  <Option key={2}> Otros </Option>
                  <Option key={3}> Todos </Option>
                </Select>
            </Col>
          </Row>

        </Card>

        <Row justify="space-around">
          {listPosts.length > 0 ?
            listPosts.map((item) => {
              return (optionFilterInterest == 1 && item.id_interest !== null) || (optionFilterInterest == 2 && item.id_interest === null ) || (optionFilterInterest == 3)? <AnimalCard info={item}/>: null
            })
            : null}
        </Row>
      </Content>
      
      <Footer />
    </Layout>

  );
}

export default Dashboard;
