import React from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ClubCard = ({ club }) => (
    <Card>
        <Carousel interval={null} indicators={false}>
            {club.images.map((image, index) => {
                return (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={image}
                            width="100%"
                            height="300px"
                            alt=""
                        />
                    </Carousel.Item>
                );
            })}
        </Carousel>
        <Card.Body>
            <Card.Title>{club.firstName + " " + club.lastName}</Card.Title>
            <Card.Text>
                {club.driver[0].brand + " " + club.driver[0].model}
            </Card.Text>
            <Link to={"/" + club.slug}>Learn More</Link>
        </Card.Body>
    </Card>
);

ClubCard.propTypes = {
    club: PropTypes.object.isRequired
};

export default ClubCard;