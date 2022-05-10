import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";

const Topheader = () => {
    return (
        <>
            <div className="topheader">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 ">
                            <h6 className="th-text">Welcome to Elevate Business Solutions</h6>
                        </div>
                        <div className="col-md-6 scl">
                            <span><AiFillPhone /> Call for help: +971 (0)44258131 | </span>
                            <span> <BsFillCreditCard2FrontFill /> Mail to us: info@elevatebs.com</span>
                        </div>
                        <div className="col-md-2 ">
                            <span><FaFacebookF /></span>
                        </div>

                    </div>
                </div>


            </div>

        </>
    );
};

export default Topheader;