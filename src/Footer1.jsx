import React, { useState } from "react";
import logo from './images/logo/logoebs.png';
import { ImLocation2 } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { CgArrowLongRightE } from "react-icons/cg";

const Footer1 = () => {
    return (
        <>
            <div className="footersection">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-12 col-lg-4">
                            <img src={logo} />
                            <div className="ftrcol1txt">
                                <span>We are committed to the best quality in the field of industrial cleaning,
                                    home and garden cleaning. We work with a passion of taking challenges.</span>
                            </div>


                        </div>
                        <div className="col-md-4 col-sm-12 col-lg-4">

                            <div className="ftrmenu">
                                <span className="serftrtxt"> Services</span>
                                <ul className="ftrulcls">
                                    <li className="ftrlicls"><span className="ftricon"><CgArrowLongRightE /></span> <a href="#">E-Commerce Development</a></li>
                                    <li className="ftrlicls"><span className="ftricon"><CgArrowLongRightE /></span> <a href="#">Website Development</a></li>
                                    <li className="ftrlicls"><span className="ftricon"><CgArrowLongRightE /></span> <a href="#">Android/iOS App Development</a></li>
                                    <li className="ftrlicls"><span className="ftricon"><CgArrowLongRightE /></span> <a href="#">Digital Marketing</a></li>
                                    <li className="ftrlicls"><span className="ftricon"><CgArrowLongRightE /></span> <a href="#">Marketplace Optimization</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 col-lg-4">
                            <span span className="serftrtxt">Address</span>
                            <div className="adrsec">
                                <div className="uaecls">
                                    <span className="uaeclstxt">UAE</span>
                                    <h5>Elevate business Solutions DMCC</h5>
                                        <span>Address: Office No: 807, Exchange Tower,
                                        Business Bay, Po Box No: 336293
                                        Dubai, United Arab Emirates</span>
                                </div>
                                <div className="uaecls">
                                    <span className="usaclstxt" id="usaclsp">USA</span>
                                    <p className="usaclsp">Elevate business Solutions DMCC
                                        Address: Office No: 807, Exchange Tower,
                                        Business Bay, Po Box No: 336293
                                        Dubai, United Arab Emirates</p>
                                </div>
                                <div className="uaecls">
                                    <span className="ukclstxt" id="usaclsp" >UK</span>
                                    <p className="ukclsp">Elevate business Solutions DMCC
                                        Address: Office No: 807, Exchange Tower,
                                        Business Bay, Po Box No: 336293
                                        Dubai, United Arab Emirates</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="ftrcpright">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-sm-12 col-lg-8">
                                <span>Copyright @2022</span>
                            </div>
                            <div className="col-md-4 col-sm-12 col-lg-4">
                                <span className="topscl"><FaFacebookF /></span>
                                <span className="topscl"><BsTwitter /></span>
                                <span className="topscl"><FaLinkedinIn /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer1;