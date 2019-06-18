import React, { useEffect } from "react";
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

  useEffect(() => {
    if (clubs.length === 0) {
      loadClubs().catch(error => {
        alert("Loading clubs failed" + error);
      });
    }
  }, []);

  return (
    < main >
      <FilterBar />
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

export function getClubsBySlug(clubs, slug) {
  return clubs.find(clubs => clubs.slug === slug) || null;
}

function mapStateToProps(state) {
  return {
    clubs:
      state.clubs.map(clubs => {
        return {
          ...clubs
        };
      }),
    loading: state.apiCallsInProgress > 0
  };
}

const mapDispatchToProps = {
  loadClubs
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
