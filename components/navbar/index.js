import styles from "../navbar/Navbar.module.css"
import {brandUrl} from "../../public/constants/url"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCar, faSearch } from "@fortawesome/free-solid-svg-icons"

const Navbar= ()=>{
    return (
        <div className={styles.container}>
        <div className={styles.topnav}>
         <img src={brandUrl} className={styles.logo}></img>
        <ul>
            <a class="active" href="#home">Home</a>
            <a href="#blog">Blog</a>
            <a href="#Contact Us">Contact us</a>
            <a href="Log in">Login</a>
            <a href="Sign up">Sign up</a>
        </ul>
        <ul className="navicons">  

    
                <a href="/"><i className="fa fa-search"></i></a>
                <a href="/"><i className="fa fa-shopping-cart"></i></a>
                <a href="/"> <i className="fa fa-user"></i></a>
                
               
        </ul>
      </div> </div>
    )

}
export default Navbar