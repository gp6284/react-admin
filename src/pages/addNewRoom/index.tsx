import { FC, useState } from 'react';
import { Form, Input, InputNumber, Button, Select, Card } from 'antd';
import './index.less';

const { Option } = Select;
/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!'
  },
  number: {
    range: '${label} must be between ${min} and ${max}'
  }
};
/* eslint-enable no-template-curly-in-string */

const AddNewRoom: FC = () => {
  const onFinish = (values: any) => {
    console.log(values);
  };
  const [coinType, setCoinType] = useState('PANDORA');
  const [boxType, setBoxType] = useState('type1');
  const ChangeCoinType = (type: string) => {
    setCoinType(type);
  };
  const ChangeBoxType = (type: string) => {
    setBoxType(type);
  };
  return (
    <div className="container">
      <Card>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item name={['room', 'name']} label="房间名称">
            <Input />
          </Form.Item>
          <Form.Item name={['room', 'boxType']} label="盲盒种类">
            <Select placeholder="请设置盲盒种类" value={boxType} onChange={ChangeBoxType}>
              <Option value="typ1">七龙珠</Option>
              <Option value="typ2">十二生肖</Option>
              <Option value="typ3">十二星座</Option>
            </Select>
          </Form.Item>
          <Form.Item name={['room', 'gameType']} label="玩法设置">
            <InputNumber />
          </Form.Item>
          <Form.Item name={['room', 'website']} label="中奖设置">
            <Input />
          </Form.Item>
          <Form.Item name={['room', 'rewardCoinType']} label="奖励币种">
            <Select placeholder="请设置购买币种" value={coinType} onChange={ChangeCoinType}>
              <Option value="PANDORA">PANDORA</Option>
              <Option value="USDT">USDT</Option>
            </Select>
          </Form.Item>
          <Form.Item name={['room', 'rewardTotal']} label="奖励数量">
            <InputNumber />
          </Form.Item>
          <Form.Item name={['room', 'buyCoinType']} label="设置购买币种">
            <Select placeholder="请设置购买币种" value={coinType} onChange={ChangeCoinType}>
              <Option value="PANDORA">PANDORA</Option>
              <Option value="USDT">USDT</Option>
            </Select>
          </Form.Item>
          <Form.Item name={['room', 'boxPrice']} label="设置盲盒价格">
            <InputNumber />
          </Form.Item>
          <Form.Item name={['room', 'poundage']} label="设置购买手续费">
            <InputNumber />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8 }}>
            <Button type="primary" htmlType="submit">
              创建
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default AddNewRoom;
