import React, { Component } from 'react';
import axios from 'axios';
import { backendServer } from "../config";
import { Container, Col, Row, Button, Card } from 'react-bootstrap';

class BrainDiagnose extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onImageChange = this.onImageChange.bind(this);
        this.onUpload = this.onUpload.bind(this);
    }

    onImageChange = (e) => {
        this.setState({
            file: e.target.files[0],
            fileText: e.target.files[0].name
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
                alert("Image uploaded successfully!");
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
        if (this.state) {
            imageSrc = `${backendServer}/images/brain/${this.state.brain_image}`;
        }
        return (
            <div>
                <Container fluid={true}>
                    <Row>
                        <Col xs={6} md={4}>
                            <center>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={imageSrc} />
                                    <Card.Body>
                                        <Card.Title><h3>image</h3></Card.Title>
                                    </Card.Body>
                                </Card>
                                <form onSubmit={this.onUpload}><br /><br /><br />
                                    <div class="custom-file" style={{ width: "80%" }}>
                                        <input type="file" class="custom-file-input" name="image" accept="image/*" onChange={this.onImageChange} required />
                                        <label class="custom-file-label" for="image">{fileText}</label>
                                    </div><br /><br />
                                    <Button type="submit" variant="primary">Upload</Button>
                                </form>
                            </center>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default BrainDiagnose;