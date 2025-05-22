import Row from 'react-bootstrap/Row';
import '../App.css';
import Col from 'react-bootstrap/Col';
import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Footer() {

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ua536wh', 'template_wg244dh', form.current, {
        publicKey: 'va_-jXz6HRziuNjM-',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    return (
        <div className='footer'>
            <Row>
                <Col className='text-center align-content-center' xs={12} md={6}>
                    <h5>CONTACT ME</h5>
                    <br />
                    <h5>nate@peterson.com</h5>
                </Col>
                <Col xs={12} md={6}>
                    <Form className='p-5' ref={form} onSubmit={sendEmail}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Control placeholder="Name" name='name' />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSubject">
                            <Form.Control placeholder="Subject" name='title' />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" name='email' />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicMessage">
                            <Form.Control as="textarea" placeholder="Message" name='message' />
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