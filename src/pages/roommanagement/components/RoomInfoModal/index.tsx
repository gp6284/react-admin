import { FC, useState } from 'react';
import './index.less';
import { Modal, Button } from 'antd';

const RoomInfoModal: FC<any> = (props: any) => {
  const { record } = props as any;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCancel = (e:any) => {
    e.stopPropagation()
    setIsModalVisible(false);
  };

  const checkBox = () => {
    setIsModalVisible(true);
  };

  return (
    <Button onClick={() => checkBox()} type="primary">
      查看盲盒
      <Modal title="盲盒信息" visible={isModalVisible} destroyOnClose footer={null} onCancel={handleCancel}>
        <div className="modal-row">
          <div>房间名称</div>
          <div>{record.firstName}</div>
        </div>
        <div className="modal-row">
          <div>盲盒种类</div>
          <div>{record.firstName}</div>
        </div>
        <div className="modal-row">
          <div>玩法</div>
          <div>{record.firstName}</div>
        </div>
        <div className="modal-row">
          <div>币种</div>
          <div>{record.firstName}</div>
        </div>
        <div className="modal-row">
          <div>价格</div>
          <div>{record.firstName}</div>
        </div>
        <div className="modal-row">
          <div>手续费</div>
          <div>{record.firstName}</div>
        </div>
        <div className="modal-row">
          <div>持续时间</div>
          <div>{record.firstName}</div>
        </div>
        <div className="modal-row">
          <div>盲盒状态</div>
          <div>{record.firstName}</div>
        </div>
      </Modal>
    </Button>
  );
};

export default RoomInfoModal;
