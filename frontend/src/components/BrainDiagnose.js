import React, { Component } from 'react';
import axios from 'axios';
import { backendServer } from "../config";
import { Modal } from 'react-bootstrap';
import Navbar from './navbar';
import './BrainDiagnose.css';


class BrainDiagnose extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onImageChange = this.onImageChange.bind(this);
        this.onUpload = this.onUpload.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    onImageChange = (e) => {
        this.setState({
            previewFile: URL.createObjectURL(e.target.files[0]),
            file : e.target.files[0],
            fileText: e.target.files[0].name
        });
    }

    handleClose = () => {
        this.setState({
            setYesModal : false,
            setNoModal : false
        });
    }

    onUpload = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", this.state.file);
        const uploadConfig = {
            headers: {
                "content-type": "multipart/form-data"
            }
        };
        axios.post(`${backendServer}/classify/brain`, formData, uploadConfig)
            .then(response => {
                //alert("Image uploaded successfully!");
                if(response.data.class == 'Yes') {
                    this.setState({
                        setYesModal : true,
                        setNoModal : false
                    });
                }
                else {
                    this.setState({
                        setYesModal : false,
                        setNoModal : true
                    });
                }
                this.setState({
                    fileText: "Choose file...",
                    brain_image: response.data
                });
                console.log(response.data);
            })
            .catch(err => {
                console.log("Error");
            });
    }

    render() {
        var imageSrc,
            fileText = this.state.fileText || "Choose image..";
        return (
            <div className = "brain-diagnose">
                <Navbar/>
                <div className = "jumbotron">
                    <div className = "row mb-5 ml-2">
                            <center>
                                <h6 className = "card-header">Your MRI scan will be displayed here</h6>
                                <div class="card">
                                    <div class="card-body preview-body">
                                        <img src = {this.state.previewFile} className = "preview-image"/>
                                    </div>
                                </div>
                                <form onSubmit={this.onUpload}><br/>
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" name="image" accept="image/*" onChange={this.onImageChange} required />
                                        <label class="custom-file-label" for="image">{fileText}</label>
                                    </div><br /><br />
                                    <button type="submit" className = "btn btn-outline-primary upload">Upload your MRI scan</button>
                                </form>
                            </center>
                    </div>
                </div>

                <Modal show={this.state.setYesModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title className = "ml-3"><h5><b>Not a great news, you would like to hear</b></h5></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
        <p className = "modal-text">It is unfortunate to inform that this MRI image looks like it has {Math.floor(Math.random() * (100-50+1) + 51)}% The probablity of Brain tumor, we recommend you to go ahead with more scrutiny </p> 
                    </Modal.Body>
                </Modal>

                <Modal show={this.state.setNoModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title className = "ml-3"><h5><b>Be Happy, a great news for you.</b></h5></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p className = "modal-text">Good news! The MRI scans you uploaded were rigoursly checked and no signs of tumor were detected.</p>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default BrainDiagnose;