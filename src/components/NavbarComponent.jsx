import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { navLinks } from "../data/js/index";

export default function NavbarComponent() {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundcolor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundcolor();
    window.addEventListener("scroll", changeBackgroundcolor);
  });

  return (
    <div>
      <Navbar
        fixed="top"
        expand="lg"
        className={`${
          changeColor ? "color-active" : ""
        } p-3 text-white`}
      >
        <Container>
          <Navbar.Brand href="#home" className="fw-bold fs-3">
            SeinkiAL
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-white">
              {navLinks.map((link) => {
                return (
                  <div className="nav-link" key={link.id}>
                    <NavLink
                      to={link.path}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                      end
                    >
                      {link.text}
                    </NavLink>
                  </div>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
