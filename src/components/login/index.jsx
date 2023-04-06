import React from 'react'
import { Col, Row, Image, Button, Form, Input, Typography, Checkbox, Divider } from 'antd'
import StyledLogin from './StyledLogin'
import LoginImage from '../../assets/login.png'
import Logo from '../../assets/logo.svg'

const { Title } = Typography

function Login() {
  return (
    <StyledLogin>
      <Row gutter={12} justify='center'>
        <Col span={12} className='left'>
          <Form layout='vertical'>
            <div className='logo margin-b-5'>
              <Image src={Logo} preview={false} />
              <Title level={3}>Log in</Title>
            </div>
            <Form.Item label='Email Address'>
              <Input placeholder='example@gmail.com' />
            </Form.Item>
            <Form.Item label='Password'>
              <Input placeholder='input placeholder' type='password' />
            </Form.Item>
            <Form.Item>
              <Form.Item name='remember' valuePropName='checked' noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className='login-form-forgot pull-right' href='#/'>
                Forgot password
              </a>
            </Form.Item>
            <Form.Item className='margin-t-2'>
              <Button className='primary' block size='large'>
                Log in
              </Button>
            </Form.Item>
            <div className='margin-t-2 text-center'>
              <a href='#/'>Login with SSO</a>
            </div>
            <div className='margin-t-2 text-center'>
              <Divider />
              Don’t have account yet? <a href='#/'>New Account</a>
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

export default Login
