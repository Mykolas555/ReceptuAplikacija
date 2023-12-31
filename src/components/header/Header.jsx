import { ReactComponent as Logo } from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Search from '../search/Search';
import './header.scss';

const Header = () => {
  return (
    <Navbar expand="lg" className="justify-content-between">
      <Container>
        <Navbar.Brand className="logoTop">
          <Logo />Reicipedia
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" className="linksTop">Home</Nav.Link>
            <Nav.Link as={Link} to="category" className="linksTop">Category</Nav.Link>
            <Nav.Link as={Link} to="recipeDisplay" className="linksTop">Recipe</Nav.Link>
          </Nav>
          <Nav className="mx-auto">
            <Nav.Link className="linksTop"><i className="fas fa-user"></i></Nav.Link>
            <Nav.Link className='linksTop'><Search/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
