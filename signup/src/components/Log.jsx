import React, { useState } from "react";
import "./log.css";
import { Button, Form, Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
// ===================================================================
const Log = () => {
  const [log, setLog] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.pereventDefault();
    fetchGet();
    setLog("");
  };
  //   =============GET===========================

  const fetchGet = async () => {
    const res = await fetch("http://localhost3004/user/login");
    if (res.ok) {
      const data = await res.json();
      setLog(data);
    }
  };

  // ===============================================
  return (
    <div className="container">
      <Container className="login">
        <Row>
          <Col md={6} className=" my-5">
            <Form className="form" onSubmit={handleSubmit}>
              <h4 className="log-text">LogIn</h4>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  className="form-input"
                  type="email"
                  placeholder="Enter email"
                  value={log.email}
                  onChange={(e) => setLog({ email: e.target.value })}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className="form-input"
                  type="password"
                  placeholder="Password"
                  value={log.password}
                  onChange={(e) => setLog({ password: e.target.value })}
                />
              </Form.Group>

              <Button className="login_button" variant="primary" type="submit">
                Log In
              </Button>
              <Link to="/signup">
                <Button className="button-sign" variant="warning" type="submit">
                  Do'not have an account? Sign up
                </Button>
              </Link>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Log;
