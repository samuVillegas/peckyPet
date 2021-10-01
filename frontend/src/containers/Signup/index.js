import {Formik} from "formik"
import {Form,Input} from "formik-antd"
import { Button, Row,Col,Image,Select} from "antd";
import * as Yup from 'yup'
const {Option} = Select;
const Signup = () => {
    const submit = (values)=>{
        console.log(values)
    }

    const validateSchema = Yup.object().shape({
        email: Yup.string().required('Debe ser ingresado'),
        password: Yup.string().required('Debe ser ingresado'),
        full_name: Yup.string().required('Debe ser ingresado'),
        last_name: Yup.string().required('Debe ser ingresado'),
        user_type: Yup.string().required('Debe ser ingresado')
    })

return (
    <div className='m-0 vh-100 row justify-content-center align-items-center' style={{
        background:'rgba(0, 21, 41)'
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
                    >
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
                                <Form.Item name='user_type'>
                                    <Select
                                        placeholder={'Tipo de usuario'}
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
                    </Formik>
                </div>
               
        </div>
    </div>
)
}

export default Signup;
