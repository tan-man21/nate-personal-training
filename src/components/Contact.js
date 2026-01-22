import NavBar from './NavBar'
import { Fragment } from 'react';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {

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
          toast.success('Message Sent!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    return (
        <Fragment>
            <NavBar />
            <section className='contact-hero'>
                <div className='contact-hero-inner'>
                    <h1>Get In Touch</h1>
                    <p>Ready to start your fitness journey? Have questions about my training programs?<br/>I'd love to hear from you!</p>
                </div>
            </section>

            <section className='contact-wrap'>
                <div className='contact-card'>
                    <h3>Send Me a Message</h3>
                    <p className='contact-sub'>Fill out the form below and I&apos;ll respond within 24 hours</p>
                    <form className='contact-form' ref={form} onSubmit={sendEmail}>
                        <div className='contact-grid'>
                            <div className='form-field'>
                                <label className='contact-label'>Full Name *</label>
                                <input className='contact-input' type='text' placeholder='Your full name' name='name' />
                            </div>
                            <div className='form-field'>
                                <label className='contact-label'>Email Address *</label>
                                <input className='contact-input' type='email' placeholder='your.email@example.com' name='email' />
                            </div>
                        </div>
                        <div className='form-field'>
                            <label className='contact-label'>Subject *</label>
                            <input className='contact-input' type='text' placeholder="What's this about?" name='subject' />
                        </div>
                        <div className='form-field'>
                            <label className='contact-label'>Message *</label>
                            <textarea className='contact-textarea' rows='4' placeholder='Tell me about your fitness goals, questions, or how I can help you...' name='message'></textarea>
                        </div>
                        <button type='submit' className='contact-button'>Send Message</button>
                    </form>
                </div>
            </section>

            <section className='reach-section'>
                <div className='reach-inner'>
                    <h3>Other Ways to Reach Me</h3>
                    <p className='reach-sub'>Prefer to connect differently? Here are alternative ways to get in touch.</p>
                    <div className='reach-grid'>
                        <div className='reach-item'>
                            <div className='reach-icon'>
                                <i className='fa-solid fa-envelope'></i>
                            </div>
                            <div className='reach-title'>Email</div>
                            <div className='reach-detail'>personal@trainer.com</div>
                        </div>
                        <div className='reach-item'>
                            <div className='reach-icon'>
                                <i className='fa-solid fa-phone'></i>
                            </div>
                            <div className='reach-title'>Phone</div>
                            <div className='reach-detail'>(111) 111-1111</div>
                        </div>
                        <div className='reach-item'>
                            <div className='reach-icon'>
                                <i className='fa-solid fa-location-dot'></i>
                            </div>
                            <div className='reach-title'>Location</div>
                            <div className='reach-detail'>Downtown Fitness Studio<br/>123 Main St, City</div>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </Fragment>
    )
}

export default Contact