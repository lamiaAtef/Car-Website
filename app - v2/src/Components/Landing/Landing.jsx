import React from 'react'
import mainCar from "../../assets/landing-page/blueCar.png"
import style from "./Landing.module.css"
import bgImg from "../../assets/landing-page/Frame.png"

export default function Landing() {
  return (
    <>
     <img className={`${style.img_container}  `} src={bgImg}>
      </img>

      <div className="container-fluid  ms-auto mt-3 d-flex flex-sm-column flex-lg-row justify-content-between align-items-center ">
        <div className="text-center col-md-12 col-lg-4 ms-auto ">
                <h1 className=' fs-1  text-center fw-md-bolder fw-bold'>Find, book and rent a car <span className='text-primary'>Easily</span></h1>
                <p className=' my-4 text-center'>Get a car wherever and whenever you need it with your IOS and Android device.</p>
            </div>
          
            <div className={`col-md-12 col-lg-6  ms-auto  h-full  d-flex justify-content-end `}>
                <img src={mainCar} alt=""  className= {`${style.carMoving} `} />
              </div> 
            
      </div>
    </>
  )
}
