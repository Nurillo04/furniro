import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { logo } from "../../assets";
import { search } from "../../assets";
import { heart } from "../../assets";
import { shopping } from "../../assets";
import { child } from "../../assets";
import "./Header.css";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <div className="container mx-auto px-5">
        <Navbar.Brand>
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav nav1  ">
          <Nav className="ms-auto">
            <Nav.Link>
              <NavLink className="item" to="/">
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className="item" to="shop">
                {" "}
                Shop{" "}
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className="item" to="about">
                {" "}
                About{" "}
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className="item" to="contact">
                {" "}
                Contact{" "}
              </NavLink>
            </Nav.Link>
          </Nav>
          <Nav className="nav">
            <img src={child} alt="Rasm" />
            <img src={search} alt="Rasm" />
            <img src={heart} alt="Rasm" />
            <img src={shopping} alt="Rasm" />
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Header;
