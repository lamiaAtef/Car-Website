import React from 'react'
import style from "./Testimonials.module.css"
import Header from '../Header/Header'
import boyImg from "../../assets/landing-page/sec-6/boy.png"
import girlImg from "../../assets/landing-page/sec-6/girl.png"
import star from "../../assets/card/star.png"

export default function Testimonials() {

    
  return (
    <>
        <div className={`container-fluid ${style.bg_Tesimonials} py-3 my-5`}>
            <Header title={`Testimonials`} subTitle={`what people say about us?`}/>
            <div className="row justify-content-between">

                <div className="card  col-md-5 px-0" >
                    <div className="row g-0 h-100">
                        <div className="col-md-6 px-0 "> 
                                 <img src={boyImg} class="img-fluid rounded-start h-100" alt="..."/>
                        </div>
                        <div className="col-md-6">
                        <div className="card-body lh-lg">
                            <h5 className="card-title fs-1">5.0 <sub className='fs-4'>Stars</sub></h5>
                            <div className="stars">
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                            </div>
                            <p className="card-text">“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”</p>
                             <h4 className="card-text">Charlie Johnson</h4>
                            <p className="card-text"><small class="text-muted">From New York, US</small></p>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="card  col-md-5 px-0" >
                    <div className="row g-0 h-100 ">
                        <div className="col-md-6">
                                 <img src={girlImg} class="img-fluid rounded-start h-" alt="..."/>
                        </div>
                        <div className="col-md-6">
                        <div className="card-body lh-lg">
                            <h5 className="card-title fs-1">5.0 <sub className='fs-4'>Stars</sub></h5>
                            <div className="stars">
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                            </div>
                            <p className="card-text">“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”</p>
                             <h4 className="card-text">Charlie Johnson</h4>
                            <p className="card-text"><small class="text-muted">From New York, US</small></p>
                        </div>
                        </div>
                    </div>
                </div>


            
                

             </div>
         </div>

      
    </>
  )
}
