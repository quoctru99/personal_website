import React, { Component } from 'react';
import '../styles/contact.sass';
import Footer from'./homeParts/Footer';

export default class Contact extends Component {

    


    render() {
        return (
            <>
                <div id="contact">
                    <div id="contactForm" className="contactContainer">
                        <fieldset>
                            <legend><h1>Contact Form</h1></legend>
                        
                            <div id="s">
                                <div className="fullName">
                                    <label htmlFor="name">Your Name:</label>
                                    <input type="text" name="name" id="" placeholder="Full Name"/> 
                                </div>
                                
                                <div className="email">
                                    <label htmlFor="email">Email:</label>
                                    <input type="text" name="Email" id="" placeholder="Email"/>
                                </div>
                            
                                <div className="message">
                                    <label htmlFor="message">Message:</label>
                                    <textarea name="message" id="inform" rows="5" placeholder="Message..."></textarea>

                                    <button className="btn-submit">Submit</button>
                                </div>
                            </div>
                        
                        </fieldset>

                        
                    </div>
                </div>

                <Footer/>
            </>
        )
    }

    componentDidMount () {
        var textarea = document.getElementById("inform")
        textarea.addEventListener('resize', (e) => {
            console.log(e)
        })
    }
}