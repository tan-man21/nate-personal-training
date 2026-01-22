import '../App.css';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from 'react-router';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavBar() {

    const location = useLocation();

    return (
        <Navbar className='site-navbar' data-bs-theme="dark" key={'lg'} expand={'lg'} sticky='top' >
        <Container>
          <Navbar.Brand href="/">Personal Trainer</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
          <Nav className="justify-content-end" variant="underline" defaultActiveKey="/">
            <Nav.Link href="/" active={location.pathname === "/"}>Home</Nav.Link>
            <Nav.Link href='/online-training' active={location.pathname === "/online-training"}>Online Training</Nav.Link>
            <Nav.Link href="/about" active={location.pathname === "/about"}>About Me</Nav.Link>
            <Nav.Link href="/contact"active={location.pathname === "/contact"}>Contact</Nav.Link>
          </Nav>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    )
}

export default NavBar