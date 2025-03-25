import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./BlogSection.module.css";
import Img1 from "../../../../public/images/gear1.1.png";
import Img2 from "../../../../public/images/gear1.png";
import Img3 from "../../../../public/images/gear2.png";
import DummyProductCard from "@/components/shared/DummyProductCard/DummyProductCard";

const data = [
  {
    id: 1,
    title: "Throught the city with style and axtra power",
    src: Img1,
  },
  {
    id: 2,
    title: "Made for endless adventures",
    src: Img2,
  },
  {
    id: 3,
    title: "Made for endless adventures",
    src: Img3,
  },
];

export default function BlogSection() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          {data.map((x) => (
            <DummyProductCard key={x.id} title={x.title} src={x.src} href='/' />
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
}
