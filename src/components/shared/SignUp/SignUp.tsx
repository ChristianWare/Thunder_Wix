import styles from "./SignUp.module.css";
import LayoutWrapper from "../LayoutWrapper";
import Thunder from "../../../../public/icons/lightning.svg";

export default function SignUp() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.topLeft}>
              <span className={styles.title}>NEWSLETTER</span>
              <p className={styles.copy}>
                Get informed about the best events and special offers only our
                subscribers have.
              </p>
            </div>
            <div className={styles.topRight}>
              <Thunder className={styles.arrow} />
            </div>
          </div>
          <div className={styles.bottom}>
            <form className={styles.form}>
              <div className={styles.labelInputBox}>
                {/* <label htmlFor='email'>
                  Email <span className={styles.required}>*</span>
                </label> */}
                <input
                  id='senderEmail'
                  type='email'
                  placeholder='Email'
                  maxLength={500}
                />
              </div>
              {/* <div className={styles.btnContainer}> */}
              <button className={styles.btn}>Sign Up</button>
              {/* </div> */}
            </form>
            <div className={styles.borderBottom} />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
