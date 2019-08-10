import ReactDOM from 'react-dom';
import React from 'react';
import '../../styles/homePartsCss/github.sass'

export default class GitHub extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            moreinfo: [],
            infohead: []
        }
    }

    s() {
        const data = this.props.data
        this.body = data.map( (obj,i) => (
            <tr key={i} data={i} className="unique">
                <td>{i=i+1} <button onClick={this.moreInfo.bind(this)} className="expandButton"> </button></td>
                <td>{obj.repo}</td>
                <td>{obj.language}</td>
                <td>{obj.star}</td>
                <td>{obj.updated}</td>
            </tr>
            )
        )
    } 

    render () {

        this.s()

        return (
            <>
                
                <div className="wrapper-table">
                    <h1 id="body-title">My Github Repo</h1>
                    
                    <div className="full-table">
                        <div className="custom_page">
                            <select name="per_page" id="per_page">
                                <option value="5">5 PER_PAGE</option>
                                <option value="10">10 PER_PAGE</option>
                                <option value="15">15 PER_PAGE</option>
                            </select>
                        </div>
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

                        <ul className="pagination" id="pagination">
                        </ul>
                    </div>
                </div>

                <div id="pagination">

                </div>
            </>
        )
    }

    moreInfo(e, renderCondition) {

        var button
        if(!e.tagName) {
            button = e.target
        } else {
            button = e


        }
        

        var more = []
        var head = []
        var childElement
        document.querySelectorAll("#git-table > thead > tr > th")
            .forEach((td) => {
                if (td.style.display === "none") 
                {
                    head.push(td)
                }
            })
        var parent = button.parentNode.parentNode
        
        if(parent.classList.contains('parent') && !renderCondition) {

            button.classList.remove("expanded")
            childElement = parent.nextSibling
            childElement.parentElement.removeChild(childElement)
            parent.classList.remove("parent")
            return;

        } else {

            if(renderCondition) {
                childElement = parent.nextSibling
                childElement.remove()
            }
            
            button.classList.add("expanded")
            parent.classList.add('parent')
            parent.querySelectorAll("td")
            .forEach((td) => {
                if (td.style.display === "none") 
                {
                    more.push(td)
                }
            })
        }
        
        var divmore = document.createElement("tr")
        divmore.setAttribute('class', 'child')
        parent.after(divmore)

        //render funciton
        
        var data = more.map((item,i) => (       
            <li data={i} key={i}>
                <span className="title">{head[i].innerText} </span>
                <span className="Data">{item.innerText}</span>
            </li>
        ))

        ReactDOM.render(
        <td colSpan={5-more.length} className="moreinfo" >
            <ul>
                {data}
            </ul>
        </td>
        , divmore)
        
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
            document.querySelectorAll(".expandButton").forEach(x => {
                if(x.classList.contains("expanded")) {
                    this.moreInfo(x, true)
                }
            }) 
    
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
            document.querySelectorAll(".expandButton").forEach(x => {
                if(x.classList.contains("expanded")) {
                    this.moreInfo(x, true)
                }
            }) 
            
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
            document.querySelectorAll(".expandButton").forEach(x => {
                if(x.classList.contains("expanded")) {
                    this.moreInfo(x, true)
                }
            }) 
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
            document.querySelectorAll(".expandButton").forEach(x => {
                if(x.classList.contains("expanded")) {
                    this.moreInfo(x, true)
                }
            }) 
        })
        stretch(repo,2)
        if(repo.matches) {
            document.querySelectorAll(".expandButton").forEach(x => {
                x.style.display = "inline-block"
            })
        }
    }

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
