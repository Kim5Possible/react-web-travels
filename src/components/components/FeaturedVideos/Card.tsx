import { motion, AnimatePresence } from "framer-motion";
import PlayIcon from "../../../assets/icons/play.svg";
import { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  images: { src: string; title: string }[];
};

const Card = ({ images }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let interval: ReturnType<typeof setTimeout>;

    const updateIndex = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    interval = setInterval(updateIndex, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <div className=" flex justify-center items-center overflow-hidden gap-10">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="sm:min-w-[700px] xs:min-w-[300px] h-[450px] relative "
        >
          <AnimatePresence>
            <motion.div
              className="w-full h-full absolute z-10"
              key={currentIndex}
              draggable="false"
              initial={{
                x: "-100%",
              }}
              animate={{
                x: 0,
                transition: {
                  duration: 0.8,
                },
              }}
              exit={{
                x: "100%",
                opacity: 0,
              }}
              transition={{
                x: { type: "spring", bounce: 0 },
              }}
            >
              <motion.img
                className="w-full h-full object-cover rounded-lg "
                src={
                  images[(currentIndex - index + images.length) % images.length]
                    .src
                }
                alt={image.title}
                draggable="false"
              />
              <AnchorLink
                href="#newbook"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 pl-2 py-3 rounded-full bg-primary-100 flex justify-center items-center"
              >
                <img src={PlayIcon} alt="" />
              </AnchorLink>
              <span className="absolute bottom-5 left-5 text-white text-2xl">
                {image.title}
              </span>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default Card;
