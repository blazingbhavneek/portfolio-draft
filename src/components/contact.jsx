/* eslint-disable react/prop-types */
import { forwardRef } from "react"

const Contact = (props) => {
  return (
    <div ref={props.targetRef} className="relative z-10 border-solic border-[5px] border-teal-500 w-screen h-screen bg-white flex justify-center items-center">
        <div className="font-playfair text-[76px]">Contact</div>
    </div>
  )
}

export default forwardRef(Contact);