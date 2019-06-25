import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Calendar from "../common/Calendar";
import "./FilterBar.css";

const FilterBar = ({
    searchFilter,
    distanceFilter,
    clubTypeFilter,
    dateFilter,
    handleFilterChange,
    handleFilterSubmit
}) => {
    return (
        <div className="top-filter">
            <div className="top-filter-inner">
                <Form>
                    <Form.Group controlId="search-filter" className="mar-0">
                        <Form.Control
                            type="text"
                            placeholder="Search by course, address, etc."
                            aria-label="Search"
                            value={searchFilter}
                            onChange={handleFilterChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="distance-filter">
                        <Form.Label>Distance (km)</Form.Label>
                        <Form.Control
                            as="select"
                            value={distanceFilter}
                            onChange={handleFilterChange}
                        >
                            <option value="">Select...</option>
                            <option value="1">1</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="club-type-filter">
                        <Form.Label>Club Type</Form.Label>
                        <Form.Control
                            as="select"
                            value={clubTypeFilter}
                            onChange={handleFilterChange}
                        >
                            <option value="">Select...</option>
                            <option value="fullSet">Full Sets</option>
                            <option value="driver">Drivers</option>
                            <option value="fairwayWoods">Fairway Woods</option>
                            <option value="hybrids">Hybrids</option>
                            <option value="irons">Irons</option>
                            <option value="wedges">Wedges</option>
                            <option value="putter">Putters</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <div className="cal-wpr">
                    <Calendar
                        dateFilter={dateFilter}
                        handleFilterChange={handleFilterChange}
                    />
                </div>
                <Button className="search-btn" variant="primary" onClick={handleFilterSubmit}>Search</Button>
            </div>
        </div>
    );
};

FilterBar.propTypes = {
    searchFilter: PropTypes.string.isRequired,
    distanceFilter: PropTypes.string.isRequired,
    clubTypeFilter: PropTypes.string.isRequired,
    dateFilter: PropTypes.string.isRequired,
    handleFilterChange: PropTypes.func.isRequired,
    handleFilterSubmit: PropTypes.func.isRequired
};

export default FilterBar;