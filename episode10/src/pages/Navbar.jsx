import { Link } from "react-router-dom";


function Navbar (){
    return(
        <div>
            <Link to={"/"}>Home</Link>
            <Link to={"/Menu"}>Menu</Link>
            <Link to={"/Profile"}>Profile</Link>
        </div>
    )
}

export default Navbar