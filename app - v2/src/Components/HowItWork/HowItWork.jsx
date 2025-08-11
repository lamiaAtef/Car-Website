import React from 'react'
import Header from '../Header/Header'
import car from "../../assets/landing-page/car-icon.png"
import location from "../../assets/landing-page/location.png"
import Carousel from '../Carousel/Carousel'

export default function HowItWork() {
  return (
   <>
      <Header title={`how it work`} subTitle={`Rent with following 3 working steps`}/>
        <div className="container">
            <div className="row">
                <div className="col-md-4 text-center">
                    <img src={car} alt="" className='my-3' />
                    <h3 className='my-3'>Choose location</h3>
                    <p className='my-3'>Choose your and find your best car</p>
                </div>

                 <div className="col-md-4 text-center">
                    <img src={location} alt="" className='my-3' />
                    <h3 className='my-3'>Pick-up date</h3>
                    <p className='my-3'>Select your pick up date and time to book your car</p>
                </div>

                 <div className="col-md-4 text-center">
                    <img src={car} alt="" className='my-3' />
                    <h3 className='my-3'>Book your car</h3>
                    <p className='my-3'>Book your car and we will deliver it directly to you </p>
                </div>
            </div>
        </div>
        <Carousel/>
    
   </>
  )
}
