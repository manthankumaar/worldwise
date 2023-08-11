import styles from './Button.module.css'

const Button = ({ children, onClick, type, ...rest }) => {
  return (
    <button
      {...rest}
      onClick={onClick}
      className={`${styles.btn} ${styles[type]}`}
    >
      {children}
    </button>
  )
}

export default Button
