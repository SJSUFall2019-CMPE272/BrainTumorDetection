import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import BrainDiagnose from './BrainDiagnose';
import About from './about';

class Main extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route exact path="/" component={Home} />
                    <Route path="/brain" component={BrainDiagnose} />
                    <Route path = "/about" component = {About} />
                </BrowserRouter>
            </div>
        )
    }
}
export default Main;