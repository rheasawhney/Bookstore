import styles from "../banner/Banner.module.css"
import Image from "next/image"
import { book1Url } from "../../public/constants/url"

export const Banner= ()=>{
    return (
        <div className={styles.banner}>
        <div className={styles.carousel}>
            <section>
                <h1>
                    Get Your New Book Collections
                </h1>
                <hr/>
                <p>Buy variety of books with best quality and quick delivery</p>
                <button>Explore More</button>
            </section>
            <section>
                <Image src={book1Url} width="300" height="400"></Image>
            </section>
        </div>
        </div>
    )

}



