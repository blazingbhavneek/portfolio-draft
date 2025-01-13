/* eslint-disable react/prop-types */
import LinkButtons from "./buttons/links"

const Menu = (props) => {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-white z-[10] flex flex-col gap-[20px] justify-center items-center">
        {props.refArray.map((item, index) => {
            return <LinkButtons key={index} name={item.name} font="font-playfair text-[36px]"targetRef={item.refvar} />;
        })}
    </div>
  )
}

export default Menu