import styles from "../navbar/Navbar.module.css"
import {brandUrl} from "../../public/constants/url"
import Image from "next/image"
import Link from "next/link"

const Navbar= ()=>{
    return (
        <div className={styles.container}>
        <div className={styles.topnav}>
         <Image src={brandUrl} className={styles.logo} width="100" height={"100"} alt="logo" />
            <ul>
                <a className="active" href="#home">Home</a>
                <a href="#blog">Books</a>
                <a href="#Contact Us">Category </a>
                <a href="Log in">Contact</a>
                <a href="Sign up">Sign up</a>
            </ul>
            {/* <ul className="navicons">      
                    <Link href="/" passHref><i className="fa fa-search"></i></Link>
                    <Link href="/" passHref><i className="fa fa-shopping-cart"></i></Link>
                    <Link href="/" passHref> <i className="fa fa-user"></i></Link> 
            </ul> */}
        </div> 
      </div>
    )

}
export default Navbar