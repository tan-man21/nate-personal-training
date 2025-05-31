import Row from 'react-bootstrap/Row';
import '../App.css';
import Col from 'react-bootstrap/Col';
import NavBar from './NavBar'
import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React,{useEffect} from "react";

function HomePage() {

    useEffect(() => {
        AOS.init();
      }, [])

  return (
    <div>
        <Container fluid className='home-info-container'>
        {/* <Row>
            <Col  className='home-img' lg={8} sm={12}></Col>
            <Col className='home-info' lg={4} sm={12} data-aos="fade-left">
                <h2 style={{color: '#a7a7a7'}}>Train with Nate Peterson</h2>
                <h1>Personalized Online Personal Training</h1>
                <a href='/online-training' style={{textDecoration: 'none'}}><h3 className='hover-2'>Start Online Training</h3></a>
            </Col>
        </Row> */}
        <Image src="./assets/jonathan-borba-R0y_bEUjiOM-unsplash.jpg" className='home-img' alt='Home Image' fluid />
        <div className='home-content'>
            <h1>Training</h1>
        </div>
        </Container>
        <Container fluid className='service-blocks-container text-center'>
            <Row data-aos="fade-up">
                <Col className='text-white pt-3'>
                    <h2>Custom Online Personal Training & Nutrition</h2>
                    <p>Thisi idfansdfi fadnfaklsdnfaleflak difa dnfakdlfiawe finfaldf iefa</p>
                </Col>
            </Row>
            <Row noGutters className='d-flex justify-content-space-between'>
                <Col className='text-white service-block mx-auto' xs={12} md={4} data-aos="fade-right" data-aos-duration="1000">
                    <h1><i class="fa-solid fa-dumbbell"></i></h1>
                    <h3>Personal Training Plans</h3>
                    <p>My job is to break it all down for you, to create you a truly custom plan which focuses on you, your goals, lifestyle, available time and ability.</p>
                    <p>My job is to break it all down for you, to create you a truly custom plan which focuses on you, your goals, lifestyle, available time and ability.</p>
                </Col>
                <Col className='text-white service-block mx-auto' xs={12} md={4} data-aos="fade-up" data-aos-duration="1000">
                    <h1><i class="fa-solid fa-weight-hanging"></i></h1>
                    <h3>Weight Management</h3>
                    <p>My job is to break it all down for you, to create you a truly custom plan which focuses on you, your goals, lifestyle, available time and ability.</p>
                    <p>My job is to break it all down for you, to create you a truly custom plan which focuses on you, your goals, lifestyle, available time and ability.</p>
                </Col>
                <Col className='text-white service-block mx-auto' xs={12} md={4} data-aos="fade-left" data-aos-duration="1000">
                    <h1><i class="fa-solid fa-handshake-angle"></i></h1>
                    <h3>General Nutritional Guidance</h3>
                    <p>My job is to break it all down for you, to create you a truly custom plan which focuses on you, your goals, lifestyle, available time and ability.</p>
                    <p>My job is to break it all down for you, to create you a truly custom plan which focuses on you, your goals, lifestyle, available time and ability.</p>
                </Col>
            </Row>
        </Container>
        <Container>
            <Row className="about-me-row">
                <Col md={6} className="about-me-image-col" data-aos="fade-right">
                    <Image src={"https://static.vecteezy.com/system/resources/thumbnails/007/421/470/small/handsome-cheerful-bearded-man-smiles-gladfully-dressed-in-casual-white-t-shirt-being-in-good-mood-poses-against-blue-background-with-copy-space-glad-european-guy-with-stubble-stands-indoor-free-photo.jpg"} alt="About Me" className="about-me-image" roundedCircle />
                </Col>
                <Col md={6} className="about-me-text-col" data-aos="fade-left">
                    <h2>About Me</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Twoetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
                </Col>
            </Row>
        </Container>
    </div>
  );
  }

export default HomePage