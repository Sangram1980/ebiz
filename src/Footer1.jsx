import React, { useState } from "react";
import logo from './images/logo/logoebs.png';
import { ImLocation2 } from "react-icons/im";
import { CgArrowLongRightE } from "react-icons/cg";
import { addressdata, listdata, smdata } from "./Footerdata";

const Footer1 = () => {
    const [ctitle, setCtitle] = useState(addressdata[0].ctitle);
    const [cdetails, setCdetails] = useState(addressdata[0].cdetails);

    const publish = (event) => {
        const value = event.target.value;

        if (value === "UAE") {
            setCtitle(addressdata[0].ctitle);
            setCdetails(addressdata[0].cdetails);
        }
        else if (value === "USA") {
            setCtitle(addressdata[1].ctitle);
            setCdetails(addressdata[1].cdetails);
        }
        else if (value === "UK") {
            setCtitle(addressdata[2].ctitle);
            setCdetails(addressdata[2].cdetails);
        }
    }
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
                                    {
                                        listdata.map((val) => {
                                            return (
                                                <li className="ftrlicls">
                                                    <span className="ftricon">
                                                        <CgArrowLongRightE />
                                                    </span>
                                                    <a href="#">{val}</a>
                                                </li>
                                            );
                                        })
                                    }                                     </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 col-lg-4">
                            <span span className="serftrtxt">Address</span>
                            <div className="adrsec">
                                {
                                    addressdata.map((val) => {
                                        return (
                                            <button
                                                type="button"
                                                class="btn btn-link"
                                                onClick={publish}
                                                value={val.id}>
                                                {val.id}
                                            </button>
                                        );
                                    })
                                }
                            </div>
                            <h5>{ctitle}</h5>
                            <p>{cdetails}</p>
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
                                {
                                    smdata.map((val) => {
                                        return (
                                            <span className="topscl">
                                                <a href={val.link}>{val.icon}</a>
                                            </span>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer1;