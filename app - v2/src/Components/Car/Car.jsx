import React from 'react'
import car1 from "../../assets/card/car1.png"
import car2 from "../../assets/card/car2.png"
import car3 from "../../assets/card/car3.png"
import { createBrowserRouter, Link } from 'react-router-dom';

export default function Car(props) {
    let {car,index} = props;
    // let{id} = index;
    console.log(index,"indeeeeeeeeeeeeeeeeeeeeeeex")
    console.log(car.car_color)
    let imgCars = [car1,car2,car3]

    // const routes = createBrowserRouter([
    //   {}
    // ])
      let carImg = imgCars[Math.floor(Math.random() * imgCars.length)]
  return (
    
    <>
        <div className={` p-3`}>
            <img src={`${carImg}`} alt=""  className='img-fluid'/>
            <h4>{car.car}</h4>
            <h5>{car.car_model_year}</h5>
            <hr/>
            <div className='d-flex justify-content-between'><span  className='text-secondary'>price</span> <span>{car.price}<span className='text-secondary'>/day</span></span></div>
            <Link  to="/thisCar" state ={{key:index , src:carImg,car:car}} className='bg-primary form-control text-light my-5 text-center text-decoration-none'>Rent Now <i class="fa-solid fa-arrow-right"></i></Link>
             
        </div>

    </>
  )
}
