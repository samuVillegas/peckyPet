import {Formik} from "formik"
import {Form,Input} from "formik-antd"
import { Button, Row,Col,Select,message} from "antd";
import * as Yup from 'yup'
import axios from "axios";
const {Option} = Select;

const Signup = () => {
    
    const submit = async (values)=>{
        const data = {
            ...values
        }
        const key = 'updatable';
        message.loading({ content: 'Creando...', key });

        const response = await axios.post(`${process.env.REACT_APP_API_URL}users`,data).then((res)=>res).catch((err)=>err);

        if(response.request.status!=201) message.error({ content: 'Error inesperado', key, duration: 2 });
        else {
            message.success({ content: 'Usuario Creado Correctamente', key, duration: 2 });
            setTimeout(()=>{
                window.location.pathname = "/signin";
            },2000)
        };  
    }

    const validateSchema = Yup.object().shape({
        email: Yup.string().required('Debe ser ingresado').email(),
        password: Yup.string().required('Debe ser ingresado'),
        full_name: Yup.string().required('Debe ser ingresado'),
        last_name: Yup.string().required('Debe ser ingresado'),
        user_type: Yup.string().required('Debe ser ingresado')
    })

return (
    <div className='m-0 vh-100 row justify-content-center align-items-center' style={{
        background:'linear-gradient(to bottom right, rgb(50,191,208), white)'
    }}>
        <div className='col-auto p-5 text-center'>
                <div className='bg-white p-5 border border-dark rounded'>
                    <Formik
                        initialValues={{
                            email:'',
                            password:'',
                            full_name: '',
                            last_name: '',
                            user_type: ''
                        }}
                        onSubmit={submit}
                        validationSchema={validateSchema}
                    >{
                        ({setFieldValue})=>(
                            <Form name="basic"
                            className='mt-3 bg-white'
                        >
                            <Row>
                                <Col>
                                <span className='text-danger'>*</span>
                                </Col>
                                <Col>
                                    <Form.Item name='email'>
                                        <Input
                                            name='email'
                                            placeholder='Email'
                                        ></Input>
                                    </Form.Item>
                                </Col>
                            </Row>
                            
                            <Row>
                                <Col>
                                    <span className='text-danger'>*</span>
                                </Col>
                                <Col>
                                <Form.Item name='password'>
                                    <Input
                                        name='password'
                                        placeholder='Contraseña'
                                        type='password'
                                    ></Input>
                                </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span className='text-danger'>*</span>
                                </Col>
                                <Col>
                                <Form.Item name='full_name'>
                                    <Input
                                        name='full_name'
                                        placeholder='Nombre(s)'
                                    ></Input>
                                </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span className='text-danger'>*</span>
                                </Col>
                                <Col>
                                <Form.Item name='last_name'>
                                    <Input
                                        name='last_name'
                                        placeholder='Apellido(s)'
                                    ></Input>
                                </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span className='text-danger'>*</span>
                                </Col>
                                <Col>
                                <Form.Item name='address'>
                                    <Input
                                        name='address'
                                        placeholder='Dirección'
                                    ></Input>
                                </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span className='text-danger'>*</span>
                                </Col>
                                <Col>
                                <Form.Item name='user_type'>
                                    <Select
                                        name='user_type'
                                        placeholder={'Tipo de usuario'}
                                        onChange={(e)=>{
                                            setFieldValue('user_type',e);
                                        }}
                                        >
                                        <Option value="person">Persona</Option>
                                        <Option value="organization">Organización</Option>
                                    </Select>
                                </Form.Item>
                                </Col>
                            </Row>

                            <Form.Item name='accept'>
                                <Button type='primary' htmlType="submit">Aceptar</Button>
                            </Form.Item>
                            <Row>
                                <Col className='bg-red' span={8}>
                                    <a href='/signin'>Iniciar Sesión</a>
                                </Col>
                            </Row>
                        </Form>
                        )
                    }
                        
                    </Formik>
                </div>
               
        </div>
    </div>
)
}

export default Signup;
