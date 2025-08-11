import React from 'react'
import volve from "../../assets/landing-page/volvo.png"
import nissan from "../../assets/landing-page/nissan.png"
import jaguar from "../../assets/landing-page/jaguar.png"
import audi from "../../assets/landing-page/audi.png"
import ac from "../../assets/landing-page/ac.png"


export default function Carousel() {
  return (
    <>
      
            <div className="container carousel-inner d-flex justify-content-between flex-md-row flex-sm-column  my-5  ">
                    <img src={volve} alt="Los Angeles"  />
                    <img src={nissan} alt="Chicago"  />
                    <img src={jaguar} alt="New York" />
                    <img src={audi} alt="New York" />
                    <img src={ac} alt="New York" />
            </div>


      
    </>
  )
}
