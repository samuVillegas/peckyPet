import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined,UserOutlined} from '@ant-design/icons';

const { Meta } = Card;

const AnimalCard = () =>{
    return (
        <Card
            style={{ width: 200 }}
            className='m-1'
            cover={
            <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
            }
            actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
            ]}
        >
        <Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title="Card title"
            description="This is the description"
        />
        </Card>
    );
}

export default AnimalCard;