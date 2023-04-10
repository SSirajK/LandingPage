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
} from "antd";
import StyledLogin from "../login/StyledLogin";
import LoginImage from "../../assets/images/login.png";
import Logo from "../../assets/images/logo.svg";
import {
  validateEmail,
  validateIsRequired,
  validateName,
  validatePassword,
  validateUsername,
} from "../../utils/validation";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    emailError: "",
    password: "",
    passwordError: "",
    username: "",
    usernameError: "",
    name: "",
    nameError: "",
    remember: false,
  });

  const handleInputChange = (event) => {
    const { name, value, checked } = event.target;
    let error = "";

    if (name === "email") {
      error = validateEmail(value);
    } else if (name === "password") {
      error = validateIsRequired(value);
    } else if (name === "password") {
      error = validatePassword(value);
    } else if (name === "name") {
      error = validateName(value);
    } else if (name === "username") {
      error = validateUsername(value);
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
    let error = "";

    if (!values.remember) {
      error = "Please agree to the terms of use and privacy policy";
    }

    if (
      values.email &&
      values.password &&
      values.username &&
      values.name &&
      !error
    ) {
      navigate("/login");
    } else {
      alert(error || "Please fill in all required fields");
    }
  };

  return (
    <StyledLogin>
      <Row gutter={12} justify="center">
        <Col span={12} className="left">
          <Form layout="vertical" onSubmit={handleSubmit}>
            <div className="logo margin-b-3">
              <Image src={Logo} preview={false} />
              <Title level={3}>Signup</Title>
            </div>
            <Form.Item
              label="Full Name"
              validateStatus={values.nameError ? "error" : ""}
            >
              <Input
                placeholder="Enter Your Full Name"
                name="name"
                value={values.name}
                onChange={handleInputChange}
              />
              {values.nameError && (
                <p style={{ color: "red" }}>{values.nameError}</p>
              )}
            </Form.Item>
            <Form.Item
              label="Email Address"
              validateStatus={values.emailError ? "error" : ""}
            >
              <Input
                placeholder="Enter Your Email Address"
                name="email"
                value={values.email}
                onChange={handleInputChange}
              />
              {values.emailError && (
                <p style={{ color: "red" }}>{values.emailError}</p>
              )}
            </Form.Item>
            <Form.Item
              label="Username"
              validateStatus={values.usernameError ? "error" : ""}
            >
              <Input
                placeholder="Enter Your Username"
                name="username"
                value={values.username}
                onChange={handleInputChange}
              />
              {values.usernameError && (
                <p style={{ color: "red" }}>{values.usernameError}</p>
              )}
            </Form.Item>
            <Form.Item
              label="Password"
              validateStatus={values.passwordError ? "error" : ""}
            >
              <Input
                name="password"
                type="password"
                placeholder="Enter Password"
                value={values.password}
                onChange={handleInputChange}
              />
              {values.passwordError && (
                <p style={{ color: "red" }}>{values.passwordError}</p>
              )}
            </Form.Item>
            <Form.Item
              name="agreement"
              valuePropName="checked"
              className="margin-t-2"
            >
              <Checkbox
                name="agreement"
                checked={values.remember}
                onChange={handleInputChange}
              >
                By creating an account you agree to the{" "}
                <a href="#/">terms of use</a> and our{" "}
                <a href="#/">privacy policy</a>.
              </Checkbox>
            </Form.Item>
            <Form.Item className="margin-t-2">
              <Button
                className="primary"
                block
                size="large"
                htmlType="submit"
                onClick={handleSubmit}
              >
                Create Account
              </Button>
            </Form.Item>
            <div className="margin-t-2 text-center">
              Already have an account? <a href="#/">Log in</a>
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

export default Signup;
