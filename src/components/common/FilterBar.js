import React from "react";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Calendar from "../common/Calendar";
import "./FilterBar.css";

const FilterBar = () => {
    return (
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
                <DropdownButton id="dropdown-club-type" title="Club Type" variant="light">
                    <Dropdown.Item href="#">Full Sets</Dropdown.Item>
                    <Dropdown.Item href="#">Drivers</Dropdown.Item>
                    <Dropdown.Item href="#">Fairway Woods</Dropdown.Item>
                    <Dropdown.Item href="#">Hybrids</Dropdown.Item>
                    <Dropdown.Item href="#">Irons</Dropdown.Item>
                    <Dropdown.Item href="#">Wedges</Dropdown.Item>
                    <Dropdown.Item href="#">Putters</Dropdown.Item>
                </DropdownButton>
                <Calendar />
            </div>
        </div>
    );
};

export default FilterBar;