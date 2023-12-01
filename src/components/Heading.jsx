import React from 'react'
import styles from "./Heading.module.css"

function Heading({level, text}) {
    if (level === "h1") {
        return (<h1 className={styles['h1_heading']}>{text}</h1>)    
    }
     else if (level === "h2") {
        return (<h2 className={styles['h2_heading']}>{text}</h2>)    
    }
}

export default Heading