import React from 'react';
import './Footer.scss';
import { Row, Col, Container } from 'react-bootstrap';
import * as icons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";


function Footer() {
    return (
        <footer className="py-5">
            <hr></hr>
            <Container fluid>
                <Row className="row ">
                    <Col md={3}>
                        <Row>
                            <Col xs={10}>
                                <ul className="unstyled-list">
                                    <li><Link to="/">Udemy for Business</Link></li>
                                    <li><Link to="/">Teach on Udemy</Link></li>
                                    <li><Link to="/">Get the app</Link></li>
                                    <li><Link to="/">About us</Link></li>
                                    <li><Link to="/">Contact us</Link></li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={3}>
                        <Row>
                            <Col xs={10}>
                                <ul className="unstyled-list">
                                    <li><Link to="/">Job</Link></li>
                                    <li><Link to="/">Blog</Link></li>
                                    <li><Link to="/">Help and assistance</Link></li>
                                    <li><Link to="/">Affiliate</Link></li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={3}>
                        <Row>
                            <Col xs={10}>
                                <ul className="unstyled-list">
                                    <li><Link to="/">Terms</Link></li>
                                    <li><Link to="/">Privacy Policy and Cookies Policy</Link></li>
                                    <li><Link to="/">Site Map</Link></li>
                                    <li><Link to="/">Featured courses</Link></li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={3}>
                        <Row>
                            <Col xs={10}>
                                <div className="icon-container">
                                    <FontAwesomeIcon icon={icons.faCircle} />
                                </div>
                                    <select required="" className="dropdown-language">
                                        <option value="en_US">English</option>
                                        <option value="de_DE">Deutsch</option>
                                        <option value="es_ES">Español</option>
                                        <option value="fr_FR">Français</option>
                                        <option value="id_ID">Bahasa Indonesia</option>
                                        <option value="it_IT">Italiano</option>
                                        <option value="ja_JP">日本語</option>
                                        <option value="ko_KR">한국어</option>
                                        <option value="nl_NL">Nederlands</option>
                                        <option value="pl_PL">Polski</option>
                                        <option value="pt_BR">Português</option>
                                        <option value="ro_RO">Română</option>
                                        <option value="ru_RU">Русский</option>
                                        <option value="th_TH">ภาษาไทย</option>
                                        <option value="tr_TR">Türkçe</option>
                                        <option value="zh_CN">中文(简体)</option>
                                        <option value="zh_TW">中文(繁體)</option>
                                    </select>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div className="footer-logo-container">
                    <Row>
                        <Col xs={6}>
                            <div>Udemyxlogo</div>
                        </Col>
                        <div>© 2020 Udemyx, Inc.</div>
                    </Row>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;