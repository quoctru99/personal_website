import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Navigation from './navbarPart/Navigation'
import React, { Component } from 'react';
import '../styles/navbar.sass'



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

export default function Navbar(props) {

  window.addEventListener('scroll', function() {
      if(window.pageYOffset > 0) {
        document.getElementById("appbar").style.background = "white"
      } else {
          document.getElementById("appbar").style.background = "transparent"
      }
  });

  return (
      <div id="navbar">
      <AppBar id="appbar" position="static" style={styles.abar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" style={styles.grow}>
            Tru Nguyen
          </Typography>
          <Navigation data={props} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
    