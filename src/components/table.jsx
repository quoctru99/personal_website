import ReactDOM from 'react-dom';
import React from 'react';


export default class GitHub extends React.Component{

    body

    constructor(props) {
        super(props)
        this.state = {
            moreinfo: [],
            infohead: []
        }
    }

    s() {
        window.addEventListener('scroll', function() {
            // eslint-disable-next-line no-restricted-globals
            if(pageYOffset > 0) {
              document.getElementById("appbar").style.background = "white"
            } else {
                document.getElementById("appbar").style.background = "transparent"
            }
        });
        
    
        const data = this.props.data
        this.body = data.map( (obj,i) => (
            <tr key={i} data={i} className="unique">
                <td>{i=i+1} <button onClick={this.moreInfo.bind(this)} className="expandButton"> </button></td>
                <td>{obj.Repo}</td>
                <td>{obj.Language}</td>
                <td>{obj.Stars}</td>
                <td>{obj.Updated}</td>
            </tr>
            )
        )
    } 

    render () {

        this.s()

        return (
            <div className="wrapper-table">
                <table id="git-table">
                    <thead>
                        <tr className="unique">
                            <th>#</th>
                            <th>Repo Name</th>
                            <th>Language</th>
                            <th>Stars</th>
                            <th>Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.body}
                    </tbody>
                </table>
            </div>
        )
    }

    moreInfo(e) {
        
        var more = []
        var head = []
        document.querySelectorAll("#git-table > thead > tr > th")
            .forEach((td) => {
                if (td.style.display === "none") 
                {
                    head.push(td)
                }
            })
        console.log("log", head)
        this.setState({
            infohead: head
        })
        console.log(this.state.moreinfo)
        var parent = e.target.parentNode.parentNode
        
        if(parent.classList.contains('parent')) {

            var childElement = parent.nextSibling
            childElement.parentElement.removeChild(childElement)
            parent.classList.remove("parent")
            return;

        } else {
            
            parent.classList.add('parent')
            parent.querySelectorAll("td")
            .forEach((td) => {
                if (td.style.display === "none") 
                {
                    more.push(td)
                }
            })
            console.log("log", more)
            this.setState(() => {
                return {moreinfo: more}
            })
            console.log(this.state.infohead)
        }

        var divmore = document.createElement("tr")
        divmore.setAttribute('class', 'child')
        parent.after(divmore)

        //render funciton
        if(this.state.moreinfo.length > 0) {
            var data = this.state.moreinfo.map((item,i) => (       
                <li data={i} key={i}>
                    <span className="title">{this.state.infohead[i].innerText} </span>
                    <span className="Data">{item.innerText}</span>
                </li>
            ))
        
            
        
            ReactDOM.render(
            <td colSpan={5-this.state.moreinfo.length} className="moreinfo" >
                <ul>
                    {data}
                </ul>
            </td>
            , divmore)
        }
    }
    
    componentDidMount() {
        var updated = window.matchMedia("(max-width: 1138px)")
    
        updated.addListener((x) => {
    
            if(x.matches) {
                document.querySelectorAll(".expandButton").forEach(x => {
                    x.style.display = "inline-block"
                })
    
            } else {
                document.querySelectorAll(".expandButton").forEach(x => {
                    x.style.display = "none"
                })
            }
    
            stretch(x,5)
    
    
        })
        stretch(updated,5)
        if(updated.matches) {
            document.querySelectorAll(".expandButton").forEach(x => {
                x.style.display = "inline-block"
            })
        }
        
        var star = window.matchMedia("(max-width: 918px)")
        star.addListener((x) => {
            stretch(x,4)
    
            
        })
        stretch(star,4)
        if(star.matches) {
            document.querySelectorAll(".expandButton").forEach(x => {
                x.style.display = "inline-block"
            })
        }
    
        var Language = window.matchMedia("(max-width: 757px) ")
        Language.addListener((x) => {
            stretch(x,3)
    
            if(x.matches) {
                document.querySelectorAll(".expandButton").forEach(x => {
                    x.style.display = "inline-block"
                })
            }
        })
        stretch(Language,3)
        if(Language.matches) {
            document.querySelectorAll(".expandButton").forEach(x => {
                x.style.display = "inline-block"
            })
        }
    
        var repo = window.matchMedia("(max-width: 495px)")
        repo.addListener((x) => {
            stretch(x,2)
    
            if(x.matches) {
                document.querySelectorAll(".expandButton").forEach(x => {
                    x.style.display = "inline-block"
                })
            }
        })
        stretch(repo,2)
        if(repo.matches) {
            document.querySelectorAll(".expandButton").forEach(x => {
                x.style.display = "inline-block"
            })
        }
    }

}






function addMoreInfoHtml(moreinfo, infohead, divmore) {

    

}

function stretch(z,id) {
    if (z.matches) {
        document.querySelector(`thead th:nth-child(${id})`).style.display = "none"
        document.querySelectorAll(`#git-table > tbody > tr.unique`).forEach((e) => {
            e.querySelector(`td:nth-child(${id})`).style.display = "none"
        })
    } else {
        document.querySelector(`thead th:nth-child(${id})`).style.display = "table-cell"
        document.querySelectorAll(`#git-table > tbody > tr.unique`).forEach((e) => {
            e.querySelector(`td:nth-child(${id})`).style.display = "table-cell"
        })
    }
}
