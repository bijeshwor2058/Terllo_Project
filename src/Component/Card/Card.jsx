import styles from './card.module.css'
const Card = ({title}) => {
  return (
  <div className={styles.container} >
    <p>{title}</p>
  </div>
  )
}

export default Card
