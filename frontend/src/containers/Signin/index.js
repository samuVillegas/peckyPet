import {Formik} from "formik"
import {Form,Input} from "formik-antd"
import { Button, Row,Col,Image} from "antd";
import * as Yup from 'yup'
const Signin = () => {
    const submit = (values)=>{
        console.log(values)
    }

    const validateSchema = Yup.object().shape({
        email: Yup.string().required('Debe ser ingresado'),
        password: Yup.string().required('Debe ser ingresado')
    })

return (
    <div className='m-0 vh-100 row justify-content-center align-items-center' style={{
        background:'rgba(0, 21, 41)'
    }}>
        <div className='col-auto p-5 text-center'>
                <div className='bg-white p-5 border border-dark rounded'>
                <Image
                    width={150}
                    preview={false}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                    <Formik
                        initialValues={{
                            email:'',
                            password:''
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
                                            placeholder='email'
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
                            <Form.Item name='accept'>
                                <Button type='primary' htmlType="submit">Aceptar</Button>
                            </Form.Item>
                            <Row>
                                <Col className='bg-red' span={8}>
                                    <a href='/signup'>Registrate</a>
                                </Col>
                                
                            </Row>
                        </Form>
                    </Formik>
                </div>
               
        </div>
    </div>
)
}

export default Signin;

/*
<Formik>
                    <Form name="basic"
                    >
                        <Form.Item name='user'>
                            <Input className='mb-4'></Input>
                        </Form.Item>
                        <Form.Item name='password'>
                            <Input className='mt-4'></Input>
                        </Form.Item>
                    </Form>
                </Formik>

*/