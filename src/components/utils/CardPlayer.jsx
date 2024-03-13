import React from 'react'
import styles from '../../styles/component.module.css'

export default function CardPlayer({heading, description, source}) {
  return (
    <div className={styles.cardPlayer} style={{backgroundImage: `url(${source})`}}>
      <div>
        <h2>{heading}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}
