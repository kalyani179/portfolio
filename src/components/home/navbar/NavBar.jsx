import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    const [activeLink,setActiveLink] = useState('home');
    const [isNavOpen, setIsNavOpen] = useState(false);
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
        setIsNavOpen(false); // Close the navbar when a link is clicked on mobile screens
    };

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen); // Toggle navbar open/close state
    };

    return (
        <Navbar expand="lg" className={scrolled ? "scroll" : ""}>
        <Container className={"flex mx-10 ml-14 py-5 space-x-28 sm:space-x-20"}>
        <Navbar.Brand href="#home" className={"text-4xl sm:text-2xl md:text-3xl"}>Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className={isNavOpen ? 'open' : ''}>
            <span className="navbar-toggler-icon"></span>
            <div className="absolute top-5 right-3 sm:z-50">
                <button className="lg:hidden" onClick={toggleNav}>
                    {isNavOpen ? <i className="fi fi-rr-cross-small text-xl"></i> : <i className="fi fi-br-menu-burger sm:z-50"></i>}
                </button>
            </div>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className={`sm:hidden md:hidden me-auto border border-white border-opacity-25 rounded-3xl px-6 py-2`}>
                <Nav.Link href="#home" className={activeLink === "home" ? "navbar-link active" : "navbar-link"} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#about" className={activeLink === "about" ? "navbar-link active" : "navbar-link"} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === "skills" ? "navbar-link active" : "navbar-link"} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === "projects" ? "navbar-link active" : "navbar-link"} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                <Nav.Link href="#experience" className={activeLink === "experience" ? "navbar-link active" : "navbar-link"} onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>
            </Nav>
        {
            isNavOpen && (
            <Nav className={`lg:hidden me-auto border border-white border-opacity-25 px-6 sm:absolute sm:top-0 sm:right-0 sm:z-30 sm:py-24 sm:pb-32 sm:pl-10 sm:h-full sm:border-none sm:grid sm:grid-rows-5 sm:bg-black/70`}>
                <Nav.Link href="#home" className={activeLink === "home" ? "navbar-link active" : "navbar-link"} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#about" className={activeLink === "about" ? "navbar-link active" : "navbar-link"} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === "skills" ? "navbar-link active" : "navbar-link"} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === "projects" ? "navbar-link active" : "navbar-link"} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                <Nav.Link href="#experience" className={activeLink === "experience" ? "navbar-link active" : "navbar-link"} onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>
            </Nav>
        )

        }
            
        </Navbar.Collapse>
        <div classname="">
            <button className="sm:hidden md:hidden ml-20 border border-white border-opacity-50 px-5 py-2 text-xl hover:bg-[#AA367C]/80"><a target="_" href="https://www.linkedin.com/in/kalyani-dantuluri-5a253023b/">Let's Connect</a></button>
        </div>
        </Container>
    </Navbar>
    )
}

export default NavBar;