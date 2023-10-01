import styles from "./../header/Header.module.css"
    function Items(props) {
        return (
            <div className={styles.container}>
                <div className={styles.line}>
                    <div className={styles.main_style}>
                        <div className={styles.main_cards}>
                            <h4>{props.id}</h4>
                            <img src={props.img}/>
                            <div className={styles.main_line}>
                                <div className={styles.main_line_text}>
                                    <h4 className={styles.main_h4_title}>{props.title}</h4>
                                    <h4 className={styles.main_h4_desc}>{props.desc}</h4>
                                </div>
                                <div className={styles.arrows}>
                                    <img src = {props.arrow}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

export default Items