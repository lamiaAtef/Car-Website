import React from 'react'
import car from "../../assets/landing-page/sec-5/1.png"
import Header from '../Header/Header'
import user from "../../assets/landing-page/sec-5/user.png"
// import style from "../../App.css"

export default function WhyChooseUs() {
  return (
    <>
      <div className="container-fluid  ">
        <div className="row ">

            <div className={`col-md-12 col-lg-5  bg_img  vh-100 d-flex align-items-center`}>
                 <img src={car} alt="" className='mt-5  img-fluid'/>
            </div>

             <div className="col-md-12  col-lg-7 ms-auto ">
                <div className="row me-auto">
                    
                 <Header title={`why choose us`} subTitle={`We offer the best experience with our rental deals`}/>   
                 <div className='d-flex flex-column align-items-between   '>
                    <div className=" d-flex justify-content-between align-items-center w-75 me-auto mb-3">
                        <img src={user} alt=""  />
                        <div className="mx-4 ">
                            <h3>Best price guaranteed</h3>
                            <p>Find a lower price? We’ll refund you 100% of the difference.</p>
                        </div>

                    </div>

                     <div className=" d-flex justify-content-between align-items-center w-75 me-auto  mb-3">
                        <img src={user} alt="" />
                        <div className="mx-4 ">
                            <h3>Best price guaranteed</h3>
                            <p>Find a lower price? We’ll refund you 100% of the difference.</p>
                        </div>

                    </div>


                     <div className=" d-flex justify-content-between align-items-center w-75 me-auto  mb-3">
                        <img src={user} alt="" />
                        <div className="mx-4 ">
                            <h3>Best price guaranteed</h3>
                            <p>Find a lower price? We’ll refund you 100% of the difference.</p>
                        </div>

                    </div>

                     <div className=" d-flex justify-content-between align-items-center w-75 me-auto  mb-3">
                        <img src={user} alt="" />
                        <div className="mx-4 ">
                            <h3>Best price guaranteed</h3>
                            <p>Find a lower price? We’ll refund you 100% of the difference.</p>
                        </div>

                    </div>
                 </div>
            </div>

                </div>


         </div>

       </div>


    </>
  )
}
