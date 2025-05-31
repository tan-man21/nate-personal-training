import NavBar from './NavBar'
import { Fragment } from 'react';

function About() {

    return (
        <Fragment>
            <NavBar />
            <div className='about-hero'>
                <h1>About Me</h1>
                <div className='scroll-down-arrow'>
                <a href="#next-section">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#e1200f" viewBox="0 0 24 24">
                        <path d="M12 21L3 9h18L12 21z"/>
                    </svg>
                </a>
                </div>
            </div>
            <section id="next-section">
                <div className=''>
                    <h1>My Story</h1>
                    <p>ABUNCH OF TEXT</p>
                </div>
            </section>
        </Fragment>
    )
}

export default About