/* eslint-disable react/prop-types */
import { forwardRef } from "react"

const Projects = (props) => {
  return (
    <div ref={props.targetRef} className="border-solic border-[5px] border-teal-500 w-screen h-screen bg-white flex justify-center items-center">
        <div className="font-playfair text-[76px]">Projects</div>
    </div>
  )
}

export default forwardRef(Projects);