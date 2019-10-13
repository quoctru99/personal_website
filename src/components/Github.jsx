import React, {useEffect, useState} from 'react';
import arrow from '../svg/arrow.svg'
import '../styles/homePartsCss/github.sass'
import moment from 'moment';
import Footer from './homeParts/Footer';


export default function Github () {

    const [data, setData] = useState([
        {repo: "personal_website", language: "javascript", stars: "2", updated: "14 mins"},
        {repo: "StackRecetee", language: "java", stars: "1", updated: "13 days"},
        {repo: "db_app", language: "java", stars: "1", updated: "14 days"},
        {repo: "ahem_email", language: "typescript", stars: "5", updated: "Mar 8"},
        {repo: "recyclerview", language: "java", stars: "4", updated: "Feb 24"},
        {repo: "revertImage", language: "javascript", stars: "1", updated: "Dec 28, 2018"}
    ])
    const [numPage, setNumPage] = useState(0)
    const [currPage, setCurrPage] = useState(0)
    const [per_page, setPer_page] = useState(0)

    console.log(numPage, currPage, per_page)
    console.log(data)
    useEffect( () => {
        window.scroll(0,0)
        //var per_page = document.getElementById("per_page")
        //var val = per_page.options[per_page.selectedIndex].value
        //getRepo(1,val, setting)
        //await getUser(val, settingp)

        //per_page.addEventListener('change', async () => {
            //val = per_page.options[per_page.selectedIndex].value
            //await getUser(val, setting)
            //getRepo(1,val, setting)
        //})
    })
    var foot = () => {
        var e = []
        for (let i = 1;i<=numPage;i++) {
            e.push(<li key={i} >{i}</li>)
        }

        return (e)
    }

    var body = data.map( (obj,i) => (
        <tr key={i} data={i} className="unique">
            <td>{i=(i+1)+(currPage-1)*per_page}</td>
            <td>{obj.repo}</td>
            <td>{obj.language}</td>
            <td>{obj.star}</td>
            <td>{moment(obj.updated,"YYYY-MM-DD HH:mm::ss Z").calendar()}</td>
        </tr>
        )
    )

    return (
        <>
            <div className="wrapper-table">
                <div className="full-table">
                <h1 id="body-title" className="titleres">My Github Repo</h1>       
                    <table id="git-table">
                        <thead>
                            <td >
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
                            {body}
                        </tbody>
                        <tfoot align="right">
                            <td colSpan="5">
                                <ul className="pagination" id="pagination">
                                    <li id="arrow"><img src={arrow} alt="" /></li>
                                    {foot()}
                                    <li id="arrow" className="arrow-right"><img src={arrow} alt="" /></li>
                                </ul>
                            </td>
                        </tfoot>
                    </table>
                </div>
            </div>

            <div id="pagination">
            </div>
            <Footer/>
        </>
    )
}

//async function componentDidMount () {
    //var per_page = document.getElementById("per_page")
    //var val = per_page.options[per_page.selectedIndex].value
    //this.getRepo(1,val)
    //await this.getUser(val)

    //per_page.addEventListener('change', async () => {
        //val = per_page.options[per_page.selectedIndex].value
        //await this.getUser(val)
        //this.getRepo(1,val)
    //})
//}

function changePage(e, i) {
    var per_page = document.getElementById("per_page")
    var val = per_page.options[per_page.selectedIndex].value
        
    //getRepo(e+"",val)S
}

async function getUser(per_page, setting) {
    const {setNumPage, setPer_page} = setting
    return await fetch(`http://localhost:8080/api/tru`)
        .then((res) => {
            return res.json()
        })
        .then((json) => {
            setNumPage(Math.ceil(json.total/per_page))
            setPer_page(per_page)
        })
}

function getRepo(page, per_page, setting) {
    const {setData, setCurrPage, setPer_page} = setting
    fetch(`http://localhost:8080/api/repo/tru?page=${page}&per_page=${per_page}`)
        .then((reponse) => {
            return reponse.json();
        })
        .then((json) => {
            setData(json)
            setCurrPage(page)
            setPer_page(per_page)
        })
}