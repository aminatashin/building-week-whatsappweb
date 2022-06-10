import React, { useState, useEffect } from "react";
import "./log.css";
import { Button, Form, Container, Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
// ===================================================================
const initLog = {
  email: "",
  password: "",
};
const Log = () => {
  const navigate = useNavigate();
  const [log, setLog] = useState(initLog);

  useEffect(() => {
    if (localStorage.getItem("jwtToken")) {
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchGet();
  };
  //   =============GET===========================

  const fetchGet = async () => {
    const res = await fetch("http://localhost:3004/user/login", {
      method: "POST",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      let data = await res.json();

      localStorage.setItem("jwtToken", data.token);
      alert(`WellCome :D`);
      navigate("/chatpage");
    } else {
      alert("wrong username or password ");
    }

    setLog(initLog);
  };

  // ===============================================

  return (
    <>
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
                    onChange={(e) =>
                      setLog((log) => ({ ...log, email: e.target.value }))
                    }
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    className="form-input"
                    type="password"
                    placeholder="Password"
                    value={log.password}
                    onChange={(e) =>
                      setLog((log) => ({ ...log, password: e.target.value }))
                    }
                  />
                </Form.Group>

                <Button
                  className="login_button"
                  variant="primary"
                  type="submit"
                >
                  Log In
                </Button>
                <Link to="/signup">
                  <Button
                    className="button-sign"
                    variant="warning"
                    type="submit"
                  >
                    Do'not have an account? Sign up
                  </Button>
                </Link>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Log;
