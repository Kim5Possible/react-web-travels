import { motion, AnimatePresence } from "framer-motion";
import PlayIcon from "../../../assets/icons/play.svg";
import { useEffect, useState } from "react";

type Props = {
  images: { src: string; title: string }[];
};

const Card = ({ images }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setTimeout>;

    const updateIndex = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    if (!isMouseDown) {
      interval = setInterval(updateIndex, 5000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [images.length, isMouseDown]);

  const handleMouseDown = () => {
    setIsMouseDown(true);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  return (
    <div className=" flex justify-center items-center overflow-hidden gap-10">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="sm:min-w-[700px] xs:min-w-[300px] h-[450px] cursor-grab active:cursor-grabbing relative "
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
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
            >
              <motion.img
                className="w-full h-full object-cover rounded-lg "
                src={
                  images[(currentIndex - index + images.length) % images.length]
                    .src
                }
                alt={image.title}
              />
              <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 pl-2 py-3 rounded-full bg-primary-100 flex justify-center items-center">
                <img src={PlayIcon} alt="" />
              </button>
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
