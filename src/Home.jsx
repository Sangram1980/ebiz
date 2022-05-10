import React from "react";
import Slider from './Slider';
import Card from './Card';
import Body from './Body';



const Home = () => {
  return (
    <>
      <div className='hero-slider'>
        <Slider />
      </div>
      <div className="main-card">
        
      <Card />
      </div>

      <Body/>
    </>
  );
};

export default Home;