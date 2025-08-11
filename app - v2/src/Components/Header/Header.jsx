import React from 'react'
import style from "./Header.module.css"

export default function Header(props) {
  let title = props.title;
  let subTitle = props.subTitle
  return (
    <>
        <div className=" my-5">
            <h2 href="" className={` ${style.btnClass} d-block m-auto w-25  text-uppercase rounded-2 text-decoration-none  fs-6  fw-light text-center py-2`}>{title}</h2>
            <h3 className='text-center my-3'>{subTitle}</h3>
        </div>

    </>
  )
}
