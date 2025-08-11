import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Car from '../Car/Car';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

export default function PopularCars() {
    const [searchTerm, setSearchTerm] = useState("");
    let [cars,setCars] = useState([]);
     let filtercars = cars.filter(
        (car)=>
              car.car.toLowerCase().includes(searchTerm.toLowerCase()) ||
             car.car_model.toLowerCase().includes(searchTerm.toLowerCase())
    )
    let getCars = async()=>{
        try{
            let response = await axios.get("https://myfakeapi.com/api/cars/");
            console.log(response?.data?.cars)
            setCars(response?.data?.cars) ;
        }
        catch(error)
        {
            console.log(error)
        }
    }
    useEffect(()=>{
        getCars();
    },[]);

  return (
    <>
        <div className="container ">
             <div className="input-group">
                <div className="input-group-text" id="btnGroupAddon">
                    <i className="fa-solid fa-location-dot"></i>
                </div>
                <input type="text" onChange={(e)=>setSearchTerm(e.target.value)} className="form-control" placeholder="Search By Car Model" aria-label="Input group example" aria-describedby="btnGroupAddon"/>
                <button type="button" className="btn text-light bg-primary">Search</button>
            </div>
                <Header title={`popular rental deals`} subTitle={`most popular cars rental deals`}/>
                <div className="container my-5">
                    <div className="row g-5">
                        {filtercars.slice(0,8).map((car,id)=>(
                            <div className={`box col-md-3 rounded-2`} key={`${id}`}>
                                <Car car={car} index={id}/>
                             </div>

                        ))}

                            
                      
                    </div>
                    <div className='d-flex justify-content-center'>
                        <Link to="/allCars" className='d-inline-block rounded-2   text-light-emphasis mx-auto py-2 my-5 px-5
                                    text-decoration-none border border-secondary  '>
                            Show all vehicles 
                            <i className="fa-solid fa-arrow-right  d-inline-block"></i>
                        </Link>
                    </div>
                  
                  
                </div>

            </div>
      
      
    </>
  )
}
