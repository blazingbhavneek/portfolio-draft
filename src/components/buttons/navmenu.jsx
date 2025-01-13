import { IoMdMenu } from "react-icons/io";
import { IconContext } from "react-icons";
import { RxCross2 } from "react-icons/rx";
import { AppContext } from '../../App'
import { useContext } from "react";

const NavMenu = () => {
    const {menuOpen, toggleMenu} = useContext(AppContext);
    return (
        <IconContext.Provider value={{ color: "#333333", size: "25px" }}>
            <div onClick={()=>{toggleMenu(!menuOpen)}}>
                {menuOpen ? <RxCross2 /> : <IoMdMenu />}
            </div>
        </IconContext.Provider>
    )
}

export default NavMenu