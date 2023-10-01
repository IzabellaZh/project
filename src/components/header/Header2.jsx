import styles from './Header.module.css'
import logo from './../../img/logo.png'
import search from './../../img/search.png'
import heart from './../../img/heart.png'
import user from './../../img/user.png'
import shoppingcart from './../../img/shopping_cart.png'

function Header1(){
    return(
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header__row}>
                    <img src={logo}/>
                    <div className={styles.header__row_nav}>
                        <a href='#'className={styles.decoration}>Shop</a>
                        <a href='#'className={styles.decoration}>Men</a>
                        <a href='#'className={styles.decoration}>Women</a>
                        <a href='#'className={styles.decoration}>Combos</a>
                        <a href='#'className={styles.decoration}>Joggers</a>
                    </div>
                    <div className={styles.header__row_nav_search}>
                        <div className={styles.header__row_nav_search_row}>
                            <img className={styles.header__row_nav_search_img} src={search}/>
                            <input className={styles.header__row_nav_search_input} placeholder='Search'/>
                        </div>
                    </div>
                    <div className={styles.header__row_icons}>
                        <a className={styles.login}>Log in/Check in</a>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header1;