import LayoutWrapper from "../LayoutWrapper";
import styles from "./Footer.module.css";
import Facebook from "../../../../public/icons/facebook.svg";
import Instagram from "../../../../public/icons/instagram.svg";
import Youtube from "../../../../public/icons/youtube.svg";
import LinkedIn from "../../../../public/icons/linkedin.svg";
import Email from "../../../../public/icons/mailbox.svg";
import Phone from "../../../../public/icons/headphones.svg";

const data = [
  {
    id: 1,
    title: "Bikes",
  },
  {
    id: 2,
    title: "Gear",
  },
  {
    id: 3,
    title: "Parts",
  },
  {
    id: 4,
    title: "Brands",
  },
  {
    id: 5,
    title: "Outlet",
  },
];

const dataii = [
  {
    id: 1.1,
    title: "Explore",
    options: [
      {
        id: 1.2,
        option: "About Us",
      },
      {
        id: 1.3,
        option: "Services",
      },
      {
        id: 1.4,
        option: "Blog",
      },
      {
        id: 1.5,
        option: "Events",
      },
    ],
  },
];

const dataiii = [
  {
    id: 2.1,
    title: "Support",
    options: [
      {
        id: 2.2,
        option: "FAQ's",
      },
      {
        id: 2.3,
        option: "Orders & Shipping",
      },
      {
        id: 2.4,
        option: "Returns & Refunds",
      },
      {
        id: 2.5,
        option: "Warrenty & Repair",
      },
      {
        id: 2.6,
        option: "Payments",
      },
    ],
  },
];

const dataiv = [
  {
    id: 3.1,
    icon: <Facebook className={styles.icon} />,
  },
  {
    id: 3.2,
    icon: <Instagram className={styles.icon} />,
  },
  {
    id: 3.3,
    icon: <Youtube className={styles.icon} />,
  },
  {
    id: 3.4,
    icon: <LinkedIn className={styles.icon} />,
  },
];

export default function Footer() {
  return (
    <footer className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <div className={styles.section1}>
            {data.map((x) => (
              <ul key={x.id} className={styles.titleBox}>
                <li className={styles.title}>{x.title}</li>
              </ul>
            ))}
          </div>
          <div className={styles.section2}>
            {dataii.map((x) => (
              <div className={styles.topSection} key={x.id}>
                <h3 className={styles.h3Heading}>{x.title}</h3>
                <ul className={styles.optionBox}>
                  {x.options.map((y) => (
                    <li key={y.id} className={styles.option}>
                      {y.option}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className={styles.section3}>
            {dataiii.map((x) => (
              <div className={styles.topSection} key={x.id}>
                <h3 className={styles.h3Heading}>{x.title}</h3>
                <ul className={styles.optionBox}>
                  {x.options.map((y) => (
                    <li key={y.id} className={styles.option}>
                      {y.option}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className={styles.section4}>
            <div className={styles.iconMap}>
              {dataiv.map((x) => (
                <div key={x.id} className={styles.iconBox}>
                  <div className={styles.iconContainer}>{x.icon}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.middle}>
          <div className={styles.middleLeft}>
            <h3 className={styles.h3Heading}>Visit Us</h3>
            <p className={styles.option}>
              123 Main St
              <br />
              Rockaway Beach, Ny 11693
            </p>
            <p className={styles.directions}>Get Directions →</p>
            <div className={styles.hoursBox}>
              <div className={styles.openingHours}>Opening Hours</div>
              <p className={styles.date}>
                Mon-Fri
                <span>10am - 7pm</span>
              </p>
              <p className={styles.date}>
                Saturday
                <span>10am - 2pm</span>
              </p>
            </div>
          </div>
          <div className={styles.middleMiddle}>
            <div className={styles.middleContent}>
              <div className={styles.iconContainer}>
                <Phone className={styles.icon} />
              </div>
              <p className={styles.date}>
                Call Us
                <span>Mon-Fri: 10am - 7pm EST</span>
              </p>
            </div>
          </div>
          <div className={styles.middleRight}>
            <div className={styles.middleContent}>
              <div className={styles.iconContainer}>
                <Email className={styles.icon} />
              </div>
              <p className={styles.date}>
                Email
                <span>We usually reply within 48 hours</span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottomLeft}>
            <small>© Thundertrails 2025. All rights reserved.</small>
          </div>
          <div className={styles.bottomRight}>
            <small>Privacy Policy</small>
            <small>Terms of Services</small>
          </div>
        </div>
      </LayoutWrapper>
    </footer>
  );
}
