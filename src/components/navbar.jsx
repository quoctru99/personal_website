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
        flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
      "fontFamily": "lato",
      color: "#9c27b0",
      "fontWeight": "bold"
    },
};

var global_props;

class Navbar extends Component {
    
    constructor (props) {
        super(props)
        global_props = props
    }

    render () {
        return (
            <div id="navbar">
            <AppBar id="appbar" position="static" style={styles.abar}>
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
                <Link className="link" to="/">
                  <Button color="inherit">
                    <Typography className="link" variant="button" color="primary">
                      {global_props.home}
                    </Typography>
                  </Button>
                </Link>

                <Link className="link" to="/login">
                  <Button color="inherit">
                    <Typography className="link" variant="button" color="primary">
                      {global_props.login}
                    </Typography>
                  </Button>
                </Link>

                <Link className="link" to="/github">
                  <Button color="inherit">
                    <Typography className="link" variant="button" color="primary">
                      {global_props.github}
                    </Typography>
                  </Button>
                </Link>

                <Link className="link" to="/contact">
                  <Button color="inherit">
                    <Typography className="link" variant="button" color="primary">
                      {global_props.contact}
                    </Typography>
                  </Button>
                </Link>
            </div>
        
    );
}


export default Navbar;