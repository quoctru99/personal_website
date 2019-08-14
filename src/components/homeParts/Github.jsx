import ReactDOM from 'react-dom';
import React from 'react';
import arrow from '../../svg/arrow.svg'
import '../../styles/homePartsCss/github.sass'
import moment from 'moment';

export default class GitHub extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            gitTable: [],
            numPage: 0,
            currPage: 0,
            per_page: 0,
        }
    }

    s() {
        
        const data = this.state.gitTable
        const numPage = this.state.numPage
        const currPage = this.state.currPage
        const per_page = this.state.per_page
        console.log()
        this.foot = () => {
            var e = []
            for (let i = 1;i<=numPage;i++) {
                e.push(<li key={i} onClick={this.changePage.bind(this, i)} >{i}</li>)
            }

            return (e)
        }

        this.body = data.map( (obj,i) => (
            <tr key={i} data={i} className="unique">
                <td>{i=(i+1)+(currPage-1)*per_page} <button onClick={this.moreInfo.bind(this)} className="expandButton"> </button></td>
                <td>{obj.repo}</td>
                <td>{obj.language}</td>
                <td>{obj.star}</td>
                <td>{moment(obj.updated,"YYYY-MM-DD HH:mm::ss Z").calendar()}</td>
            </tr>
            )
        )
    } 

    render () {

        this.s()

        return (
            <>
                
                <div className="wrapper-table">
                    <h1 id="body-title" className="titleres">My Github Repo</h1>
                    
                    <div className="full-table">
                        
                        <table id="git-table" align="center">
                            
                            <thead>
                                <td colSpan="5">
                                    
                                    <div className="custom_page">
                                        <select name="per_page" id="per_page">
                                            <option value="5">5 PER_PAGE</option>
                                            <option value="10">10 PER_PAGE</option>
                                            <option value="15">15 PER_PAGE</option>
                                        </select>
                                    </div>
                                    
                                </td>

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

                            <tfoot align="right">
                                <td colSpan="5">
                                    <ul className="pagination" id="pagination">
                                        <li id="arrow"><img src={arrow} alt="" /></li>
                                        {this.foot()}
                                        <li id="arrow" className="arrow-right"><img src={arrow} alt="" /></li>
                                    </ul>
                                </td>
                            </tfoot>
                        </table>

                        
                    </div>
                </div>

                <div id="pagination">

                </div>
            </>
        )
    }

    async componentDidMount () {
        var per_page = document.getElementById("per_page")
        var val = per_page.options[per_page.selectedIndex].value
        this.getRepo(1,val)
        await this.getUser(val)
        

        per_page.addEventListener('change', async () => {
            val = per_page.options[per_page.selectedIndex].value
            await this.getUser(val)
            this.getRepo(1,val)
        })
    }

    changePage(e, i) {
        var per_page = document.getElementById("per_page")
        var val = per_page.options[per_page.selectedIndex].value
        
        this.getRepo(e+"",val)
    }

    async getUser(per_page) {
        return await fetch(`http://localhost:8080/api/tru`)
            .then((res) => {
                return res.json()
            })
            .then((json) => {
                this.setState({
                    numPage: Math.ceil(json.total/per_page),
                    per_page: per_page
                })
            })
    }
    getRepo(page, per_page) {

        fetch(`http://localhost:8080/api/repo/tru?page=${page}&per_page=${per_page}`)
            .then((reponse) => {
                return reponse.json();
            })
            .then((json) => {
                this.setState({
                    gitTable: json,
                    currPage: page,
                    per_page: per_page
                })
            })
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
    
}