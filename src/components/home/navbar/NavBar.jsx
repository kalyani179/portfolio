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
        <Container className={"flex mx-10 sm:mx-3 ml-14 py-5 space-x-28 sm:space-x-20"}>
        <Navbar.Brand href="#home" className={"text-4xl sm:text-2xl md:text-3xl"}>Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className={isNavOpen ? 'open' : ''}>
            <span className="navbar-toggler-icon"></span>
            <div className="absolute top-5 right-3 sm:z-50 md:z-50 lg:z-50">
                <button className="xl:hidden" onClick={toggleNav}>
                    {isNavOpen ? <i className="fi fi-rr-cross-small text-xl"></i> : <i className="fi fi-br-menu-burger sm:z-50"></i>}
                </button>
            </div>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className={`sm:hidden md:hidden lg:hidden me-auto border border-white border-opacity-25 rounded-3xl px-6 py-2`}>
                <Nav.Link href="#home" className={activeLink === "home" ? "navbar-link active" : "navbar-link"} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#about" className={activeLink === "about" ? "navbar-link active" : "navbar-link"} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === "skills" ? "navbar-link active" : "navbar-link"} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === "projects" ? "navbar-link active" : "navbar-link"} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                <Nav.Link href="#experience" className={activeLink === "experience" ? "navbar-link active" : "navbar-link"} onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>
            </Nav>
        {
            isNavOpen && (
            <Nav className={`xl:hidden me-auto border border-white border-opacity-25 px-6 sm:absolute md:absolute lg:absolute sm:top-0 md:top-0 lg:top-0 sm:right-0 md:right-0 lg:right-0 sm:z-30 md:z-30 lg:z-30 sm:py-24 md:py-24 lg:py-24 sm:pb-32 md:pb-32 lg:pb-32 sm:pl-10 md:pl-10 lg:pl-10 sm:h-full md:h-full lg:h-full sm:border-none md:border-none lg:border-none sm:grid md:grid lg:grid sm:grid-rows-5 md:grid-rows-5 lg:grid-rows-5 sm:bg-black/80 md:bg-black/80 lg:bg-black/80`}>
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
            <button className="sm:hidden md:hidden lg:hide xl:show ml-20 border border-white border-opacity-50 px-5 py-2 text-xl hover:bg-[#AA367C]/80"><a target="_" href="https://www.linkedin.com/in/kalyani-dantuluri-5a253023b/">Let's Connect</a></button>
        </div>
        </Container>
    </Navbar>
    )
}

export default NavBar;