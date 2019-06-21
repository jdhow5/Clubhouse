import React, { useEffect, useState } from "react";
import { loadClubs } from "../../redux/actions/clubsActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import FilterBar from "../common/FilterBar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Spinner from "../common/Spinner";


//import { Link } from "react-router-dom";
import "./HomePage.css";
import ClubCard from "../common/ClubCard";

const HomePage = ({ clubs, loadClubs, loading }) => {

  const [filteredClubs, setFilteredClubs] = useState([...clubs]);
  const [searchFilter, setSearchFilter] = useState("");
  const [distanceFilter, setDistanceFilter] = useState("");
  const [clubTypeFilter, setclubTypeFilter] = useState("");

  useEffect(() => {
    if (clubs.length === 0) {
      loadClubs().catch(error => {
        alert("Loading clubs failed" + error);
      });
    }
    else { setFilteredClubs([...clubs]); }
  }, [clubs.length]);

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
    if(clubTypeFilter !== ""){
      setFilteredClubs([...clubs].filter(clubType => 
        clubType[clubTypeFilter].length ||
        !isEmpty(clubType[clubTypeFilter])
      ));
    }
    else { setFilteredClubs([...clubs]); }
    console.log("SEARCH TERMS: \n" + searchFilter + "\n" + distanceFilter + "\n" + clubTypeFilter);
  };

  // const fullSetAvailable = (obj) => {
  //   for(let key in obj) {
  //     if(obj.hasOwnProperty(key))
  //       return false;
  //   }
  //   return true;
  // };

  const isEmpty = (obj) => {
    for(let key in obj) {
      if(obj.hasOwnProperty(key))
        return false;
    }
    return true;
  };

  return (
    loading ? <Spinner /> : 
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
          {filteredClubs.map(club => {
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
