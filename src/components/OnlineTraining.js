import NavBar from './NavBar'
import { Fragment } from 'react';

function OnlineTraining() {

    return (
        <Fragment>
            <NavBar />
            <div className='about-hero'>
                <h1>Online Training</h1>
                <p>Ready to start your fitness journey? Have questions about my training programs?<br/>I'd love to hear from you!</p>
            </div>

            <section className='training-styles-section'>
                <div className='training-styles-header'>
                    <h2>Choose Your Training Style</h2>
                    <p>Flexible online training options designed to fit your lifestyle and fitness goals</p>
                </div>
                <div className='training-cards-grid'>
                    <div className='training-card' data-aos="fade-left" data-aos-duration="500">
                        <img src={'./assets/ludovic-migneault-EZ4TYgXPNWk-unsplash.jpg'} alt='1-on-1 Virtual Training' className='training-card-img' />
                        <div className='training-card-content'>
                            <h3>1-on-1 Virtual Training</h3>
                            <p className='price'>$79 <span>per session</span></p>
                            <ul className='features-list'>
                                <li><i className='fa-solid fa-circle-check'></i> Personalized workout plans</li>
                                <li><i className='fa-solid fa-circle-check'></i> Real-time form correction</li>
                                <li><i className='fa-solid fa-circle-check'></i> Flexible scheduling</li>
                                <li><i className='fa-solid fa-circle-check'></i> Progress tracking</li>
                            </ul>
                            <a href='#' className='get-started-btn'>Get Started</a>
                        </div>
                    </div>
                    <div className='training-card' data-aos="fade-left" data-aos-duration="500" data-aos-delay="100">
                        <img src={'./assets/peter-gargiulo-cGNCepznaV8-unsplash.jpg'} alt='Group Virtual Classes' className='training-card-img' />
                        <div className='training-card-content'>
                            <h3>Group Virtual Classes</h3>
                            <p className='price'>$29 <span>per class</span></p>
                            <ul className='features-list'>
                                <li><i className='fa-solid fa-circle-check'></i> Small group sessions</li>
                                <li><i className='fa-solid fa-circle-check'></i> Community motivation</li>
                                <li><i className='fa-solid fa-circle-check'></i> Live interactive classes</li>
                                <li><i className='fa-solid fa-circle-check'></i> Multiple time slots</li>
                            </ul>
                            <a href='#' className='get-started-btn'>Get Started</a>
                        </div>
                    </div>
                    <div className='training-card' data-aos="fade-left" data-aos-duration="500" data-aos-delay="200">
                        <img src={'./assets/jonathan-borba-R0y_bEUjiOM-unsplash.jpg'} alt='Custom Workout Plans' className='training-card-img' />
                        <div className='training-card-content'>
                            <h3>Custom Workout Plans</h3>
                            <p className='price'>$149 <span>monthly</span></p>
                            <ul className='features-list'>
                                <li><i className='fa-solid fa-circle-check'></i> Tailored to your goals</li>
                                <li><i className='fa-solid fa-circle-check'></i> Weekly plan updates</li>
                                <li><i className='fa-solid fa-circle-check'></i> Equipment adaptations</li>
                                <li><i className='fa-solid fa-circle-check'></i> Video demonstrations</li>
                            </ul>
                            <a href='#' className='get-started-btn'>Get Started</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className='why-online-section'>
                <div className='why-online-header'>
                    <h2>Why Choose Online Training?</h2>
                    <p>Experience all the benefits of personal training with the convenience of working out at home</p>
                </div>
                <div className='benefits-grid'>
                    <div className='benefit-item' data-aos="fade-up">
                        <div className='benefit-icon'><i className='fa-solid fa-video'></i></div>
                        <h3>Live Video Sessions</h3>
                        <p>Train with me in real-time through HD video calls with interactive coaching</p>
                    </div>
                    <div className='benefit-item' data-aos="fade-up" data-aos-delay="100">
                        <div className='benefit-icon'><i className='fa-solid fa-calendar'></i></div>
                        <h3>Flexible Scheduling</h3>
                        <p>Book sessions that fit your schedule, with options for early morning or evening workouts</p>
                    </div>
                    <div className='benefit-item' data-aos="fade-up" data-aos-delay="200">
                        <div className='benefit-icon'><i className='fa-solid fa-chart-line'></i></div>
                        <h3>Progress Tracking</h3>
                        <p>Monitor your improvements with detailed analytics and milestone celebrations</p>
                    </div>
                    <div className='benefit-item' data-aos="fade-up" data-aos-delay="300">
                        <div className='benefit-icon'><i className='fa-solid fa-heart'></i></div>
                        <h3>Personalized Care</h3>
                        <p>Every workout is tailored to your fitness level, goals, and available equipment</p>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default OnlineTraining