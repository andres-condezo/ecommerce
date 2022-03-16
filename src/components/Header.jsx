import React from "react"
import { Navbar, Nav, Container} from 'react-bootstrap';

const Header = () => {
  return(
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Nav
            activeKey="/home"
            className="mr-auto"
          >
            <Nav.Item>
              <Nav.Link href="/home">ProShop</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="cart"><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="login"><i className="fas fa-user"></i>Login</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </header>
    )
}

export default Header
