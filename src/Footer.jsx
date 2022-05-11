import React from "react";
import logo from './images/logo/logoebs.png';
import { ImLocation2 } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { CgArrowLongRightE } from "react-icons/cg";

const Footer = () => {
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
                                    <li className="ftrlicls"><span className="ftricon"><CgArrowLongRightE/></span> <a href="#">E-Commerce Development</a></li>
                                    <li className="ftrlicls"><span className="ftricon"><CgArrowLongRightE/></span> <a href="#">Website Development</a></li>
                                    <li className="ftrlicls"><span className="ftricon"><CgArrowLongRightE/></span> <a href="#">Android/iOS App Development</a></li>
                                    <li className="ftrlicls"><span className="ftricon"><CgArrowLongRightE/></span> <a href="#">Digital Marketing</a></li>
                                    <li className="ftrlicls"><span className="ftricon"><CgArrowLongRightE/></span> <a href="#">Marketplace Optimization</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 col-lg-4">
                        <div className="ftrmenu">
                            <span className="serftrtxt"> Quick Links</span>
                                <ul className="ftrulcls">
                                    <li className="ftrlicls"><span className="ftricon"><CgArrowLongRightE/></span> <a href="#">E-Commerce Development</a></li>
                                    <li className="ftrlicls"><span className="ftricon"><CgArrowLongRightE/></span> <a href="#">Website Development</a></li>
                                    <li className="ftrlicls"><span className="ftricon"><CgArrowLongRightE/></span> <a href="#">Android/iOS App Development</a></li>
                                    <li className="ftrlicls"><span className="ftricon"><CgArrowLongRightE/></span> <a href="#">Digital Marketing</a></li>
                                    <li className="ftrlicls"><span className="ftricon"><CgArrowLongRightE/></span> <a href="#">Marketplace Optimization</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className="ftrsndrow">
                    <h4 className="serftrtxt text-white"> Addresses</h4>
                    <div className="row ftrsndrow">
                    
                        <div className="col-md-2 col-lg-2 col-sm-12 ftrbrd">
                        <span className="adrhd">Elevate Accounting & Auditing DMCC</span>
                                <p className="ftrsndtxt"><span className="ftricon"><ImLocation2 /></span> Office No: 807, Exchange Tower,
                                    Business Bay, Po Box No: 336293
                                    Dubai, United Arab Emirates</p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-sm-12 ftrbrd">
                            <div className="ftrsndhd">
                            <span className="adrhd">Elevate business Solutions DMCC</span>
                            </div>
                        
                                <p className="ftrsndtxt"><span className="ftricon"><ImLocation2 /></span>
                                    Office No: 1203, HDS Business Center, Cluster M, Jumeirah Lakes Towers,
                                    Dubai, United Arab Emirates,(License No DMCC 402183)</p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-sm-12 ftrbrd">
                        <div className="ftrsndhd">
                        <span className="adrhd">Elevate Global Pvt Ltd <br/></span>
                        </div>
                        
                                <p className="ftrsndtxt"><span className="ftricon"><ImLocation2 /></span>Plot no: GA 161, First Floor, Gayatri Vihar,Infocity Ave, Near Patia Chowk, Patia
                                    Bhubaneswar , Odisha, India – 751024</p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-sm-12 ftrbrd">
                        <div className="ftrsndhd">
                        <span className="adrhd">Elevate International Business Solutions LTD</span>
                        </div>
                        
                                <p className="ftrsndtxt"><span className="ftricon"><ImLocation2 /></span>Kemp House, 160 City Road, London, EC1V 2NX, UNITED KINGDOM.(Company Number 14051546)</p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-sm-12 ftrbrd">
                        <div className="ftrsndhd">
                        <span className="adrhd">Elevate International Business Solutions LLC</span>
                        </div>
                        
                                <p className="ftrsndtxt"><span className="ftricon"><ImLocation2 /></span>105 N 1st St., #429, San Jose, California 95103, UNITED STATE
                                </p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-sm-12">
                        <div className="ftrsndhd">
                        <span className="serftrtxt"> Follow us</span>
                        </div>
                        
                        <div className="ftrsndscl">
                        <span className="topscl"><FaFacebookF /></span>
                            <span className="topscl"><BsTwitter/></span>
                            <span className="topscl"><FaLinkedinIn/></span>
                        </div>
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
                            <span className="topscl"><BsTwitter/></span>
                            <span className="topscl"><FaLinkedinIn/></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;