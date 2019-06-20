import React, { useEffect, useState } from "react";
import { loadClubs } from "../../redux/actions/clubsActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import FilterBar from "../common/FilterBar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


//import { Link } from "react-router-dom";
import "./HomePage.css";
import ClubCard from "../common/ClubCard";

const HomePage = ({ clubs, loadClubs }) => {

  const [searchFilter, setSearchFilter] = useState("");
  const [distanceFilter, setDistanceFilter] = useState("");
  const [clubTypeFilter, setclubTypeFilter] = useState("");

  useEffect(() => {
    if (clubs.length === 0) {
      loadClubs().catch(error => {
        alert("Loading clubs failed" + error);
      });
    }
  }, []);

  const handleFilterChange = (e) => {
    // console.log(event.target);
    switch (e.target.getAttribute("id")) {
      case "search-filter":
        setSearchFilter(e.target.value);
        break;
      case "distance-filter":
        setDistanceFilter(e.target.value);
        break;
      case "club-type-filter":
        setclubTypeFilter(e.target.value);
        break;
      default:
        return false;
    }
  };

  const handleFilterSubmit = () => {
    console.log("SEARCH TERMS: \n" + searchFilter + "\n" + distanceFilter + "\n" + clubTypeFilter);
  };

  return (
    < main >
      <FilterBar
        searchFilter={searchFilter}
        distanceFilter={distanceFilter}
        clubTypeFilter={clubTypeFilter}
        handleFilterChange={handleFilterChange}
        handleFilterSubmit={handleFilterSubmit}
      />
      <Container>
        <Row>
          {clubs.map(club => {
            return (
              <Col xs={12} s={4} md={3} key={club.id}><ClubCard club={club} /></Col>
            );
          })}
        </Row>
      </Container>
    </main >
  );
};

HomePage.propTypes = {
  clubs: PropTypes.array.isRequired,
  loadClubs: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    clubs:
      state.clubs.map(clubs => {
        return {
          ...clubs
        };
      }),
    loading: state.apiCallsInProgress > 0
  };
};

const mapDispatchToProps = {
  loadClubs
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
