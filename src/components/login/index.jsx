import React, { useState } from "react";
import {
  Col,
  Row,
  Image,
  Button,
  Form,
  Input,
  Typography,
  Checkbox,
  Divider,
} from "antd";
import StyledLogin from "./StyledLogin";
import LoginImage from "../../assets/images/login.png";
import Logo from "../../assets/images/logo.svg";
import { validateEmail, validateIsRequired, validatePassword } from "../../utils/validation";
import { useNavigate } from "react-router-dom";
import QuickacePage from "pages/Quickace";
const { Title } = Typography;

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    emailError: "",
    password: "",
    passwordError: "",
    remember: false,
  });

  const handleInputChange = (event) => {
    const { name, value, checked } = event.target;
    let error = "";

    if (name === "email") {
      error = validateEmail(value);
    } else if (name === "password") {
      error = validateIsRequired(value);
    }

    setValues({
      ...values,
      [name]: value,
      [`${name}Error`]: error,
      remember: checked || values.remember,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.email && values.password){
      navigate("/dashboard")
    }
  };

  return (
    <StyledLogin>
      <Row gutter={12} justify="center">
        <Col span={12} className="left">
          <Form layout="vertical" onSubmit={handleSubmit}>
            <div className="logo margin-b-5">
              <Image src={Logo} preview={false} />
              <Title level={3}>Log in</Title>
            </div>
            <Form.Item
              label="Email Address"
              validateStatus={values.emailError ? "error" : ""}
            >
              <Input
                name="email"
                placeholder="Enter Your Email Address"
                value={values.email}
                onChange={handleInputChange}
              />
              {values.emailError && (
                <p style={{ color: "red" }}>{values.emailError}</p>
              )}
            </Form.Item>

            <Form.Item
              label="Password"
              validateStatus={values.passwordError ? "error" : ""}
            >
              <Input
                name="password"
                type="password"
                placeholder="Enter Your Password"
                value={values.password}
                onChange={handleInputChange}
              />
              {values.passwordError && (
                <p style={{ color: "red" }}>{values.passwordError}</p>
              )}
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox
                  name="remember"
                  checked={values.remember}
                  onChange={handleInputChange}
                >
                  Remember me
                </Checkbox>
              </Form.Item>

              <a className="login-form-forgot pull-right" href="#/">
                Forgot password
              </a>
            </Form.Item>
            <Form.Item className="margin-t-2">
              <Button
                className="primary"
                block
                size="large"
                // disabled={values.emailError || values.passwordError}
                htmlType="submit"
                onClick={handleSubmit}
              >
                Log in
              </Button>
            </Form.Item>
            {/* <div className="margin-t-2 text-center">
              <a href="/">Login with SSO</a>
            </div> */}
            <div className="margin-t-2 text-center">
              <Divider />
              Don’t have account yet? <a href="/signup">New Account</a>
            </div>
          </Form>
        </Col>
        <Col span={12} className="right">
          <Image className="Login-image" src={LoginImage} preview={false} />
        </Col>
      </Row>
    </StyledLogin>
  );
}

export default Login;
