import { Layout, Menu, Button, Dropdown } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";

const { Header } = Layout;
const HeaderApp = () => {
  const menu = (
    <Menu>
      <Menu.Item>
        <a rel="noopener noreferrer" onClick={()=>{
          sessionStorage.clear();
          window.location.href = '/signin'
        }}>Cerrar sesión</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="Header" >
      <Header className="p-0" style={{
        background: 'rgb(50,191,208)'
      }} >
        <div className="mx-3 float-end">
          <Dropdown overlay={menu} placement="bottomRight">
            <FontAwesomeIcon
              className="mt-2"
              icon={faUserCircle}
              size="3x"
              key="profile"
              color="white"
            />
          </Dropdown>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          onSelect={(e) => {
            if (e.key == "my_post")
              window.location.pathname = "/dashboard/posts";
            if(e.key == "adopt")
              window.location.pathname = "/dashboard/index";
          }}
          className="p-0"
          style={{
            background: 'rgb(50,191,208)'
          }}
        >
          <Menu.Item className='text-dark' key="adopt">Adoptar</Menu.Item>
          <Menu.Item className='text-dark' key="my_post">Mis publicaciones</Menu.Item>
          {/* <Menu.Item className='text-dark' key="my_interests">Mis intereses</Menu.Item> */}
        </Menu>
      </Header>
    </div>
  );
};

export default HeaderApp;
