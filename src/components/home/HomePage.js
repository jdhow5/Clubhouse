import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";

//import { Link } from "react-router-dom";
import "./HomePage.css";
import ClubCard from "../common/ClubCard";

const HomePage = () => (
  <main>
    <div className="top-filter">
      <div className="top-filter-inner">
        <Form className="w-33">
          <Form.Group className="mar-0" controlId="formBasicSearch">
            <Form.Control type="text" placeholder="Search by course, address, etc." aria-label="Search" />
          </Form.Group>
        </Form>
        <Button className="mar-l-hlf" variant="primary">Search</Button>
        <DropdownButton id="dropdown-distance" title="Distance (km)" variant="light">
          <Dropdown.Item href="#">1</Dropdown.Item>
          <Dropdown.Item href="#">5</Dropdown.Item>
          <Dropdown.Item href="#">10</Dropdown.Item>
          <Dropdown.Item href="#">25</Dropdown.Item>
          <Dropdown.Item href="#">50</Dropdown.Item>
        </DropdownButton>
        {/* <ButtonToolbar>
          <OverlayTrigger
            trigger="click"
            key='bottom'
            placement='bottom'
            overlay={
              <Popover
                id='popover-positioned-bottom'
                title='Popover Bottom'
              >
                <Form>
                  <Form.Group controlId="formBasicText">
                    <Form.Label>Distance (km)</Form.Label>
                    <Form.Control type="number" placeholder="Eg. 5" />
                    <Form.Text className="text-muted">

                    </Form.Text>
                  </Form.Group>
                </Form>
              </Popover>
            }
          >
            <Button variant="light">Location</Button>
          </OverlayTrigger>
        </ButtonToolbar> */}
        <DropdownButton id="dropdown-club-type" title="Club Type" variant="light">
          <Dropdown.Item href="#">Full Sets</Dropdown.Item>
          <Dropdown.Item href="#">Drivers</Dropdown.Item>
          <Dropdown.Item href="#">Fairway Woods</Dropdown.Item>
          <Dropdown.Item href="#">Hybrids</Dropdown.Item>
          <Dropdown.Item href="#">Irons</Dropdown.Item>
          <Dropdown.Item href="#">Wedges</Dropdown.Item>
          <Dropdown.Item href="#">Putters</Dropdown.Item>
        </DropdownButton>
        <DatePicker />
      </div>
    </div>
    <Container>
      <Row>
        <Col><ClubCard /></Col>
        <Col><ClubCard /></Col>
        <Col><ClubCard /></Col>
        <Col><ClubCard /></Col>
      </Row>
      <Row>
        <Col><ClubCard /></Col>
        <Col><ClubCard /></Col>
        <Col><ClubCard /></Col>
        <Col><ClubCard /></Col>
      </Row>
    </Container>
  </main>
);

export default HomePage;
