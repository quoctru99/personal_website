import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography'
import GitHub from './table'
import '../styles/home.sass'




export default class Home extends Component {

    // constructor (props) {
    //     super(props)
    //     this.state = {
    //         moreinfo: [],
    //         infohead: []
    //     }
    // }

    test = [
        {Repo: "personal_website", Language: "javascript", Stars: "2", Updated: "14 mins"},
        {Repo: "StackRecetee", Language: "java", Stars: "1", Updated: "13 days"},
        {Repo: "db_app", Language: "java", Stars: "1", Updated: "14 days"},
        {Repo: "ahem_email", Language: "typescript", Stars: "5", Updated: "Mar 8"},
        {Repo: "recyclerview", Language: "java", Stars: "4", Updated: "Feb 24"},
        {Repo: "revertImage", Language: "javascript", Stars: "1", Updated: "Dec 28, 2018"}
    ]

    render () {
        return (
            <div>
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
                    <div className="expand">
                        <Typography aling='center' className="intro-text" variant="h5">
                            Learn more about me
                        </Typography>
                        <i className="material-icons ic">expand_more</i>
                    </div>
                </div>
                <GitHub data={this.test}/>
                <Resume/>
            </div>
        );
    }
}

function Resume (props) {

    return (
        <div className="resume"> 
            <h1> My Resume </h1>
            <div id="resumeform">
                <header>
                    <h2 className="head-res">Tru Nguyen</h2>
                    <h4 className="head-res">Computer Science student</h4>
                    <br/>
                    <p>Phone: 312-208-1234</p>
                    <p>Email: tqnguy40@neiu.edu</p>
                    <p>GitHub: <a href="https://github.com/quoctru99" target="_blank" rel="noopener noreferrer"> https://github.com/quoctru99 </a></p>
                </header>
                    <hr/>
                <section>
                    <h1>Education : </h1>
                        <p>School: Northeastern Illinois University</p>
                        <p>Major: Computer Science</p>
                        <p>GPA: 3.55</p>
                    <h1>Briefly about skills : </h1>
                        <p>Java, Python, Nodejs, PHP</p>
                    <h1>Experience : </h1>
                        <p>Full Stack Developer – websites (ctvface.com)</p>
                        <p>Internship at Hu-Friedy</p>
                </section>
            </div>
        </div>
    )
}




