import React, { Component } from 'react';
import resum from '../../resume/resume.pdf';

export default class recuiter extends Component {

    render() {
        return (
            <div className="container">
                <h1>My Current Resume</h1>
                <iframe src={resum} frameBorder="0" width="100%" height="700px" title="SDF"></iframe>
            </div>
        )
    }
} 