import React, { FunctionComponent } from 'react';
import styled from 'styled-components/macro'
import { Form } from 'antd';
import { InputField, InputTextField } from 'components/Forms/Inputs';
import { Buttons } from 'components/buttons/Button';
import PricingSlider from 'components/Forms/PricingSlider';
import { Colors } from 'lib/theme/Colors';



interface Props { }

const CareerForm: FunctionComponent<Props> = prop => {
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const validateMessages = {
        required: 'Required!',
        types: {
            email: 'Not a validate email!',
            number: 'is not a validate number!',
        },
        number: {
            range: 'must be between ${min} and ${max}',
        },
    };
    const onFinish = (values: any) => {
        console.log(values);
    };
    return (

        <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
        >

            <Title>Get in Touch</Title>
            <div className="columns is-desktop">
                <div className="column">
                    <Form.Item name={['user', 'name']} rules={[{ required: true }]}>
                        <InputField placeholder="NAME" />
                    </Form.Item>
                </div>
                <div className="column">
                    <Form.Item name={['user', 'title']}>
                        <InputField placeholder="TITLE" />
                    </Form.Item>
                </div>
                <div className="column">
                    <Form.Item name={['user', 'company']}>
                        <InputField placeholder="COMPANY" />
                    </Form.Item>
                </div>
            </div>

            <div className="columns is-desktop">
                <div className="column">
                    <Form.Item name={['user', 'email']} rules={[{ type: 'email' }]}>
                        <InputField placeholder="EMAIL" />
                    </Form.Item>
                </div>
                <div className="column">
                    <Form.Item name={['user', 'website']}>
                        <InputField placeholder="WEBSITE" />
                    </Form.Item>
                </div>
                <div className="column">
                    <Form.Item name={['user', 'date']}>
                        <InputField placeholder="DESIRED START DATE" />
                    </Form.Item>
                </div>
            </div>
            <PricingSlider />
            <Form.Item name={['user', 'introduction']}>
                <InputTextField placeholder="PROJECT DETAILS" />
            </Form.Item>
            <Form.Item>
                <Buttons htmlType="submit">Submit</Buttons>
            </Form.Item>
        </Form>

    );
};

export default CareerForm;

const Title = styled.h2`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-size: 40px;
    color: ${Colors.white};
    font-family: 'metropolis-bold';
`