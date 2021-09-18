import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.less';
import { Table, Space, Button } from 'antd';
import RoomInfoModal from './components/RoomInfoModal';
interface TableData {
  key: number;
  firstName: string;
  lastName: string;
  age: number;
  address: string;
  tags: string[];
}
const { Column } = Table;

const RooMManagement: FC = () => {
  let navigate = useNavigate();
  const data: TableData[] = [];
  for (let index = 0; index < 100; index++) {
    data.push({
      key: index,
      firstName: 'John',
      lastName: 'Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer']
    });
  }
  const toNewRoomFromPage = () => {
    navigate('/newroom');
  };

  return (
    <div className="container">
      <div className="head">
        <Button type="primary" onClick={toNewRoomFromPage}>
          新建房间
        </Button>
      </div>
      <Table className="room-table" dataSource={data}>
        <Column title="房间名称" dataIndex="firstName" key="firstName" />
        <Column title="卖出盲盒个数" dataIndex="lastName" key="lastName" />
        <Column title="开奖次数" dataIndex="age" key="age" />
        <Column title="手续费收入" dataIndex="address" key="address" />
        <Column title="卖出盲盒收入" dataIndex="address" key="address" />
        <Column title="已奖励币种数量" dataIndex="address" key="address" />
        <Column
          title="操作"
          key="action"
          render={(text, record: any) => (
            <Space size="middle">
              <RoomInfoModal record={record} />
              <Button type="primary">停止盲盒</Button>
              <Button danger> 删除盲盒</Button>
            </Space>
          )}
        />
      </Table>
    </div>
  );
};

export default RooMManagement;
