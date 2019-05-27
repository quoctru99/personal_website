import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/form.jsx';
import Home from './components/home.jsx';
import Navbar from './components/navbar';
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
                    <Route path="/login" component={Form} />
                </div>
            </Router>
        </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));