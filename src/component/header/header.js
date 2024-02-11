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
                navbar.style.height = "80px";
            }
        });
        if (location.pathname === "/protfolio") {
            setLinks(true)
        }else if (location.pathname === "/About") {
            setLinks(true)
        }else if(location.pathname === "/contact"){
            setLinks(true)
        }else {
            setLinks(false)
        }
    }, []);
    return (
        <Navbar id="yourNavbarId"  sticky="bottom" expand="lg" className="z-3 navbar  text-uppercase header fixed-top  ">
            <Container>
                <Navbar.Brand className="fs-2 text-light fw-bold">
                    <Link className="text-decoration-none text-white" to="/">START FRAMEWORK</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav     " className="justify-content-end">
                    <Nav className=" text-end nav h5  fw-bold text-light  fw-bold">
                        <Nav.Link ><Link className= {`text-decoration-none text-white`} to="/About">ABOUT</Link></Nav.Link>
                        <Nav.Link ><Link className="text-decoration-none text-white" to="/protfolio">PORTFOLIO</Link></Nav.Link>
                        <Nav.Link ><Link className="text-decoration-none text-white" to="/contact">CONTACT</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;