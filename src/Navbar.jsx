import React from "react";
import logo from './images/logo/logoebs.png';


const Navbar = () => {
    return (
        <>
            
            <div className="container">

                <nav class="navbar navbar-expand-lg navbar-light bg-white">
                    <img src={logo} />
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav mlauto">
                            <li class="nav-item active">
                                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/about">About us</a>
                            </li>
                            
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="/services" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                   Services
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" href="#">Designing</a>
                                    <a class="dropdown-item" href="#">Accounting</a>
                                    <a class="dropdown-item" href="#">digital Marketing</a>
                                    <a class="dropdown-item" href="#">Development</a>
                                </div>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="/solutions">Solutions</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/contact">Contact us</a>
                            </li>
                        </ul>
                        <div className="btn btn-danger ml-auto navbtn">GET QUOTE</div>
                    </div>
                </nav>


            </div>

        </>
    );
};

export default Navbar;