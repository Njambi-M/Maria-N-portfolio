import "../contact/contact.css";
import React from 'react';

export default function Contact() {
    return(
        <>
        <section className = "contact section" id ="contact">
        <h1>Contact Me</h1>
        <div className="contact-info">
            <div className="contact-details">
                <div className="contacts">
                    <h3>Email</h3>
                    <p>mmuthiore@gmail.com</p>
                </div>
                <div className="contacts">
                    <h3>Phone Number</h3>
                    <p>+254115226052</p>
                </div>
            </div>

            <div className="contact-form">
                <form>
                    <label for="fname">First Name:</label>
                    <input type="text" placeholder="First Name" className="contact-input" id="fname"/>
                    <label for="lname">Last Name:</label>
                    <input type="text" placeholder="Last Name" className="contact-input" id="lname"/>
                    <label for="email">Email:</label>
                    <input type="email" placeholder="Email" className="contact-input" id="email"/>
                    <label for="message">Your message:</label>
                    <textarea placeholder="Message" className="contact-input" name="message" cols="30" rows="10" id="message"></textarea>
                    <input type="submit" value="Send Message" className="contact-btn"/>
                </form>
            </div>
        </div>
    </section>
            </>
    );
}