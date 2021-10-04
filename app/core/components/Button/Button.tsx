import styles from "./Button.module.css"

interface ButtonProps {
  label: string
  onClick: () => void
}

export default function Button(props: ButtonProps) {
  return (
    <button className={styles.button} onClick={props.onClick}>
      {props.label}
    </button>
  )
}
