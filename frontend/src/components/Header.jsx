import React from "react"
import { Navbar, Nav, Container} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return(
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              activeKey="/"
              className="mr-auto"
            >
              <LinkContainer to="/">
                <Nav.Link>ProShop</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link eventKey="cart"><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link eventKey="login"><i className="fas fa-user"></i>Login</Nav.Link>
              </LinkContainer>
            </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
