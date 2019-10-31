import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { authenticateUser } from "../../redux/actions/authenticateUserActions";
import PropTypes from "prop-types";
import "./LoginPage.css";

const LoginPage = ({ authenticateUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    authenticateUser({ username: email, password: password }).catch(error => {
      alert("User authentication failed: " + error);
    });
  }

  return (
    <div className="login">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </Form.Group>
        <Button disabled={!validateForm()} type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

LoginPage.propTypes = {
  authenticateUser: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  authenticateUser
};

export default connect(
  null,
  mapDispatchToProps
)(LoginPage);