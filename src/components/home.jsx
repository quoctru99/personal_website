import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography'
import '../styles/home.sass'


export default class Home extends Component {

    render () {
        return (
            <div className="mainground">
                <div id="intro">
                    <Typography aling='center' className="intro-text" variant="h3" >
                        Tru Nguyen
                    </Typography>
                    <Typography aling='center' className="intro-text" variant="h5">
                        A CS student who always try to get better everyday.<br/> Who is 
                        eager to learn new thing.
                    </Typography>
                    
                </div>
            </div>
        );
    }
}