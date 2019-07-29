import '../styles/form.sass'
import React, { Component } from 'react';



export default class Form extends Component {
    send_request(e) {
        e.preventDefault();
        console.log("done");
    }

    render() {
        return (<div className="login_form">
                    <label>username</label>
                        <input type="text" name="username" />
                    <label>password</label>
                        <input type="password" name="password" />
                    <button onClick={this.send_request}> Sign In </button>
                </div>);
    }
}
