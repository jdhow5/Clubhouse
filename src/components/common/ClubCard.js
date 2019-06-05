import React from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
//import Button from "react-bootstrap/Button";
// import PropTypes from "prop-types";

const ClubCard = () => (
    <Card>
        <Carousel interval={null} indicators={false}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://s1.ticketm.net/dam/a/ac8/aedc8214-7ae1-4f2b-84b3-cec13763bac8_1051221_RECOMENDATION_16_9.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://s1.ticketm.net/dam/a/5c7/60f50b45-31e1-4eb1-9f6a-1078e80915c7_757211_RETINA_LANDSCAPE_16_9.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://s1.ticketm.net/dam/a/2b7/bf7a9f28-5186-4418-b181-b360bdba42b7_723621_EVENT_DETAIL_PAGE_16_9.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the cards content.
            </Card.Text>
            <a href="">Read More</a>
        </Card.Body>
    </Card>
);

ClubCard.propTypes = {

};

export default ClubCard;