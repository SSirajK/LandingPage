import React from 'react';
import { Col, Row, Image, Button, Form, Input, Typography, Checkbox } from 'antd';
import StyledLogin from '../login/StyledLogin';
import LoginImage from '../../assets/images/login.png';
import Logo from '../../assets/images/logo.svg';
import { validateEmail, validateIsRequired, validateName, validatePassword } from '../../utils/validation';

const { Title } = Typography

function Signup() {
  const [form] = Form.useForm()

  const onFinish = (values) => {
    console.log(values)
  }

  return (
    <StyledLogin>
      <Row gutter={12} justify='center'>
        <Col span={12} className='left'>
          <Form layout='vertical' form={form} onFinish={onFinish}>
            <div className='logo margin-b-3'>
              <Image src={Logo} preview={false} />
              <Title level={3}>Signup</Title>
            </div>
            <Form.Item label='Full Name' name='name' rules={[{ validator: validateName }]}>
              <Input placeholder='Enter Your Full Name' />
            </Form.Item>
            <Form.Item label='Email Address' name='email' rules={[{ validator: validateEmail }]}>
              <Input placeholder='Enter Your Email Address' />
            </Form.Item>
            <Form.Item label='Username' name='username' rules={[{ validator: validateIsRequired }]}>
              <Input placeholder='Enter Your Username' />
            </Form.Item>
            <Form.Item
              label='Password'
              name='password'
              rules={[
                { validator: (rule, value, callback) => validatePassword(value, 'minlength', 6) },
                { validator: (rule, value, callback) => validatePassword(value, 'maxlength', 16) },
              ]}
            >
              <Input placeholder='Enter Your Password' type='password' />
            </Form.Item>
            <Form.Item name='agreement' valuePropName='checked' className='margin-t-2'>
              <Checkbox>
                By creating an account you agree to the <a href='#/'>terms of use</a> and our{' '}
                <a href='#/'>privacy policy</a>.
              </Checkbox>
            </Form.Item>
            <Form.Item className='margin-t-2'>
              <Button className='primary' block size='large' htmlType='submit'>
                Create Account
              </Button>
            </Form.Item>
            <div className='margin-t-2 text-center'>
              Already have an account? <a href='#/'>Log in</a>
            </div>
          </Form>
        </Col>
        <Col span={12} className='right'>
          <Image className='Login-image' src={LoginImage} preview={false} />
        </Col>
      </Row>
    </StyledLogin>
  )
}

export default Signup
