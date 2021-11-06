import {storage} from "../../src/firebase/firebase"
import {useEffect, useState} from "react"
import {Modal, Select, Upload, Button, message,Checkbox} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Formik, useFormikContext} from "formik"
import { Form, Input } from "formik-antd"
import * as Yup from 'yup'
import axios from "axios"
import {LIST_ENUM_VACCINATED_STATE, LIST_ENUM_SIZE} from "../constants/enums"
const {Option} = Select;


const AutoSubmitPostAdd = () => {
  const { values, submitForm } = useFormikContext()
  useEffect(() => {
      submitForm()
  }, [values, submitForm])
  return null
}

const AnimalPostAdd = ({isModalVisible,handleOk,handleCancel,getPosts}) =>{

  const[submit,setSubmit] = useState(false);
  const[animalTypesList, setAnimalTypeList] = useState([]);


  const getAnimalTypes = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}animal_types`);
    if(response.request.status !== 200) message.error('Error al traer datos');
    else {
      setAnimalTypeList([...response.data.data])
    }
  }

  useEffect(()=>{
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
    message.loading({ content: 'Realizando publicación...', key });

    //Cargamos la imagen
    const {url,name} = await uploadImage(values.photo[0]);

    const data = {
      id_user: parseInt(sessionStorage.getItem('userId')),
      id_animal_type: values.id_animal_type,
      race: values.race ,
      age: values.age,
      vaccinated_state: values.vaccinated_state,
      extra_description: values.extra_description,
      size: values.size,
      name_file: name,
      url_file: url
    }

    //Guardamos los datos en la BD
    const response = await axios.post(`${process.env.REACT_APP_API_URL}posts`, data).then((res) => res).catch((err) => err);

    if (response.request.status != 201) message.error({ content: 'Error inesperado al realizar publicación', key, duration: 2 });
    else {
      message.success({ content: 'Publicación realizada correctamente', key, duration: 2 });
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
          title="Publicar animal domestico"
          visible={isModalVisible}
          onOk={()=>{
                setSubmit(true)
                setTimeout(() => setSubmit(false), 100)
          }}
          onCancel={handleCancel}
          width={450}
          okText='Publicar'
        >
          <Formik
            initialValues={{
                id_animal_type:'',
                race:'',
                age:'',
                photo:[],
                vaccinated_state:'',
                size:'',
                extra_description:''
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
                  >
                    <Select
                      name='id_animal_type'
                      placeholder={'Tipo de animal (Obligatorio)'}
                      onChange={(e) => {
                        setFieldValue('id_animal_type', e);
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
                  >
                    <Input
                      name='race'
                      placeholder='Raza (Obligatorio)'
                    ></Input>
                  </Form.Item>
                  <Form.Item name='age'
                  >
                    <Input
                      name='age'
                      placeholder='Edad'
                    ></Input>
                  </Form.Item>
                  <Form.Item name='vaccinated_state'
                  >
                    <Select
                      name='vaccinated_state'
                      placeholder={'¿Está vacunado? (Obligatorio)'}
                      onChange={(e) => {
                        setFieldValue('vaccinated_state', e);
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
                  >
                    <Select
                      name='size'
                      placeholder={'Tamaño (Obligatorio)'}
                      onChange={(e) => {
                        setFieldValue('size', e);
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
                  >
                    <Input.TextArea
                      name='extra_description'
                      placeholder='Descripción extra'
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
                        }}
                        beforeUpload={(e)=>{
                            setFieldValue('photo',[e])
                            setTimeout(() => setFieldTouched("photo", true), 100)
                            return false;
                        }}
                        onPreview={file => false}
                    >
                      <Button icon={<UploadOutlined />}>Clik para cargar imagen</Button>
                    </Upload>

                  </Form.Item>
                  {submit ? <AutoSubmitPostAdd /> : null}
                </Form>
              )
            }
          </Formik>
        </Modal>
      
    )
}

export default AnimalPostAdd;