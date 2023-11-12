import { Container, Navbar, Nav } from "react-bootstrap";

export default function NavbarComponent() {
  return (
    <div className="navbar-page">
      <Navbar expand="lg" className="pb-2 pt-2 text-white">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-3 text-white">SeinkiAL</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto g-5 text-white">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Resume</Nav.Link>
            <Nav.Link href="#link">Experience</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}