import React, { Component } from 'react';
import '../styles/contact.sass';

export default class Contact extends Component {

    


    render() {
        return (
            <div id="contactForm" className="container">
                
                <h1>Contact Form</h1>
                <div className="info">
                    <span>
                        <label htmlFor="name">Your Name</label>
                        <input type="text" name="name" id="" placeholder="Full Name"/>
                    </span>
                    <span>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="Email" id="" placeholder="Email"/>
                    </span>
                </div>
                
                <div className="message">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="inform" rows="5" placeholder="Message..."></textarea>
                </div>


                <button className="btn-submit">Submit --></button>
            </div>
        )
    }

    componentDidMount() {
        var ta = document.getElementById("inform")

        ta.addEventListener("input", this.autoResize.bind(ta))
    }

    autoResize(e) {
        var height = e.target.scrollHeight
        e.target.style.cssText = `height: auto`
        e.target.style.cssText = `height: ${height}px`
    }
}