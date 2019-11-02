import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Form, Col } from "react-bootstrap";
import { authenticateUser } from "../../redux/actions/authenticateUserActions";
import PropTypes from "prop-types";
import "./ProfilePage.css";
import { toast } from "react-toastify";

const ProfilePage = ({ authenticateUser, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    authenticateUser({ username: email, password: password })
      .then(() => {
        toast.success("Log in successful");
        history.push("/");
      })
      .catch(error => {
        alert("User authentication failed: " + error);
      });
  }

  return (
    <div className="profile">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Row>
          <Col>
            <Form.Group controlId="birthDay">
              <Form.Label>Day</Form.Label>
              <Form.Control
                as="select"
                value={birthDay}
                onChange={e => setBirthDate(e.target.id, e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="birthMonth">
              <Form.Label>Month</Form.Label>
              <Form.Control
                as="select"
                value={birthMonth}
                onChange={e => setBirthDate(e.target.id, e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="birthYear">
              <Form.Label>Year</Form.Label>
              <Form.Control
                as="select"
                value={birthYear}
                onChange={e => setBirthDate(e.target.id, e.target.value)}
              />
            </Form.Group>
          </Col>
        </Form.Row>


        <Button disabled={!validateForm()} type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

ProfilePage.propTypes = {
  authenticateUser: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

const mapDispatchToProps = {
  authenticateUser
};

export default connect(
  null,
  mapDispatchToProps
)(ProfilePage);