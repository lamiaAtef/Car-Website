import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Car from '../Car/Car'
import axios from 'axios';
import Pagination from '../Pagination/Pagination';
import { Link } from 'react-router-dom';

export default function AllCars() {
    let [cars,setCars] = useState([]);
    const carsPerPage = 12;
     
    const [currentPage, setCurrentPage] = useState(1);
      const indexOfLastCar = currentPage * carsPerPage;
    const indexOfFirstCar = indexOfLastCar - carsPerPage;
    
    const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

    const handlePagination = (pageNumber)=>{setCurrentPage(pageNumber)}
    
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
        <ul className="navigation list-unstyled m-5">
            <li>
                
                <Link to="/"> Home </Link>
                / car
            </li>
         </ul>
      <Header title={"Popular rent deals"} subTitle={"most popular cars rental deals"}/>
       <div className="container my-5">
          <div className="row g-5">
              {currentCars.map((car,id)=>(
                  <div className={`box col-md-3 rounded-2`} key={`${id}`}>
                      <Car car={car} index={id}/>
                    </div>

              ))}

                  
            
          </div>
       </div>
           
        <Pagination carsPerPage={carsPerPage}  length={cars.length} handlePagination={handlePagination} currentPage={currentPage}/>
    </>
  )
}
