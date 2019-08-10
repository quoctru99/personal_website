import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography'
import GitHub from './homeParts/Github'
import Footer from './homeParts/Footer';
import ExtraInfo from './homeParts/ExtraInfo';
import Recuit from './homeParts/Recuiter';
import '../styles/home.sass'




export default class Home extends Component {

    constructor (props) {
        super(props)
        this.state = {
           gitTable: []
        }
    }

    render () {
        return (
            <>
                <div className="mainground">
                    <div id="intro">
                        <Typography align='center' className="intro-text author" variant="headline" >
                            Tru Nguyen
                        </Typography>
                        <Typography align='center' className="intro-text" variant="subheading">
                        Diligent and inquisitive personality, currently study in Northeastern Illinois University as a Junior and major in Computer Science and Mathematics.
                        </Typography>
                        <div className="introButton">
                            <button onClick={(e) => this.smoothScroll(e, "#infoSection")}> <span>READ MORE</span> </button>
                            <button> <span>CONTACT</span> </button>
                        </div>
                    </div>
                    <div className="expand">
                        <Typography aling='center' className="intro-text" variant="h5">
                            Learn more about me
                        </Typography>
                        <i className="material-icons ic">expand_more</i>
                    </div>
                </div>
                <ExtraInfo/>
                <GitHub data={this.state.gitTable}/>
                <Recuit />
                <Footer/>
            </>
        );
    }

    async componentDidMount () {
        var per_page = document.getElementById("per_page")
        var val = per_page.options[per_page.selectedIndex].value
        this.getRepo(1,val)
        var numPage = await this.getUser(val)
        

        per_page.addEventListener('change', async () => {
            val = per_page.options[per_page.selectedIndex].value
            numPage = await this.getUser(val)
            this.getRepo(1,val)

            var pagination = document.getElementById("pagination")
            // if(pagination.hasChildNodes()) {
            //     pagination.removeChild()
            // }

            for(var i=numPage;i>0;i--) {
                var pagy = document.createElement("li")
                pagy.innerText = i
                pagination.appendChild(pagy)
            }
        })

        // var pagination = document.getElementById("pagination")
        // pagination.removeChild();

        // for(var i=1;i<=this.state.numPage;i++) {
        //     var pagy = document.createElement("li")
        //     pagy.innerText = i
        //     pagination.appendChild(pagy)
        // }
        
    }

    smoothScroll(e, id) {
        var ePosition = document.querySelector(id).offsetTop
        var navBarHeight = document.getElementById("navbar").offsetHeight

        this.scrollBy(ePosition-navBarHeight, 200)
    }
    scrollBy(distance, duration) {

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
    async getUser(per_page) {
        return await fetch(`http://localhost:8080/api/tru`)
            .then((res) => {
                return res.json()
            })
            .then((json) => {
                return Math.ceil(json.total/per_page)
            })
    }
    getRepo(page, per_page) {

        fetch(`http://localhost:8080/api/repo/tru?page=${page}&per_page=${per_page}`)
            .then((reponse) => {
                return reponse.json();
            })
            .then((json) => {
                this.setState({
                    gitTable: json
                })
            })
    }
}




