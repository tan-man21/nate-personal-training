import Row from 'react-bootstrap/Row';
import '../App.css';
import Col from 'react-bootstrap/Col';
import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Footer() {

    return (
        <div className='footer'>
            <Row>
                <Col className='text-center align-content-center' xs={12} md={6}>
                    <h5>CONTACT ME</h5>
                    <br />
                    <h5>Text here?</h5>
                </Col>
                <Col xs={12} md={6}>
                    <Form className='p-5'>
                        <Form.Group className="mb-3" controlId="formBasicFirst">
                            <Form.Control placeholder="First Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicLast">
                            <Form.Control placeholder="Last Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicMessage">
                            <Form.Control as="textarea" placeholder="Message" />
                        </Form.Group>
                        <Button type="submit" className='form-button'>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default Footer