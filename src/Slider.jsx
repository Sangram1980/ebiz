import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import img1 from './images/image1.jpg';
import img2 from './images/image2.jpg';
import img3 from './images/image3.jpg';



const Slider = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className="fstsldsec">
                        <h3>An Idea is Enough
                            <br/> To Develop
                        </h3>
                        <p>Expert in Web Development & Android/iOS App Development.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                    <div className="sndsldsec">
                        <h3>E - Commerce <br/>Development</h3>
                        <p>Sell your products online safe & secure<br/>With Elevate Business Solutions.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                    <div className="trdsldsec">
                        <h3>Elevate - One Stop Solution<br/>
                        For Your Business</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </>
    );
};

export default Slider;