import React, { Component } from 'react';
import '../../styles/homePartsCss/ExtraInfo.sass'

export default class ExtraInfo extends Component {
    
    render() {
        return (
            <div className="information" id="infoSection">
                <div className="container">
                    <h2 className="txt-white txt-center">COOL PROJECT ?</h2>
                    <p className="txt-white txt-center">These are projects which i develope, and i find it amusing and educational. through the process of creating it, i gained more skills that enable
                    me to become a better software engineer. And moreover, it's a set of guidance for me and a step which help me and prepare me for the real world project 
                    Below are three most prefered project in my perspective. All projects are in my GITHUB!</p>
                    <div className="coolproject">
                        <div className="asmdecoder">
                            <h1 className="txt-white">AsmDecoder</h1>
                            <p className="txt-white">This project create according to the book which i read,
                            the book was written from a MIT professor. The elemental of computing was the book's title, 
                            i implemented the VMTranslator, which translate the VM code to Binary code in 16bit computer named HACK.
                            And also a binary converter, which translate Hack machine code into binary code.
                            </p>
                        </div>
                        <div className="stackrecette">
                            <h1 className="txt-white">StackRecette</h1>
                            <p className="txt-white">This project create according to the book which i read,
                            the book was written from a MIT professor. The elemental of computing was the book's title, 
                            i implemented the VMTranslator, which translate the VM code to Binary code in 16bit computer named HACK.
                            And also a binary converter, which translate Hack machine code into binary code.
                            </p>
                        </div>
                        <div className="personalweb">
                        <h1 className="txt-white">Personalweb</h1>
                        <p className="txt-white">This project create according to the book which i read,
                            the book was written from a MIT professor. The elemental of computing was the book's title, 
                            i implemented the VMTranslator, which translate the VM code to Binary code in 16bit computer named HACK.
                            And also a binary converter, which translate Hack machine code into binary code.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}