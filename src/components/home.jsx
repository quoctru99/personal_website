import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography'
import '../styles/home.sass'


export default class Home extends Component {

    

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

function GitHub (props) {

    window.addEventListener('scroll', function() {
        // eslint-disable-next-line no-restricted-globals
        if(pageYOffset > 0) {
          document.getElementById("appbar").style.background = "white"
        } else {
            document.getElementById("appbar").style.background = "transparent"
        }
    });

    const data = props.data
    const body = data.map( (obj,i) => (
        <tr key={i}>
            <td>{obj.Repo}</td>
            <td>{obj.Language}</td>
            <td>{obj.Stars}</td>
            <td>{obj.Updated}</td>
        </tr>
        )
    )

    return (
        <div className="wrapper-table">
            <table id="git-table">
                <thead>
                    <tr>
                        <th>Repo Name</th>
                        <th>Language</th>
                        <th>Stars</th>
                        <th>Updated</th>
                    </tr>
                </thead>
                <tbody>
                    {body}
                </tbody>
            </table>
        </div>
    )
}

function Resume (props) {

    return (
        <div>
            My Resume
        </div>
    )
}