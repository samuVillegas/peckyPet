import {Formik} from "formik"
import {Form,Input} from "formik-antd"
import { Button, Row,Col,Select,message} from "antd";
import * as Yup from 'yup'
import axios from "axios";
import { UserOutlined, LockOutlined, HomeOutlined, MobileOutlined} from '@ant-design/icons';
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
        user_type: Yup.string().required('Debe ser ingresado'),
        mobile_phone: Yup.string().required('Debe ser ingresado')
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
                            user_type: '',
                            mobile_phone: ''
                        }}
                        onSubmit={submit}
                        validationSchema={validateSchema}
                    >{
                        ({setFieldValue})=>(
                            <Form 
                            name="normal_login"
                            className="login-form"
                            style={{
                                maxWidth: '400px'
                            }}
                        >
   
                            <Form.Item name='email'>
                                <Input name='email' prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Correo" />
                            </Form.Item>
    
                            <Form.Item name='password'>
                                <Input.Password
                                    name='password'
                                    placeholder='Contraseña'
                                    type='password'
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                ></Input.Password>
                            </Form.Item>
                            <Form.Item name='full_name'>
                                <Input
                                    name='full_name'
                                    placeholder='Nombre(s)'
                                    prefix={<UserOutlined className="site-form-item-icon" />}
                                ></Input>
                            </Form.Item>
                            <Form.Item name='last_name'>
                                <Input
                                    name='last_name'
                                    placeholder='Apellido(s)'
                                    prefix={<UserOutlined className="site-form-item-icon" />}
                                ></Input>
                            </Form.Item>
                            <Form.Item name='address'>
                                <Input
                                    name='address'
                                    placeholder='Dirección'
                                    prefix={<HomeOutlined className="site-form-item-icon" />}
                                ></Input>
                            </Form.Item>
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
                            <Form.Item name='mobile_phone'>
                                
                                <Input
                                    name='mobile_phone'
                                    placeholder='Número celular'
                                    prefix={<MobileOutlined className="site-form-item-icon" />}
                                >
                                </Input>
                            </Form.Item>

                            <Form.Item name='sub'>
                                <Button type="primary" htmlType="submit" className="login-form-button"
                                    style={{
                                        width: '100%'
                                    }}
                                >
                                    Registrar
                                </Button>
                                O  <a href="/signin">Ingresa ahora!</a>
                            </Form.Item>
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
