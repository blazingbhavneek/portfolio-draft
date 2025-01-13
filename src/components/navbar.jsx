/* eslint-disable react/prop-types */
import LinkButtons from "./buttons/links"
import NavMenu from "./buttons/navmenu"
import Logo from '../assets/my-logo.svg'

const Navbar = (props) => {
  return (
    <div className="z-[50] fixed top-0 left-0 bg-white w-[98vw] m-[10px] p-[5px] border-2 border-solid border-red-500 flex flex-row justify-between items-center gap-2">
      <div>
        <img src={Logo} alt="My Logo" width="50" height="50" />
      </div>
      <div className="flex-row gap-2">
        <div className="sm:flex hidden flex flex-row gap-[10px] mr-[10px]">
          {props.refArray.map((item, index) => {
              return <LinkButtons key={index} name={item.name} font="font-lato text-[16px]" targetRef={item.refvar} />;
          })}
        </div>
        <div className="sm:hidden flex">
          <NavMenu></NavMenu>
        </div>
      </div>
    </div>
  )
}

export default Navbar