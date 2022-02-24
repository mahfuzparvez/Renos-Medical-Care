import React from 'react';
import { Button, Carousel, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import "./Header.css";
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <>
                <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home"><img id="headerlogo" src="https://i.postimg.cc/wTkc9PCL/logo-template-1.png" alt="" /> Renos Medical Care</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                                <Nav.Link as={HashLink} to="/service">Service</Nav.Link>
                                <Nav.Link as={HashLink} to="/home#doctorCard">Dr and Sev Details</Nav.Link>
                                <Nav.Link as={HashLink} to="/about">About Us</Nav.Link>
                            </Nav>
                            <Navbar.Text>
                                <a className='mx-2 text-decoration-none' href="#login"> {user?.displayName}</a>
                            </Navbar.Text>
                            {user?.email ?
                                <Button id="loginbtn" onClick={logOut} variant="info">Logout</Button> :
                                <Button variant="info" className='mx-3'><Link id="loginbtn" to="/login">Login</Link></Button>}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
            <>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 slideImage"
                            src="https://i.postimg.cc/rw0fpLBD/successful-medical-team.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className='text-primary'>Team Medicine Specialist</h3>
                            <p className='text-dark'>If you are unsure about your conditions, seek out medical help from your family doctor who will investigate the problem with you.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 slideImage"
                            src="https://i.postimg.cc/kXhj95pr/team-young-specialist-doctors-standing-corridor-hospital.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3 className='text-primary'>Team Cardiology</h3>
                            <p className='text-dark'>They formalized the structure of medical inquiry as an independent science.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 slideImage"
                            src="https://i.postimg.cc/1Xvv8RRq/young-handsome-physician-medical-robe-with-stethoscope.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3 className='text-primary'>Emergency Support</h3>
                            <p className='text-dark'>Call us if you need emergency services and feel free to talk about your problem.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </>
        </div>
    );
};

export default Header;