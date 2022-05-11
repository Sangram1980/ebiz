import React from "react";
import img1 from './images/image1.jpg';
import img2 from './images/image2.jpg';
import img3 from './images/image3.jpg';
import img4 from './images/image4.jpg';



const Card = () => {

    
    return (
        <>
            <div className="card-section">

                <div class="container">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            
                                <h2> <span className="card-title">Why Choose Us ?
                                    <p className="cardp">
                                        Our agency & Our team have designed game changing products.
                                    </p></span>
                                </h2>
                            
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 mcard">
                            <div className="inrcard">
                                <div className="cardimage">
                                    <img src={img1} />
                                </div>
                                <div className="cardbody">
                                    <h4>Website Development</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.

                                    </p>
                                </div>
                                <div className="cardbtn">
                                    <button className="btn btn-primary">Read More</button>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 mcard">
                            <div className="inrcard">
                                <div className="cardimage">
                                    <img src={img2} />
                                </div>
                                <div className="cardbody">
                                    <h4>E-Commerce Development</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.

                                    </p>
                                </div>
                                <div className="cardbtn">
                                    <button className="btn btn-primary">Read More</button>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 mcard">
                            <div className="inrcard">
                                <div className="cardimage">
                                    <img src={img3} />
                                </div>
                                <div className="cardbody">
                                    <h4>Digital Marketing</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.

                                    </p>
                                </div>
                                <div className="cardbtn">
                                    <button className="btn btn-primary">Read More</button>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 mcard">
                            <div className="inrcard">
                                <div className="cardimage">
                                    <img src={img4} />
                                </div>
                                <div className="cardbody">
                                    <h4>Marketplace Optimization</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.

                                    </p>
                                </div>
                                <div className="cardbtn">
                                    <button className="btn btn-primary">Read More</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
};

export default Card;