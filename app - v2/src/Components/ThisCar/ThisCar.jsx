import React from 'react'
import { Link, useLocation } from 'react-router-dom';
// import style from "./ThisCar.module.css"
import ac from "../../assets/card/ac.png"
import user from "../../assets/card/user.png"
import auto from "../../assets/card/Frame.png"
import doors from "../../assets/card/doors.png"

export default function ThisCar() {
   const location = useLocation();
  const state = location.state;
  
  return (
    <>
         <div className={`container-fluid  vh-100 `}>
          <ul className="navigation list-unstyled m-5">
                <li>
                    
                    <Link to="/"> Home </Link>
                     <span > / </span>
                    <Link to="/allCars"> cars </Link>
                    <span > /  Car Details</span>


                </li>
            </ul>
        <div className={`container-fluid d-flex bg_img  `}>
          <div className='container-fluid d-flex align-items-center justify-content-betweens'>
                  <div className={`w-50`}>
                    <img src={`${state.src}`} alt="" className=' w-75'/>
                </div>
                <div className={` w-50`}>
                  <button className={`bg-light text-primary px-5 py-3  my-3 rounded-2 border-0 `}>Why Choose Us</button>
                  <h2 className='fw-bolder text-capitalize mb-5'>
                    We offer the best experience with our rental deals
                  </h2>
                  <div className="carInfo">
                    <h6 className='mt-4'> car name : {`${state.car.car}`}</h6>
                    <h6 className='mt-4'> car model : {`${state.car.car_model_year}`}</h6>
                    <h6 className='mt-4'><img src={ac} alt="" />   Air Conditioning</h6>
                    <h6 className='mt-4'> <img src={user} alt="" />   2 passengers</h6>
                    <h6 className='mt-4'> <img src={auto} alt="" />   Auto</h6>
                    <h6 className='mt-4'> <img src={doors} alt="" />   Doors</h6>
                   
                  </div>
                </div>
          </div>
         

        </div>
         </div>
        
    </>
  )
}
