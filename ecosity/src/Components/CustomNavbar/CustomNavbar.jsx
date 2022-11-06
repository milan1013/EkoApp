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
/* {/* 
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      {/* <Link to="/"></Link>
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/myevents">My events</CustomLink>
        <CustomLink to="/mapview">Map</CustomLink>
        <CustomLink to="/profile">Profile</CustomLink>
      </ul> 

      <CustomLink to="/" class="navbar-brand">
        LOGO
      </CustomLink>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              <CustomLink to="/">Home</CustomLink>
            </a>
          </li>
          <li class="nav-item">
            <CustomLink to="/myevents">My events</CustomLink>
          </li>
          <li class="nav-item">
            <CustomLink to="/mapview">Map</CustomLink>
          </li>
          <li class="nav-item dropdown">
            <CustomLink to="/profile">Profile</CustomLink>
          </li>
        </ul>
      </div>
    </nav> */
/* // <nav className="nav">
    //   <Link to="/"></Link>
    //   <ul>
    //     <CustomLink to="/">Home</CustomLink>
    //     <CustomLink to="/myevents">My events</CustomLink>
    //     <CustomLink to="/mapview">Map</CustomLink>
    //     <CustomLink to="/profile">Profile</CustomLink>
    //   </ul>
    // </nav> */
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
