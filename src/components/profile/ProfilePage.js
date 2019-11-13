import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Form, Col } from "react-bootstrap";
import { authenticateUser } from "../../redux/actions/authenticateUserActions";
import Calendar from "../common/Calendar";
import PropTypes from "prop-types";
import "./ProfilePage.css";
import { toast } from "react-toastify";

const ProfilePage = ({ authenticateUser, history }) => {
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("Test");
  const [lastName, setLastName] = useState("Name");
  const [birthDay, setBirthDay] = useState("5");
  const [birthMonth, setBirthMonth] = useState("05");
  const [birthYear, setBirthYear] = useState("1993");
  const [address, setAddress] = useState("132 Streeter Ave");
  const [unitNum, setUnitNum] = useState("");
  const [postalCode, setPostalCode] = useState("C0B 1M0");
  const [editProfile, setEditProfile] = useState(false);

  const formIsValid = () => {
    return false;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const updateBirthday = () => {

  }

  return (
    <div className="profile">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="firstName" >
          <Form.Label>First Name</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            readOnly={!editProfile}
            plaintext={!editProfile}
          />
        </Form.Group>
        <Form.Group controlId="lastName" >
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            readOnly={!editProfile}
            plaintext={!editProfile}
          />
        </Form.Group>
        <Form.Group controlId="email" >
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            readOnly={!editProfile}
            plaintext={!editProfile}
          />
        </Form.Group>

        <Form.Group controlId="address" >
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            value={address}
            onChange={e => setAddress(e.target.value)}
            readOnly={!editProfile}
            plaintext={!editProfile}
          />
        </Form.Group>
        <Form.Group controlId="unitNum">
          <Form.Label>Unit Number</Form.Label>
          <Form.Control
            type="text"
            value={unitNum}
            onChange={e => setUnitNum(e.target.value)}
            readOnly={!editProfile}
            plaintext={!editProfile}
          />
        </Form.Group>
        <Form.Group controlId="birthdate">
          <Form.Label>Birthday</Form.Label>
          <Calendar
            dateFilter={new Date()}
            handleFilterChange={updateBirthday}
          />
        </Form.Group>
        <Form.Group controlId="postalCode">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type="text"
            value={postalCode}
            onChange={e => setPostalCode(e.target.value)}
            readOnly={!editProfile}
            plaintext={!editProfile}
          />
        </Form.Group>


        <Button hidden={!editProfile} disabled={formIsValid()} type="submit" onClick={() => setEditProfile(false)}>
          Save
        </Button>
        <Button onClick={() => setEditProfile(true)} hidden={editProfile}>
          Edit
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