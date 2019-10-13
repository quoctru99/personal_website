import React, { Component, useEffect } from 'react';
import Typography from '@material-ui/core/Typography'
import Footer from './homeParts/Footer';
import Recuit from './homeParts/Recuiter';
import '../styles/home.sass';
import flame from '../svg/flame.svg'
import Bound from 'bounds.js';
import '../styles/homePartsCss/ExtraInfo.sass'

export default function Home () {
    useEffect( () => {
        window.scroll(0,0)
        const boundary = Bound({
            margins: { bottom: 100 }
        })
        const projects = document.querySelector(".coolproject")

        boundary.watch(projects, () => {
            projects.classList.add("smoothTopDown")
            boundary.unWatch(projects)
        })
    })

    return (
        <>
            <div className="mainground">
                <div id="intro" className="smoothTopDown">
                    <Typography align='center' className="intro-text author"  >
                        Tru Nguyen
                    </Typography>
                    <Typography align='center' className="intro-text">
                    Diligent and inquisitive personality, currently study in Northeastern Illinois University as a Junior and major in Computer Science and Mathematics.
                    </Typography>
                    <div className="introButton">
                        <button onClick={(e) => smoothScroll(e, "#infoSection")}> <span>READ MORE</span> </button>
                        <button> <span>CONTACT</span> </button>
                    </div>
                </div>
                <div className="expand">
                    <Typography aling='center' className="intro-text">
                        Learn more about me
                    </Typography>
                    <i className="material-icons ic" onClick={(e) => smoothScroll(e, "#infoSection")}>expand_more</i>
                </div>
            </div>
            <ExtraInfo/>
            <Recuit />
            <Footer/>
        </>
    );
}

function ExtraInfo (props) {
    return (
        <div className="information" id="infoSection">
            <div className="container">
                <h1 className="txt-white txt-center" style={{letterSpacing:"1px",fontSize:"25px", fontFamily:"Permanent Marker"}}>COOL PROJECT ?</h1>
                <p className="txt-white txt-center">These are projects which i develope, and i find it amusing and educational. through the process of creating it, i gained more skills that enable
                me to become a better software engineer. And moreover, it's a set of guidance for me and a step which help me and prepare me for the real world project 
                Below are three most prefered project in my perspective. <strong>All projects are in my GITHUB!</strong></p>
                <div className="coolproject">
                    <div className="asmdecoder">
                        <h1 className="txt-white txt-header">AsmDecoder <img id="fire" src={flame} alt=""/></h1>
                        <div className="svg-icon ad"></div>
                        <p className="pro-descrip">In this project I implemented the VMTranslator,
                        which translate the VM code to Binary code in 16bit computer named HACK.
                        And a binary converter,
                        which translate Hack machine code into binary code.
                        </p>
                    </div>
                    <div className="stackrecette">
                        <h1 className="txt-white txt-header">StackRecette <img id="fire" src={flame} alt=""/></h1>
                        <div className="svg-icon sr"></div>
                        <p className="pro-descrip">this project created for the final project in moble app development,
                        which me and my friend create an app which help people create meal snack by giving the app ingredient. 
                        </p>
                    </div>
                    <div className="personalweb">
                    <h1 className="txt-white txt-header">Personalweb <img id="fire" src={flame} alt=""/></h1>
                    <div className="svg-icon pw"></div>
                    <p className="pro-descrip">This project intented to be my portfolio page using React, Nodejs and Java swing.
                    it was my passion of learning new things and push me toward creation of this project.
                        </p>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    )
}

function smoothScroll(e, id) {
    var ePosition = document.querySelector(id).offsetTop
    var navBarHeight = document.getElementById("navbar").offsetHeight

    scrollBy(ePosition-navBarHeight, 200)
}

function scrollBy(distance, duration) {

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




