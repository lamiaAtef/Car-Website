import React from 'react'
import logo from "../../assets/footer/logo-footer.png"
import location from "../../assets/footer/location.png"
import call from "../../assets/footer/call.png"
import facebook from "../../assets/footer/facebook.png"
import instagram from "../../assets/footer/instagram.png"
import sms from "../../assets/footer/sms.png"
import youtube from "../../assets/footer/youtube.png"
import { Link } from 'react-router-dom'




export default function Footer() {
  return (
    <>
      <div className="container-fluid bg-black text-white p-5">
        <div className="up_footer">
            <div className="row  flex-md-column flex-lg-row">
                <div className="col-md-5 col-sm-12">
                    <ul className='list-unstyled'>
                        <li ><img src={logo} alt="" /></li>
                        <li className='d-flex my-5'>
                            <img src={location} alt="" />
                            <small className='ms-3' >
                                25566 Hc 1,Glenallen,<br/>
                                 Alaska, 99588, USA  
                            </small>
                           
                        </li>
                        <li className='d-flex my-5'>
                            <img src={call} alt="" />
                            <small className='ms-3'>
                               +603 4784 273 12
                            </small>
                        </li>
                         <li className='d-flex my-5'>
                            <img src={sms} alt="" />
                            <small className='ms-3'>
                               rentcars@gmail.com
                            </small>
                        </li>
                    </ul>       
                </div>
                <div className="col-md-2 col-sm-12">
                  <ul className='list-unstyled' >
                    <li className='mb-5 mt-3'>Our Products</li>
                    <li className='my-3'><Link className="text-decoration-none text-white ">carrers</Link></li>
                    <li className='my-3'><Link className="text-decoration-none text-white ">cars</Link></li>
                    <li className='my-3'><Link className="text-decoration-none text-white ">package</Link></li>
                    <li className='my-3'><Link className="text-decoration-none text-white ">Features</Link></li>
                    <li className='my-3'><Link className="text-decoration-none text-white ">priceline</Link></li>
                  </ul>
                </div>
                <div className="col-md-2 col-sm-12">
                   <ul className='list-unstyled' >
                    <li className='mb-5 mt-3'>about rent cars</li>
                    <li className='my-3 text-white'><Link className="text-decoration-none text-white ">Why choose us</Link></li>
                    <li className='my-3'><Link className="text-decoration-none text-white ">Our Story</Link></li>
                    <li className='my-3'><Link className="text-decoration-none text-white ">Investor Relations</Link></li>
                    <li className='my-3'><Link className="text-decoration-none text-white ">Press Center</Link></li>
                    <li className='my-3'><Link className="text-decoration-none text-white ">Advertise</Link></li>
                  </ul>
                  
                </div>
                <div className="col-md-3 col-sm-12">
                   <ul className='list-unstyled' >
                    <li className='mb-5 mt-3'>Follow Us</li>
                    <li className='my-3 text-white'>
                      <Link className="text-decoration-none text-white me-3 ">
                          <img src={facebook} alt="" />
                       </Link>
                         <Link className="text-decoration-none text-white me-3 ">
                          <img src={youtube} alt="" />
                       </Link>
                        <Link className="text-decoration-none text-white me-3 ">
                          <img src={instagram} alt="" />
                       </Link>
                    </li>
                    
                  </ul>
                </div>

            </div>     
        </div>
      </div>
    </>
  )
}
