import "./navbar.css"
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <div className="navbar">
           <Link className="button" to="/">Home</Link>
           <Link className="button" to="/projects">See Projects</Link>
           <Link className="button" to="/blog">Blog</Link>
        </div>
    )
}