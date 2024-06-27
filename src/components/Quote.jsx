import styles from "./Quote.module.css";
export default function Quote(props) {
  return (
    <div class={styles.quote}>
      <p>{props.text}</p>
    </div>
  );
}
