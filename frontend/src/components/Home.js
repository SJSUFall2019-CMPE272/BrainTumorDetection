import React, { Component } from 'react';

class Home extends Component {
    componentWillMount(){
        document.title = "Brain Tumor Detection";
    }
    render() {
        return (
            <div>
                Brain Tumor Detection
            </div>
        )
    }
}
//export Login Component
export default Home;