import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsFillTelephoneXFill } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";


const Topheader = () => {
    return (
        <>
            <div className="topheader">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 ">
                            <h6 className="th-text">Welcome to Elevate Business Solutions</h6>
                        </div>
                        <div className="col-md-6 mob">
                            <span className="topmob"><lavel className="topicon"><BsFillTelephoneXFill /></lavel> Call for help: +971 (0)44258131 | </span>
                            <span className="topmob"><lavel className="topicon"> <MdMarkEmailRead /></lavel> Mail to us: info@elevatebs.com</span>
                        </div>
                        <div className="col-md-2 topscl ">
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

export default Topheader;