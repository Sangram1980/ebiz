import React from "react";
import logo from './images/logo/logoebs.png';

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
                        <div className="socialicon">
                            <span className="socialtlt"> Follow us</span>
                        </div>
                        
                        </div>
                        <div className="col-md-4 col-sm-12 col-lg-4">
                        <span className="serftrtxt"> Services</span>
                        <div className="ftrmenu">
                            <ul className="ftrulcls">
                                <li className="ftrlicls"> <a href="#">E-Commerce Development</a></li>
                                <li className="ftrlicls"> <a href="#">Website Development</a></li>
                                <li className="ftrlicls"> <a href="#">Android/iOS App Development</a></li>
                                <li className="ftrlicls"> <a href="#">Digital Marketing</a></li>
                                <li className="ftrlicls"> <a href="#">Marketplace Optimization</a></li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-md-4 col-sm-12 col-lg-4">
                        <span className="serftrtxt"> Addresses</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;