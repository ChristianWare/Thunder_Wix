import styles from './ScrollHorizontalText.module.css'

interface Props {
  text: string;
}


export default function ScrollHorizontalText({ text }: Props) {
  return (
    <div className={styles.slider}>
      <div className={styles.track}>
        {[...Array(50)].map((_, index) => (
          <div key={index} className={styles.text}>
            {text}
            <span className={styles.span}>•</span>
          </div>
        ))}
      </div>
    </div>
  );
}