import React, { Component } from 'react';
import Navbar from './navbar';
import './about.css';

class About extends Component {
    render(){
        return(
            <div>
                <Navbar/>
                <div className = "about-page">
                    <div className = "row m-auto">
                        <div className = "col-sm-6">
                            <div class="card about-page-card-1">
                                <div class="card-body">
                                    <h3 class="card-title mb-2">Life is precious. We have only instance to live the life to the fullest !</h3>
                                    <p class="card-text">Hence, we at Detect - A - Tumor have developed an advanced application that let's you review your MRI scan of your brain by just one click on the website. All you have to do is upload your scanned MRI image and thats it. We will convey you the results of the MRI scan. It's a second opinion of a doctor.</p>
                                </div>
                            </div> 
                        </div> 

                        <div className = "col-sm-6">
                            <div class="card about-page-card-2">
                                <div class="card-body">
                                    <h3 class="card-title mb-2">A detail look at our idea.</h3>
                                    <p class="card-text">The developed application is useful for all the customers as well as for the insurance agents. They can too verify if the reports provided by their customer are correct.</p>
                                    <br/>
                                    <p>Taking such scenarios into account, we plan to develop an application which employes ML model and uses a brain tumor image dataset to verify the prescence of the tumor. It will be used to identify the tumorous MRI scans in real time and give out the results on our web application. This project can be extended to detect the presence of Lung cancer using CT scan images of lungs.</p>
                                </div>
                            </div> 
                        </div>
                    </div>    
                </div>

                <footer className = "home-footer">
                    <p>Developed by Manovikas, Sachin, Ashwin and Ritwik.</p>
                </footer>
            </div>
        )
    }
}

export default About;