import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography'
import GitHub from './homeParts/Github'
import Footer from './homeParts/Footer';
import ExtraInfo from './homeParts/ExtraInfo';
import Recuit from './homeParts/Recuiter';
import '../styles/home.sass'




export default class Home extends Component {

    render () {
        return (
            <>
                <div className="mainground">
                    <div id="intro">
                        <Typography align='center' className="intro-text author" variant="headline" >
                            Tru Nguyen
                        </Typography>
                        <Typography align='center' className="intro-text" variant="subheading">
                        Diligent and inquisitive personality, currently study in Northeastern Illinois University as a Junior and major in Computer Science and Mathematics.
                        </Typography>
                        <div className="introButton">
                            <button onClick={(e) => this.smoothScroll(e, "#infoSection")}> <span>READ MORE</span> </button>
                            <button> <span>CONTACT</span> </button>
                        </div>
                    </div>
                    <div className="expand">
                        <Typography aling='center' className="intro-text" variant="h5">
                            Learn more about me
                        </Typography>
                        <i className="material-icons ic" onClick={(e) => this.smoothScroll(e, "#infoSection")}>expand_more</i>
                    </div>
                </div>
                <ExtraInfo/>
                <GitHub/>
                <Recuit />
                <Footer/>
            </>
        );
    }

    componentDidMount() {
        window.scroll(0,0)
    }

    smoothScroll(e, id) {
        var ePosition = document.querySelector(id).offsetTop
        var navBarHeight = document.getElementById("navbar").offsetHeight

        this.scrollBy(ePosition-navBarHeight, 200)
    }
    scrollBy(distance, duration) {

        var initialY = document.body.scrollTop;
        var y = initialY + distance;
        var baseY = (initialY + y) * 0.5;
        var difference = initialY - baseY;
        var startTime = performance.now();
    
        function step() {
            var normalizedTime = (performance.now() - startTime) / duration;
            if (normalizedTime > 1) normalizedTime = 1;
    
            window.scrollTo(0, baseY + difference * Math.cos(normalizedTime * Math.PI));
            if (normalizedTime < 1) window.requestAnimationFrame(step);
        }
        window.requestAnimationFrame(step);
    }
    
}




