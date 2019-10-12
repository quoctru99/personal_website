import React, { Component } from 'react';
import '../../styles/homePartsCss/ExtraInfo.sass'
import flame from '../../svg/flame.svg'

export default class ExtraInfo extends Component {
    render() {
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
                            <p className="txt-white">This project create according to the book which I read,
                            the book was written from a MIT professor. The elemental of computing was the book's title, 
                            I implemented the VMTranslator, which translate the VM code to Binary code in 16bit computer named HACK.
                            And also a binary converter, which translate Hack machine code into binary code.
                            </p>
                        </div>
                        <div className="stackrecette">
                            <h1 className="txt-white txt-header">StackRecette <img id="fire" src={flame} alt=""/></h1>
                            <p className="txt-white">This project created for the final project in Moble app development,
                            which me and my friend create an app which help people create meal snack by giving the app ingredient. 
                            We wrote 2 version of it, one in android and another in IOS
                            </p>
                        </div>
                        <div className="personalweb">
                        <h1 className="txt-white txt-header">Personalweb <img id="fire" src={flame} alt=""/></h1>
                        <p className="txt-white">This project intented to be my portfolio page using React, Nodejs and Java swing.
                        it was my passion of learning new things and push me toward creation of this project, becoming a good software 
                        engineer is not easy. However, if you have the will and dedication, no matter how long it takes, it will get you there.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}