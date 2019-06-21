import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadClubs } from "../../redux/actions/clubsActions";
import PropTypes from "prop-types";
import { newClubSet } from "../../../tools/mockData";
import Spinner from "../common/Spinner";

const ClubSetPage = ({
    clubs,
    loadClubs,
    ...props
}) => {
    const [clubSet, setClubSet] = useState({ ...props.clubSet });

    useEffect(() => {
        if (clubs.length === 0) {
            loadClubs().catch(error => {
                alert("Loading clubs failed" + error);
            });
        } else {
            setClubSet({ ...props.clubSet });
        }
    }, [props.clubSet]);

    return clubs.length === 0 ? (
        <Spinner />
    ) : (
            <div>
                <p>Driver: {clubSet.driver.brand + " " + clubSet.driver.name}</p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </div>
        );
};

ClubSetPage.propTypes = {
    clubSet: PropTypes.object.isRequired,
    clubs: PropTypes.array.isRequired,
    loadClubs: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
};

export function getClubSetBySlug(clubs, slug) {
    return clubs.find(clubSet => clubSet.slug === slug) || null;
}

function mapStateToProps(state, ownProps) {
    const slug = ownProps.match.params.slug;
    const clubSet =
        slug && state.clubs.length > 0
            ? getClubSetBySlug(state.clubs, slug)
            : newClubSet;
    return {
        clubSet,
        clubs: state.clubs
    };
}

const mapDispatchToProps = {
    loadClubs
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ClubSetPage);
