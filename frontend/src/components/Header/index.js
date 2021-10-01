import { Layout, Menu,Button, Dropdown} from 'antd';
import {UserOutlined} from '@ant-design/icons';
const { Header} = Layout;
const HeaderApp = () =>{
    
    const menu = (
        <Menu>
          <Menu.Item>
            <a rel="noopener noreferrer" href="/signin">
              Cerrar sesión
            </a>
          </Menu.Item>
        </Menu>
      );

    return (
        <div className='Header'>
        <Header>
            <div style={{
                'float': 'left',
                'background': 'rgba(255, 255, 255, 0.3)',
            }}> 
                <Dropdown overlay={menu} placement="bottomRight">
                    <UserOutlined style={{
                        'width':'60px'
                    }}/>
                </Dropdown>
            </div>
            <Menu theme="dark" mode="horizontal">
                <Menu.Item>
                    Adoptar
                </Menu.Item>
                <Menu.Item>
                    Mis publicaciones
                </Menu.Item>
                <Menu.Item  >
                    Mis intereses
                </Menu.Item>
            </Menu>
        </Header>
        </div>
    );
}

export default HeaderApp;