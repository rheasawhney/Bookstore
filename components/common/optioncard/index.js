import React from 'react'
import styles from "../optioncard/optioncard.module.css"

export const OptionCard = ({title, description, icon}) => {
  return (
    <div className={styles.card}>
        <section>
            <h4>{title}</h4>
            <p>{description}</p>
        </section>

    </div>
  )
}
