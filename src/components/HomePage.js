import Row from 'react-bootstrap/Row';
import '../App.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React,{useEffect} from "react";

function HomePage() {

  return (
    <div>
        <Container fluid className='home-info-container'>
        <Image src="./assets/jonathan-borba-R0y_bEUjiOM-unsplash.jpg" className='home-img' alt='Home Image' fluid />
        <div className='home-content'>
            <h1 data-text="Training">Training</h1>
        </div>
        </Container>
        <Container fluid className='service-blocks-container text-center'>
            <Row data-aos="fade-up">
                <Col className='pt-3'>
                    <h2 style={{color: '#e1200f'}}>Custom Online Personal Training & Nutrition</h2>
                    <p className='text-white'>Thisi idfansdfi fadnfaklsdnfaleflak difa dnfakdlfiawe finfaldf iefa</p>
                </Col>
            </Row>
            <Row noGutters className='d-flex justify-content-space-between'>
                <Col className='text-white service-block mx-auto' xs={12} md={4} data-aos="fade-right" data-aos-duration="1000">
                    <h2><i class="fa-solid fa-dumbbell"></i></h2>
                    <h3>Personal Training Plans</h3>
                    <p>My job is to break it all down for you, to create you a truly custom plan which focuses on you, your goals, lifestyle, available time and ability.</p>
                    <p>My job is to break it all down for you, to create you a truly custom plan which focuses on you, your goals, lifestyle, available time and ability.</p>
                </Col>
                <Col className='text-white service-block mx-auto' xs={12} md={4} data-aos="fade-up" data-aos-duration="1000">
                    <h2><i class="fa-solid fa-weight-hanging"></i></h2>
                    <h3>Weight Management</h3>
                    <p>My job is to break it all down for you, to create you a truly custom plan which focuses on you, your goals, lifestyle, available time and ability.</p>
                    <p>My job is to break it all down for you, to create you a truly custom plan which focuses on you, your goals, lifestyle, available time and ability.</p>
                </Col>
                <Col className='text-white service-block mx-auto' xs={12} md={4} data-aos="fade-left" data-aos-duration="1000">
                    <h2><i class="fa-solid fa-handshake-angle"></i></h2>
                    <h3>General Nutritional Guidance</h3>
                    <p>My job is to break it all down for you, to create you a truly custom plan which focuses on you, your goals, lifestyle, available time and ability.</p>
                    <p>My job is to break it all down for you, to create you a truly custom plan which focuses on you, your goals, lifestyle, available time and ability.</p>
                </Col>
            </Row>
        </Container>
        <Container>
            <Row className="about-me-row">
                <Col md={6} className="about-me-text-col" data-aos="fade-right">
                    <h2>About Me</h2>
                    <p>At the start of his fitness journey, Nate weighed just 119 pounds, with little knowledge or direction regarding how to maximize his health, function, and performance. Fast forward a few years, and under the guidance of various trainers, Nate went on to place 1st in two separate Classic Physique bodybuilding competitions.</p>
                    <p>As a personal trainer, he understands what it&#39;s like to be at both ends of the fitness spectrum and has witnessed firsthand the transformative impact that proper diet and training can have.</p>
                    <div>
                    <a href='/about' className='about-me-btn'><span className='btn-text'>Learn More</span></a>
                    </div>
                </Col>
                <Col md={6} className="about-me-image-col" data-aos="fade-left">
                    <Image src={"./assets/about_headshot.jpeg"} alt="About preview" className="about-me-image" />
                </Col>
            </Row>
        </Container>
    </div>
  );
  }

export default HomePage