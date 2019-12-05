import React, { Component } from 'react';
import Navbar from './navbar';
import './home.css';
import Person1 from './person2.jpg';
import Person2 from './person4.jpg';
import { Modal } from 'react-bootstrap';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setModal : false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleModal = this.handleModal.bind(this);
    }
    componentWillMount(){
        document.title = "Brain Tumor Detection";
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.name
        });
    }

    handleModal = () => {
        this.setState({
            setModal : true
        });
    }

    handleClose = () => {
        this.setState({
            setModal : false
        });
    }


    render() {
        return (
            <div className = "home">
                <Navbar/>
                <div className = "home-1">
                    <div className = "row m-auto">
                    <div className = "col-sm-12">
                            <div class="card homepage-card-1">
                                <div class="card-body">
                                    <h5 class="card-title">Are you an insurance company ?</h5>
                                    <hr/>
                                    <p class="card-text">We are providing the technology to verify and streamline customer health insurance claims.</p>
                                    <a href="/about" class="btn btn-outline-secondary">Learn more</a>
                                </div>
                            </div> 
                        </div>
                        <div className = "col-sm-12">
                            <div class="card homepage-card-1">
                                <div class="card-body">
                                    <h5 class="card-title">Want a second opinion ?</h5>
                                    <hr/>
                                    <p class="card-text">We have a new technology. Scan your MRI scan images and get confirmation of the tumor. We guarantee we will give the best results</p>
                                    <a href="/about" class="btn btn-outline-secondary">Learn more</a>
                                </div>
                            </div> 
                        </div> 
                    </div>
                </div>
                <br/>
                <br/>

                <hr/>
                <hr/>

                <br/>
                <br/>

                <div className = "home-2">
                    <div className = "row m-auto">
                        <div className = "col-sm-6">
                            <div class="card homepage-card-2">
                                <div class="card-body">
                                    <h5 class="card-title">Worried about future ? </h5>
                                    <hr/>
                                    <p class="card-text">Get you tumor scan results reviewed today itself with our new tumor detection application. Want to check ? Click on the below link.</p>
                                    <a href="/brain" class="btn btn-outline-primary">Review the scan results</a>
                                </div>
                            </div>      
                        </div>
                    </div>
                </div>

                <br/>
                <br/>

                <hr/>
                <hr/>

                <br/>
                <br/>

                <div className = "home-3">
                    <div className = "row m-auto">
                        <div className = "col-sm-6">
                            <div class="card homepage-card-3">
                                <div class="card-body">
                                    <div className = "row">
                                        <div className = "col-sm-4 mt-3">
                                            <img src = {Person1} className = "portrait-1"></img>
                                        </div>    
                                        <div className = "col-sm-8">
                                            <div className = "col-sm-12">
                                                <p><b>Name:</b><i> Marie Brooks</i></p>
                                            </div>
                                            <div className = "col-sm-12">
                                                <p><b>Age:</b><i> 30</i></p>
                                            </div>
                                            <div className = "col-sm-12">
                                                <p><b>Experience:</b><i> The service provided by Detect - A - Tumor was really great. The application is fast and highly useful. I used it for reviewing my mother's brain tumor MRI scans. It was like taking a second opinion. It actually displayed whether my mother had tumor, with a percentage of possibility.</i></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>      
                        </div>

                        <div className = "col-sm-6">
                            <div class="card homepage-card-3">
                                <div class="card-body">
                                    <div className = "row">
                                        <div className = "col-sm-4 mt-3">
                                            <img src = {Person2} className = "portrait-2"></img>
                                        </div>    
                                        <div className = "col-sm-8">
                                            <div className = "col-sm-12">
                                                <p><b>Name:</b><i>Daniel Smith</i></p>
                                            </div>
                                            <div className = "col-sm-12">
                                                <p><b>Age:</b><i>45</i></p>
                                            </div>
                                            <div className = "col-sm-12">
                                                <p><b>Experience:</b><i>I was completely satisfied with the facility provided by Detect - A - Tumor. Initially, I was bit scared when my docter advised me to undergo MRI scans. But, with so handy application, I was relieved seeing the positive results. </i></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>      
                        </div>

                        <div className = "col-sm-12">
                            <div className = "card button-card mt-4">
                                <div class = "card-body">
                                    <button className = "btn btn-outline-primary feedback-button" onClick = {this.handleModal} type = "button">Share your feedback</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Modal show={this.state.setModal} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title className="ml-3"><h5><b>Reply to</b></h5></Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1"><b>Name</b></span>
                                </div>
                                <input type="text" name="Name" className="form-control" aria-label="Name" aria-describedby="basic-addon1" onChange={this.handleChange} pattern="^[A-Za-z ]{1,20}$" title="Please enter your name"/>
                            </div>

                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1"><b>Age</b></span>
                                </div>
                                <input type="text" name="Age" className="form-control" aria-label="Age" aria-describedby="basic-addon1" onChange={this.handleChange} title="Please enter your age"/>
                            </div>

                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1"><b>Email</b></span>
                                </div>
                                <input type="email" name="email_id" className="form-control" aria-label="Email" aria-describedby="basic-addon1" onChange={this.handleChange} pattern="^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$'%&*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])$" title="Please enter a valid email address" required />
                            </div>

                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1"><b>Your Experience</b></span>
                                </div>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange = {this.handleChange} name = "exp_text" placeholder= "Share your experiences"></textarea>
                            </div>
                            <button className = "btn btn-outline-primary submit-feedback-button" >Submit</button>
                            </Modal.Body>
                        </Modal>
                </div>
                <br/>
                <br/>

                <footer className = "home-footer">
                    <p>Developed by Manovikas, Sachin, Ashwin and Ritwik.</p>
                </footer>
            </div>
        )
    }
}
//export Login Component
export default Home;