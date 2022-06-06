import React, { useState, useEffect } from "react";
import { Button, Form, Container, Col, Row } from "react-bootstrap";
// import axios from "axios";
import "./signup.css";
// ====================================================================
const Signup = () => {
  const [sign, setSign] = useState({
    firstname: "",
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPost();
    // const registered = {
    //   firstname: sign.firstname,
    //   username: sign.username,
    //   email: sign.email,
    //   password: sign.password,
    // };
    // axios
    //   .post("http//:localhost:3004/user/login", registered)
    //   .then((response) => console.log(response.data));
    setSign("");
  };
  //   ===================POST==================================
  const fetchPost = async () => {
    const response = await fetch("http://localhost:3004/user/signup", {
      method: "POST",
      body: JSON.stringify(sign),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (response.ok) {
      alert("signed succsessfullu");
    } else {
      console.log("error");
      alert("something went wrong");
    }
  };
  //   ===============================================================
  return (
    <div className="container">
      <Container className="signup">
        <Row>
          <Col md={10}>
            <Form className="form-sign" onSubmit={handleSubmit}>
              <p className="signup-text">Sign Up!</p>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>FirstName</Form.Label>
                <Form.Control
                  className="sign-input"
                  type="text"
                  placeholder="first name"
                  value={sign.firstname}
                  onChange={(e) => setSign({ firstname: e.target.value })}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  className="sign-input"
                  type="text"
                  placeholder="username"
                  value={sign.username}
                  onChange={(e) => setSign({ username: e.target.value })}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  className="sign-input"
                  type="email"
                  placeholder="Enter email"
                  value={sign.email}
                  onChange={(e) => setSign({ email: e.target.value })}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className="sign-input"
                  type="password"
                  placeholder="Password"
                  value={sign.password}
                  onChange={(e) => setSign({ password: e.target.value })}
                />
              </Form.Group>

              <Button className="sign_button " variant="primary" type="submit">
                Sign Up
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Signup;
