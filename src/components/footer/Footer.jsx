import { ReactComponent as Logo } from '../../images/logo.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './footer.scss';

const Footer = () => {
    return(
        <>
        <Container className='footer'>
            <h6 className='logoTop'><Logo/>Reicipedia</h6>
            <Row>
                <Col sm={10} xl={2} className="footerReferences__leftSide">
                    <h6>Menu</h6>
                    <p><a href='#'>Home</a></p>
                    <p><a href='#'>Recipe</a></p>
                    <p><a href='#'>Community</a></p>
                    <p><a href='#'>About Us</a></p>
                </Col>
                <Col sm={10} xl={2} className="footerReferences__leftSide">
                    <h6>Categories</h6>
                    <p><a href='#'>Breakfast</a></p>
                    <p><a href='#'>Lunch</a></p>
                    <p><a href='#'>Dinner</a></p>
                    <p><a href='#'>Dessert</a></p>
                    <p><a href='#'>Drink</a></p>
                </Col>
                <Col sm={10} xl={2} className="footerReferences__leftSide">
                    <h6>Social</h6>
                    <p><a href='#'>Instagram</a></p>
                    <p><a href='#'>X</a></p>
                    <p><a href='#'>Youtube</a></p>
                    <p><a href='#'>Facebook</a></p>
                </Col>
                <Col sm={10} xl={5} className="footerReferences__rightSide">
                    <h6>Sign up for our newsletter</h6>
                    <div className='rightSide__emailInput'>
                        <input type='email' id='enterYourEmail' placeholder='Your email adress'></input>
                        <button id='submitYourEmail' type='submit'>Submit</button>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Footer