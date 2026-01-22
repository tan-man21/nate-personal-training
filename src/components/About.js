import NavBar from './NavBar'
import { Fragment } from 'react';

function About() {

    return (
        <Fragment>
            <NavBar />
            <div className='about-hero'>
                <h1>About Me</h1>
                <p>Ready to start your fitness journey? Have questions about my training programs?<br/>I'd love to hear from you!</p>
            </div>
			<section className='about-next-section'>
				<div className='about-next-container'>
					<div className='about-next-left'>
						<img src={'./assets/headshot.jpg'} alt='Coach' className='about-next-image' />
					</div>
					<div className='about-next-right'>
						<h2>About Me</h2>
						<p className='about-intro'>Hi, I'm Personal Trainer, a certified personal trainer. My passion is helping individuals improve their strength, performance, and overall health with practical, sustainable guidance.</p>

						<h3>My Approach</h3>
						<p>I believe fitness should be sustainable and enjoyable. My training philosophy focuses on creating personalized workout and nutrition plans that fit your lifestyle, goals, and fitness level.</p>

						<h3>Certifications & Expertise</h3>
						<ul className='about-cert-list'>
							<li>NASM Certified Personal Trainer</li>
							<li>Precision Nutrition Level 1 Coach</li>
							<li>Functional Movement Screen (FMS) Certified</li>
							<li>CPR/AED Certified</li>
						</ul>

						<h3>Specializations</h3>
						<div className='about-specializations'>
							<span className='pill'>Weight Loss</span>
							<span className='pill'>Strength Training</span>
							<span className='pill'>Nutrition Coaching</span>
							<span className='pill'>Injury Prevention</span>
							<span className='pill'>Sports Performance</span>
						</div>

						<div className='about-cta'>
							<a href='/contact' className='btn-consultation'>Book a Consultation</a>
						</div>
					</div>
				</div>
			</section>
        </Fragment>
    )
}

export default About