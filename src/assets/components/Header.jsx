import { Link } from "react-router-dom"
function Header(){
    return(
        <div className="text-center space-x-10 bg-green-500 p-4">
            <Link to ="/Home" className="text-white">Home</Link>
            <Link to ="/Personagens"  className="text-white">Personagens</Link>
        </div>
    )
}

export default Header