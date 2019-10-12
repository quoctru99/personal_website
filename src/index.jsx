import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Github from './components/Github';
import {
    BrowserRouter as Router, 
    Route,
} from 'react-router-dom';

import './styles/index.sass'

class App extends React.Component {
    render() {
        return(
        <div id="red">
            <Router>
                <div>
                    <Navbar home="Home" login="login" github="Github" contact="Contact"/>
                    <Route exact path="/" component={Home} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/github" component={Github} />
                </div>
            </Router>
        </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));