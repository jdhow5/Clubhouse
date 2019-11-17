import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadClubs } from "../../redux/actions/clubsActions";
import PropTypes from "prop-types";
import { newClubs } from "../../../tools/mockData";
import Spinner from "../common/Spinner";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Collapse from "react-bootstrap/Collapse";
import Calendar from "../common/Calendar";

const ClubsDetailPage = ({
    clubs,
    loadClubs,
    ...props
}) => {
    const [clubSet, setClubSet] = useState({ ...props.clubSet });
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (clubs.length === 0) {
            loadClubs().catch(error => {
                alert("Loading clubs failed" + error);
            });
        } else {
            setClubSet({ ...props.clubSet });
        }
    }, [props.clubSet]);

    const ClubsDetailCard = () => {
        return (
            <Card>
                <Row>
                    <Col>
                        <Carousel interval={null} indicators={false}>
                            {clubSet.images.map((image, index) => {
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
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Title>{clubSet.firstName + " " + clubSet.lastName}</Card.Title>
                            <Card.Text>
                                {clubSet.description}
                                <Row>
                                    <Col>
                                        <Calendar dateFilter={new Date()}
                                                handleFilterChange={function() {return false;}} inline={true}/>
                                    </Col>
                                    <Col>
                                        <Button variant="success">Reserve Now</Button>
                                    </Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        );
    } 

    return clubs.length === 0 ? (
        <Spinner />
    ) : (
        <>  
            <ClubsDetailCard />

            <Button
                onClick={() => setOpen(!open)}
                aria-controls="driver-table-wpr"
                aria-expanded={open}
            >
                Driver:
            </Button>
            <Collapse in={open}>
                <div id="driver-table-wpr">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </Collapse>
                    
                    {/* {clubSet.driver.map(club => {
                        return(
                            <>
                            <p>{club.brand + " " + club.model}</p>
                            <p>Shaft: {club.shaft}</p>
                            <p>Flex: {club.flex}</p>
                            <p>Loft: {club.loft}&deg;</p>
                            </>
                        );
                    })} */}
        </>
    );
};

ClubsDetailPage.propTypes = {
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
            : newClubs;
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
)(ClubsDetailPage);
