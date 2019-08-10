import React, { Component } from 'react';
import resum from '../../resume/resume.pdf';
import '../../styles/homePartsCss/recuiter.sass';

export default class recuiter extends Component {

    render() {
        return (
            <div className="container">
                <h1 className="titleres">My Current Resume</h1>
                <iframe src={resum} frameBorder="0" width="100%" height="700px" title="SDF" alt="resume"></iframe>
            </div>
        )
    }
} 