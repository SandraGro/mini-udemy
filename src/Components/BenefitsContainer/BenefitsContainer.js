import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-solid-svg-icons';


class BenefitsContainer extends Component {

    render() {
        return (
            <Container>
                    <Row className="row">
                        <Col md={4}>
                            <Row>
                                <Col xs={2}>
                                    <FontAwesomeIcon icon={icons.faFileVideo} />
                                </Col>
                                <Col xs={10}>
                                    <p>130,000 online courses</p>
                                    <p>Expert instructors</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={4}>
                            <Row>
                                <Col xs={2}>
                                    <FontAwesomeIcon icon={icons.faCertificate} />
                                </Col>
                                <Col xs={10}>
                                    <p>Lifetime access</p>
                                    <p>Enjoy a wide variety of current affairs</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={4}>
                            <Row>
                                <Col xs={2} className="flex-column">
                                    <FontAwesomeIcon icon={icons.faInfinity} />
                                </Col>
                                <Col xs={10}>
                                    <p>Find the right instructor for you</p>
                                    <p>Learn at your own pace</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
            </Container>
        );
    }
}
export default BenefitsContainer;