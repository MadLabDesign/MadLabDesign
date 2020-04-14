import React, { FunctionComponent } from 'react';
import { ContactContainer } from './Contact.style';
import { Form } from 'antd';
import { InputField, InputTextField } from 'components/Forms/Inputs';
import { Buttons } from 'components/buttons/Button';
import PricingSlider from 'components/Forms/PricingSlider';

interface IContactProps { }

const Contact: FunctionComponent<IContactProps> = prop => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const validateMessages = {
    required: 'is required!',
    types: {
      email: 'not a validate email!',
      number: 'is not a validate number!',
    },
    number: {
      range: ' must be between ${min} and ${max}',
    },
  };
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <ContactContainer>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <div className="tabs is-centered">
          <ul>
            <li>WORK WITH US</li>
            <li>
              <a>CAREERS</a>
            </li>
            <li>
              <a>JUST SAY HI</a>
            </li>
          </ul>
        </div>
        <h1>Get in Touch</h1>
        <div className="columns is-desktop">
          <div className="column">
            <Form.Item name={['user', 'name']} rules={[{ required: true }]}>
              <InputField placeholder="Name" />
            </Form.Item>
          </div>
          <div className="column">
            <Form.Item name={['user', 'title']}>
              <InputField placeholder="Title" />
            </Form.Item>
          </div>
          <div className="column">
            <Form.Item name={['user', 'company']}>
              <InputField placeholder="Company" />
            </Form.Item>
          </div>
        </div>

        <div className="columns is-desktop">
          <div className="column">
            <Form.Item name={['user', 'email']} rules={[{ type: 'email' }]}>
              <InputField placeholder="Email" />
            </Form.Item>
          </div>
          <div className="column">
            <Form.Item name={['user', 'website']}>
              <InputField placeholder="Website" />
            </Form.Item>
          </div>
          <div className="column">
            <Form.Item name={['user', 'date']}>
              <InputField placeholder="Desired Start date" />
            </Form.Item>
          </div>
        </div>
        <PricingSlider />
        <Form.Item name={['user', 'introduction']}>
          <InputTextField placeholder="Project Details" />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Buttons htmlType="submit">Submit</Buttons>
        </Form.Item>
      </Form>
    </ContactContainer>
  );
};

export default Contact;
