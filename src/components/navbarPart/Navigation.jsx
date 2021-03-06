import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import menuIcon from '../../svg/menu.svg';
import Typography from '@material-ui/core/Typography';
import {
    Link,
} from 'react-router-dom';

export default class Navigation extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            clicked: false
        }
    }

    render() {
        return (
            <div id="nav-select">
                <img id="menu" src={menuIcon} alt=""  style={{display: "none"}} onClick={this.showMenu.bind(this)}/>
                    <div className="sideNav" style={{width: `${this.state.clicked ? "100%" : "0%"}`}}>
                        <Link className="sideLink" to="/" onClick={this.showMenu.bind(this)}>Home</Link>
                        <Link className="sideLink" to="/github" onClick={this.showMenu.bind(this)}>Github</Link>
                        <Link className="sideLink" to="/contact" onClick={this.showMenu.bind(this)}>Contact</Link>
                    </div>
                
                <Link className="link" to="/">
                  <Button color="inherit">
                    <Typography className="link" variant="button" color="primary">
                      {this.props.data.home}
                    </Typography>
                  </Button>
                </Link>
                <Link className="link" to="/github">
                  <Button color="inherit">
                    <Typography className="link" variant="button" color="primary">
                      {this.props.data.github}
                    </Typography>
                  </Button>
                </Link>

                <Link className="link" to="/contact">
                  <Button color="inherit">
                    <Typography className="link" variant="button" color="primary">
                      {this.props.data.contact}
                    </Typography>
                  </Button>
                </Link>
            </div>
        )
    }

    showMenu () {
        if(this.state.clicked) {
            this.setState({ 
                clicked: false
            })
        }
        else{
            this.setState({ 
                clicked: true
            })
        }
    }
}