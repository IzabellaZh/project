import styles from './../header/Header.module.css'
import promo from './../../img/shop.jpg'



function Promo(){
    return(
        <section>
            <div className={styles.container}>
                <div className={styles.header_promo}>
                    <div><img alt="kfsdb" src={promo} className={styles.header_promo_img}/></div>
                    <div className={styles.header_promo_text}>
                        <p className={styles.header_promo_p}>T-shirt / Tops</p>
                        <h1 className={styles.header_promo_h1}>Summer Value Pack</h1>
                        <p className={styles.header_promo_p}>cool / colorful / comfy</p>
                        <button className={styles.header_promo_button}>Shop Now</button>
                    </div>
                </div>
                <div className={styles.categories_for_men}>
                    <div className={styles.purple_block}></div>
                    <h1 className={styles.categories_for_men_h1}>Categories For Men</h1>
                </div>
            </div>
        </section>
    )
}
export default Promo