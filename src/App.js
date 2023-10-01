import React from "react";
import Main from "./components/main/Main";
import styles from "./components/header/Header.module.css";
import Header1 from "./components/header/Header1";
import Promo from "./components/proom/Promo";
import Items from "./components/main/Items";
import Log_in from "./components/header/Log_in";





function App(){
    const MainItems = Main.map(items => <Items key = {items.id} img = {items.img} title = {items.title} desc = {items.desc} arrow = {items.arrow}/>)
   return(
       <div className={styles.card_main}>

           <Header1/>
           <Promo/>
           <div className={styles.line}>{MainItems}</div>




       </div>
   )
}
    export default App;