import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
    const [activeLink,setActiveLink] = useState('home');
    const [scrolled,setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    return (
        <Navbar expand="lg" className={scrolled ? "scroll" : ""}>
        <Container className={"flex mx-10 ml-14 py-5 space-x-28"}>
        <Navbar.Brand href="#home" className={"text-4xl"}>Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={"me-auto border border-white border-opacity-25 rounded-3xl px-6 py-2"}>
            <Nav.Link href="#home" className={activeLink==="home" ? "navbar-link active" : "navbar-link"} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#about" className={activeLink==="about" ? "navbar-link active" : "navbar-link"} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
            <Nav.Link href="#skills" className={activeLink==="skills" ? "navbar-link active" : "navbar-link"} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink==="projects" ? "navbar-link active" : "navbar-link"} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#experience" className={activeLink==="experience" ? "navbar-link active" : "navbar-link"} onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                Separated link
                </NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
        </Navbar.Collapse>
        <div>
            <button className="ml-20 border border-white border-opacity-50 px-5 py-2 text-xl hover:bg-white hover:text-black">Let's Connect</button>
        </div>
        </Container>
    </Navbar>
    )
}

export default NavBar;