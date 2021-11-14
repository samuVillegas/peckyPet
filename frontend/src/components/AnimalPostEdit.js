import {storage} from "../../src/firebase/firebase"
import {useEffect, useState} from "react"
import {Modal, Select, Upload, Button, message} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Formik, useFormikContext} from "formik"
import { Form, Input } from "formik-antd"
import * as Yup from 'yup'
import axios from "axios"
import {LIST_ENUM_VACCINATED_STATE, LIST_ENUM_SIZE} from "../constants/enums"
const {Option} = Select;


const AutoSubmitPostEdit = () => {
  const { values, submitForm } = useFormikContext()
  useEffect(() => {
      submitForm()
  }, [values, submitForm])
  return null
}

const AnimalPostEdit = ({isModalVisible,handleOk,handleCancel,getPosts,pastData,setObjEdit}) =>{
  const[submit,setSubmit] = useState(false);
  const[animalTypesList, setAnimalTypeList] = useState([]);
  const[oldPhoto,setOldPhoto] = useState({});

  const getAnimalTypes = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}animal_types`);
    if(response.request.status !== 200) message.error('Error al traer datos');
    else {
      setAnimalTypeList([...response.data.data])
    }
  }

  useEffect(()=>{
    setOldPhoto({
      uid: '1',
      name: `${pastData.name_file}`,
      status: 'done',
      response: 'Server Error 500', // custom error message to show
      url: `${pastData.url_file}`,
    });
    getAnimalTypes();
  },[])

  const uploadImage = async(file) => {
    const storageRef = storage.ref();
    const spaceRef = storageRef.child(`publications/${sessionStorage.getItem('userId')}/${file.name}`);
    await spaceRef.put(file);
    const publicURL = await spaceRef.getDownloadURL();
    const metada = await spaceRef.getMetadata();
    return{url: publicURL,name:metada.name}
  }

  const onSubmit = async (values) =>{
    const key = 'updatable';
    message.loading({ content: 'Actualizando publicación...', key });
    let urlFile = oldPhoto.url;
    let nameFile = oldPhoto.name;
    if(values.photo[0].size){
      //Cargamos la imagen
      const {url,name} = await uploadImage(values.photo[0]);
      urlFile = url;
      nameFile = name;
    }

    const data = {
      id:pastData.id,
      id_user: parseInt(sessionStorage.getItem('userId')),
      id_animal_type: values.id_animal_type,
      race: values.race ,
      age: values.age,
      vaccinated_state: values.vaccinated_state,
      extra_description: values.extra_description,
      size: values.size,
      name_file: nameFile,
      url_file: urlFile,
      id_file: pastData.id_file
    }
    //Guardamos los datos en la BD
    const response = await axios.put(`${process.env.REACT_APP_API_URL}posts`, data).then((res) => res).catch((err) => err);

    if (response.request.status != 201) message.error({ content: 'Error inesperado al realizar publicación', key, duration: 2 });
    else {
      message.success({ content: 'Publicación actualizada correctamente', key, duration: 2 });
      getPosts();
    };

    //Cerramos el modal
    handleCancel()

  }

  const validateSchema = Yup.object().shape({
    id_animal_type: Yup.string().required('Debe ser ingresado'),
    vaccinated_state:Yup.string().required('Debe ser ingresado'),
    size:Yup.string().required('Debe ser ingresado'),
    race:Yup.string().required('Debe ser ingresado'),
    photo: Yup.mixed().test('h','Debes de subir una imagen',value => {
      if(value.length>0) return true;
      else return false;
    })
  })


    return (
        <Modal 
          title="Editar animal domestico"
          style={{ top: 35 }}
          visible={isModalVisible}
          onOk={()=>{
                setSubmit(true)
                setTimeout(() => setSubmit(false), 100)
          }}
          onCancel={handleCancel}
          width={450}
          okText='Editar'

        >
          <Formik
            enableReinitialize
            initialValues={{
                id_animal_type:pastData.id_animal_type,
                race:pastData.race,
                age:pastData.age,
                photo:[{
                  uid: '1',
                  name: `${pastData.name_file}`,
                  status: 'done',
                  response: 'Server Error 500', // custom error message to show
                  url: `${pastData.url_file}`,
                }],
                vaccinated_state:pastData.vaccinated_state,
                size:pastData.size,
                extra_description:pastData.extra_description
            }}
            validationSchema={validateSchema}
            onSubmit={
              onSubmit
            }
          >
            {
              ({ setFieldValue,setFieldTouched}) => (
                <Form
                  name="basic"
                  className='mt-3 bg-white'
                  style={{
                    maxWidth: '100%'
                  }}
                >
                
                  <Form.Item name='id_animal_type'
                    label={'Tipo de animal'}
                  >
                    <Select
                      name='id_animal_type'
                      value={pastData.id_animal_type}
                      onChange={(e) => {
                        setFieldValue('id_animal_type', e);
                        setObjEdit({...pastData,id_animal_type:e})
                      }}
                    >
                      {
                        animalTypesList?.map((animal)=>{
                          return <Option value={animal.id} key={animal.id}>{animal.animal_name}</Option>
                        })
                      }
                    </Select>
                  </Form.Item>
                  <Form.Item name='race'
                    label={'Raza'}
                  >
                    <Input
                      name='race'
                      value={pastData.race}
                      onChange={(e)=>{
                        setObjEdit({...pastData,race:e.target.value})
                      }}
                    ></Input>
                  </Form.Item>
                  <Form.Item name='age'
                    label={'Edad'}
                  >
                    <Input
                      name='age'
                      value={pastData.age}
                      onChange={(e)=>{
                        setObjEdit({...pastData,age:e.target.value})
                      }}
                    ></Input>
                  </Form.Item>
                  <Form.Item name='vaccinated_state'
                    label={'¿Está vacunado?'}
                  >
                    <Select
                      name='vaccinated_state'
                      value={pastData.vaccinated_state}
                      onChange={(e)=>{
                        setObjEdit({...pastData,vaccinated_state:e})
                      }}
                    >
                      {
                        LIST_ENUM_VACCINATED_STATE?.map((vacc)=>{
                          return <Option key={vacc.type}  value={vacc.type} >{vacc.value}</Option>
                        })
                      }
                    </Select>
                  </Form.Item>
                  <Form.Item name='size'
                    label={'Tamaño'}
                  >
                    <Select
                      name='size'
                      value={pastData.size}
                      onChange={(e)=>{
                        setObjEdit({...pastData,size:e})
                      }}
                    >
                      {
                        LIST_ENUM_SIZE ?.map((vacc)=>{
                          return <Option key={vacc.type}  value={vacc.type} >{vacc.value}</Option>
                        })
                      }
                    </Select>
                  </Form.Item>
                  <Form.Item name='extra_description'
                    label={'Descripción extra'}
                  >
                    <Input.TextArea
                      name='extra_description'
                      value={pastData.extra_description}
                      onChange={(e)=>{
                        setObjEdit({...pastData,extra_description:e.target.value})
                      }}
                    ></Input.TextArea>
                  </Form.Item>
                  <legend> Foto de tu mascota (Obligatorio)</legend>
                  <Form.Item
                    name='photo'
                  >
                    <Upload
                        name='photo'
                        listType='picture'
                        maxCount={1}
                        onRemove={()=>{
                            setFieldValue('photo',[])
                            setObjEdit({...pastData,photo:[]})
                        }}
                        beforeUpload={(e)=>{
                            setFieldValue('photo',[e])
                            setObjEdit({...pastData,photo:[e]})
                            setTimeout(() => setFieldTouched("photo", true), 100)
                            return false;
                        }}

                        onPreview={file => false}
                        defaultFileList={[
                          {
                            uid: '1',
                            name: `${pastData.name_file}`,
                            status: 'done',
                            response: 'Server Error 500', // custom error message to show
                            url: `${pastData.url_file}`,
                          }
                        ]}
                    >
                      <Button icon={<UploadOutlined />}>Clik para cargar imagen</Button>
                    </Upload>

                  </Form.Item>
                  {submit ? <AutoSubmitPostEdit /> : null}
                </Form>
              )
            }
          </Formik>
        </Modal>
      
    )
}

export default AnimalPostEdit;