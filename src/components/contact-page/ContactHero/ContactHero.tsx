import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./ContactHero.module.css";
import FalseButton from "@/components/shared/FalseButton/FalseButton";

const data = [
  {
    id: 1,
    title: "Contact Options",
  },
  {
    id: 2,
    title: "FAQ",
  },
  {
    id: 3,
    title: "Contact Form",
  },
];

const data2 = [
  {
    id: 4,
    title: "On-Site Consultation",
    btnText: "Book An Appointment",
  },
  {
    id: 5,
    title: "Send Us an Email",
    btnText: "Contact us",
  },
  {
    id: 6,
    title: "(917) - 777 -7915",
    btnText: "Call us",
  },
];

export default function ContactHero() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.listBox}>
              <h3 className={styles.needHelp}>Need Help?</h3>
              <ul className={styles.list}>
                {data.map((x) => (
                  <li key={x.id} className={styles.listItem}>
                    {x.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.right}>
            <h1 className={styles.heading}>Contact Options</h1>
            <div className={styles.rightBottom}>
              <div className={styles.list2}>
                {data2.map((x) => (
                  <div key={x.id} className={styles.data2Card}>
                    <h3 className={styles.title}>{x.title}</h3>
                    <div className={styles.btnContainer}>
                      <FalseButton text={x.btnText} btnType='primaryiii' />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
