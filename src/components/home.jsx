import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography'
import ReactDOM from 'react-dom';
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
        <tr key={i} data={i} onLoad={responsive(i)}>
            <td>{i=i+1} <button onClick={moreInfo.bind(this)} className="expandButton"> </button></td>
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
                        <th>#</th>
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
        <div className="resume"> 
            <h1> My Resume </h1>
            <div id="resumeform">
                <header>
                    <h2 className="head-res">Tru Nguyen</h2>
                    <h4 className="head-res">Computer Science student</h4>
                    <br/>
                    <p>Phone: 312-208-1234</p>
                    <p>Email: tqnguy40@neiu.edu</p>
                    <p>GitHub: <a href="https://github.com/quoctru99" target="_blank"> https://github.com/quoctru99 </a></p>
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


function moreInfo (e) {

    var moreinfo = []
    var infohead = []

    var thead = document.querySelectorAll("#git-table > thead > tr > th")
        .forEach((td) => {
            if (td.style.display === "none") 
            {
                infohead.push(td)
            }
        })
    var parent = e.target.parentNode.parentNode
    parent.querySelectorAll("td")
        .forEach((td) => {
            if (td.style.display === "none") 
            {
                moreinfo.push(td)
            }
        })

    var divmore = document.createElement("tr")
    var data = moreinfo.map((item,i) => (
        <div key={i}>
            <p className="moreinfo">{infohead[i].innerText + ""} {item.innerText} </p>
        </div>
    ))

    var divmore = document.createElement("div")
    parent.after(divmore)

    ReactDOM.render(data, divmore)
    

}

function responsive (e) {
    var updated = window.matchMedia("(max-width: 1138px)")
    updated.addListener((x) => {
        if (x.matches) {
            document.querySelector("thead th:nth-child(5)").style.display = "none"
            document.querySelector(`tr[data*='${e}'] > td:nth-child(5)`).style.display = "none"
            
            document.querySelectorAll(".expandButton").forEach(x => {
                x.style.display = "inline-block"
            })

        } else {
            document.querySelector("thead th:nth-child(5)").style.display = "table-cell"
            document.querySelector(`tr[data*='${e}'] > td:nth-child(5)`).style.display = "table-cell"
           
            document.querySelectorAll(".expandButton").forEach(x => {
                x.style.display = "none"
            })
        }
    })

    var star = window.matchMedia("(max-width: 918px)")
    star.addListener((x) => {
        if (x.matches) {
            document.querySelector("thead th:nth-child(4)").style.display = "none"
            document.querySelector(`tr[data*='${e}'] > td:nth-child(4)`).style.display = "none"
        } else {
            document.querySelector("thead th:nth-child(4)").style.display = "table-cell"
            document.querySelector(`tr[data*='${e}'] > td:nth-child(4)`).style.display = "table-cell"
        }
    })

    var Language = window.matchMedia("(max-width: 757px) ")
    Language.addListener((x) => {
        if (x.matches) {
            document.querySelector("thead th:nth-child(3)").style.display = "none"
            document.querySelector(`tr[data*='${e}'] > td:nth-child(3)`).style.display = "none"
        } else {
            document.querySelector("thead th:nth-child(3)").style.display = "table-cell"
            document.querySelector(`tr[data*='${e}'] > td:nth-child(3)`).style.display = "table-cell"
        }
    })

    var repo = window.matchMedia("(max-width: 495px)")
    repo.addListener((x) => {
        if (x.matches) {
            document.querySelector("thead th:nth-child(2)").style.display = "none"
            document.querySelector(`tr[data*='${e}'] > td:nth-child(2)`).style.display = "none"
        } else {
            document.querySelector("thead th:nth-child(2)").style.display = "table-cell"
            document.querySelector(`tr[data*='${e}'] > td:nth-child(2)`).style.display = "table-cell"
        }
    })
   
}
