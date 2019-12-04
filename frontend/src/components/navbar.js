import React, { Component } from 'react';
import './navbar.css';
import BrainImage from './brain.png';

class Nav extends Component {
    render() {
        return (
            <div className = "brain-navbar">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="/"><p className = "heading-1">Home</p><span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/about"><p className = "heading-2">About</p></a>
                            </li>
                            <div className = "row col-sm-12 navrow">
                                <a class="navbar-brand" href="#">
                                    <div className = "col-sm-6">
                                        <img src = {BrainImage} className = "tumor-image ml-4"/>
                                    </div>
                                    <div className = "col-sm-6">
                                        <p className = "header"><b>Detect - A - Tumor</b></p>
                                    </div>
                                </a>
                            </div>
                            
                         </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2 mt-4 mr-5" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success mt-4 mr-5" type="submit">Search</button>
                        </form>
                    </div>
                </nav>   
            </div>
        )
    }
}

export default Nav;