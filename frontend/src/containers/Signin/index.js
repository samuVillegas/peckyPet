import { Formik } from "formik"
import { Form, Input } from "formik-antd"
import { Button,Image, message} from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import * as Yup from 'yup'
import axios from "axios";
const Signin = () => {
    const submit = async (values) => {
        const data = {
            ...values
        }
        const key = 'updatable';
        message.loading({ content: 'Validadando credenciales...', key });

        const response = await axios.post(`${process.env.REACT_APP_API_URL}users/login`, data).then((res) => res).catch((err) => err);

        if (response.request.status != 200) message.error({ content: 'Error inesperado', key, duration: 2 });
        else {
            message.success({ content: 'Bienvenid@', key, duration: 1 });
            sessionStorage.setItem('userId', response.data.data.id);
            setTimeout(() => {
                window.location.pathname = "/dashboard/index";
            }, 1000)
        };
    }

    const validateSchema = Yup.object().shape({
        email: Yup.string().required('Debe ser ingresado'),
        password: Yup.string().required('Debe ser ingresado')
    })

    return (
        <div className='m-0 vh-100 row justify-content-center align-items-center' style={{
            background: 'linear-gradient(to bottom right, rgb(50,191,208), white)'
        }}>
            <div className='col-auto p-5 text-center'>
                <div className='bg-white p-5 border border-dark rounded'>
                    <Image
                        width={150}
                        preview={false}
                        src="https://firebasestorage.googleapis.com/v0/b/peckypet.appspot.com/o/public%2FLogo.PNG?alt=media&token=26078209-0e3a-4738-9d71-ae7f779f9bc8"
                    />
                    <Formik
                        initialValues={{
                            email: '',
                            password: ''
                        }}
                        onSubmit={submit}
                        validationSchema={validateSchema}
                    >
                        <Form
                            name="normal_login"
                            className="login-form"
                            style={{
                                maxWidth: '300px'
                            }}
                        >
                            <Form.Item
                                name="email"
                            >
                                <Input name='email' prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Correo" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                            >
                                <Input.Password
                                    name="password"
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>

                            <Form.Item name='sub'>
                                <Button type="primary" htmlType="submit" className="login-form-button"
                                    style={{
                                        width: '100%'
                                    }}
                                >
                                    Ingresar
                                </Button>
                                O  <a href="/signup">Registrate ahora!</a>
                            </Form.Item>
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