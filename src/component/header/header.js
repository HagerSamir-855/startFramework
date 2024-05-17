import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../../App.css"
import {Link, useLocation} from "react-router-dom";
function Header(props) {
    const location = useLocation()
    const [links , setLinks] = useState(true)
    console.log(location.pathname)
    useEffect(() => {
        window.addEventListener("scroll", function() {
            let navbar = document.getElementById("yourNavbarId");
            let scrollPosition = window.scrollY;
            if (scrollPosition <= 0) {
                navbar.style.height = "70px";
            } else {
                navbar.style.height = "100px";
            }
        });
    }, []);
    return (
        <Navbar id="yourNavbarId"  sticky="bottom" expand="lg" className="z-3 navbar  text-uppercase header fixed-top py-4  ">
            <Container>
                <Navbar.Brand className="fs-2 text-light fw-bold">
                    <Link className="text-decoration-none text-white" to="/">START FRAMEWORK</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav " className="justify-content-end">
                    <Nav className=" text-end nav h5  fw-bold text-light  fw-bold">
                        <Nav.Link ><Link className= {`text-decoration-none text-white p-2 rounded-2 ${location.pathname === "/About" ?"mainpage text-light":"null"}`} to="/About">ABOUT</Link></Nav.Link>
                        <Nav.Link ><Link className= {`text-decoration-none text-white p-2 rounded-2 ${location.pathname === "/protfolio" ?"mainpage text-light":"null"}`} to="/protfolio">PORTFOLIO</Link></Nav.Link>
                        <Nav.Link ><Link className={`text-decoration-none text-white p-2 rounded-2 ${location.pathname === "/contact" ?"mainpage text-light":"null"}`} to="/contact">CONTACT</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;