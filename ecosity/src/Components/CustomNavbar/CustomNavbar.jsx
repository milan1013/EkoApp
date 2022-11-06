import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./CustomNavbar.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import {FaLeaf} from "react-icons/fa"

export default function CustomNavbar() {
  return (
    <Navbar expand="lg" className="nav-container">
      <Container>
        <Navbar.Brand>
          <CustomLink to="/" className="link" className="logo"><FaLeaf/></CustomLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <CustomLink to="/" className="link">Home</CustomLink>
            </Nav.Link>
            <Nav.Link>
              <CustomLink to="/forest" className="link">Forest</CustomLink>
            </Nav.Link>
            <Nav.Link>
              <CustomLink to="/profile" className="link" className="linkProfile">Profile</CustomLink>
            </Nav.Link>
            <Nav.Link>
              <CustomLink to="/register" className="link" className="linkRegister">Register</CustomLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
