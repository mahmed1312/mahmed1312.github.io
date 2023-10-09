import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import "./Navbar.css"

//                 <Nav.Link className="text-white nav" href="/">Home</Nav.Link>
// style={{backgroundColor: "black"}}
function NavigationBar() {
  return (
    <Navbar style={{backgroundColor: "black"}} className="custom-navbar">
        <Container>
            <Navbar.Brand className="text-white nav" bg="primary" href="/">Our website name</Navbar.Brand>
            <Nav className="align-items-center">
                <Nav.Item>
                    <Button variant="primary" className="text-white nav" style={{backgroundColor: "darkorange", borderColor: "darkorange"}}href="/post-listing" id="post-button">Post Listing</Button>
                </Nav.Item>
            </Nav>
        </Container>
    </Navbar>
  );
};
  
export default NavigationBar;