import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import BrainDiagnose from './BrainDiagnose';

class Main extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route exact path="/" component={Home} />
                    <Route path="/brain" component={BrainDiagnose} />
                </BrowserRouter>
            </div>
        )
    }
}
export default Main;