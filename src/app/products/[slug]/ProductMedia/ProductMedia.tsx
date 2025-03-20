/* eslint-disable react-hooks/rules-of-hooks */
import styles from "./ProductMedia.module.css";
import WixImage from "@/components/WixImage";
import { products } from "@wix/stores";
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import Arrow from "../../../../../public/icons/leftArrow.svg";

interface ProductMediaProps {
  media: products.MediaItem[] | undefined;
}

export default function ProductMedia({ media }: ProductMediaProps) {
  const initialIndex = 1;

  const [selectedMedia, setSelectedMedia] = useState<
    products.MediaItem | undefined
  >(media && media.length > initialIndex ? media[initialIndex] : media?.[0]);

  useEffect(() => {
    if (media?.length) {
      const indexToShow = media.length > initialIndex ? initialIndex : 0;
      setSelectedMedia(media[indexToShow]);
    }
  }, [media]);

  if (!media?.length) return null;

  const handleNext = () => {
    if (!selectedMedia || !media?.length) return;
    const currentIndex = media.findIndex(
      (item) => item._id === selectedMedia._id
    );
    const nextIndex = (currentIndex + 1) % media.length;
    setSelectedMedia(media[nextIndex]);
  };

  const handlePrevious = () => {
    if (!selectedMedia || !media?.length) return;
    const currentIndex = media.findIndex(
      (item) => item._id === selectedMedia._id
    );
    const previousIndex = (currentIndex - 1 + media.length) % media.length;
    setSelectedMedia(media[previousIndex]);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrevious,
    preventScrollOnSwipe: true,
    trackTouch: true,
  });

  const selectedImage = selectedMedia?.image;
  const selectedVideo = selectedMedia?.video?.files?.[0];

  return (
    <div {...swipeHandlers} className={styles.container}>
      {/* Display the selected media (image or video) */}
      <div className={styles.imgContainer}>
        {selectedImage?.url ? (
          <WixImage
            mediaIdentifier={selectedImage.url}
            alt={selectedImage.altText || "Product Image"}
            // scaletofill={false}
            width={900}
            height={900}
            className={styles.img}
          />
        ) : selectedVideo?.url ? (
          <video autoPlay loop controls className={styles.video}>
            <source
              src={selectedVideo.url}
              type={`video/${selectedVideo.format}`}
            />
          </video>
        ) : null}

        <div className={styles.circleContainer}>
          {media.map((_, index) => (
            <span
              key={index}
              className={`${styles.circle} ${
                media[index]._id === selectedMedia?._id
                  ? styles.activeCircle
                  : ""
              }`}
            />
          ))}
        </div>
        <div className={styles.arrowsContainer}>
          <button
            className={`${styles.arrowButton} ${styles.leftArrow}`}
            onClick={handlePrevious}
          >
            <Arrow className={styles.arrow} />
          </button>
          <button
            className={`${styles.arrowButton} ${styles.rightArrow}`}
            onClick={handleNext}
          >
            <Arrow className={`${styles.arrow} ${styles.arrowReverse}`} />
          </button>
        </div>
      </div>
    </div>
  );
}
