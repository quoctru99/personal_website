import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import React, { Component } from 'react';

import '../styles/navbar.sass'

import {
    BrowserRouter as Router, 
    Route,
    Link,
    Switch,
    Redirect 
} from 'react-router-dom';

const styles = {
    abar: {
        "background-color": "transparent",
    },
    grow: {
      flexGrow: 1,
      "font-family": "lato",
      color: "#9c27b0",
      "font-weight": "bold"
    },
};

var global_props;

export default class Navbar extends Component {
    
    constructor (props) {
        super(props)
        global_props = props
    }

    render () {
        return (
            <div id="navbar">
            <AppBar position="static" style={styles.abar}>
              <Toolbar>
                <Typography variant="h6" color="inherit" style={styles.grow}>
                  Tru Nguyen
                </Typography>
                <Navigation/>
              </Toolbar>
            </AppBar>
          </div>
        );
    };
    
}


function Navigation (props)
{
    return (
        
            <div>
                <Button color="inherit"><Link className="link" to="/">{global_props.home}</Link></Button>
                <Button color="inherit"><Link className="link" to="/login">{global_props.login}</Link></Button>
                <Button color="inherit"><Link className="link" to="/github">{global_props.github}</Link></Button>
                <Button color="inherit"><Link className="link" to="/contact">{global_props.contact}</Link></Button>
            </div>
        
    );
}
