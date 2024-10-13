import { AnimatePresence, motion } from "framer-motion";
import ArrowLeft from "../../../assets/icons/arrow-left.svg";
import ArrowRight from "../../../assets/icons/arrow-right.svg";
import { useState } from "react";

type Props = {
  videos: { src: string; title: string }[];
};

const Video = ({ videos }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex: number) =>
      prevIndex + 1 === videos.length ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex: number) =>
      prevIndex - 1 < 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };
  const swipeConfidenceThreshold = 100;

  const variants = {
    initial: (direction: number) => {
      return {
        x: direction > 0 ? 20 : -20,
        opacity: 0,
      };
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (direction: number) => {
      return {
        x: direction > 0 ? -30 : 30,
        opacity: 0,
        transition: {
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        },
      };
    },
  };

  return (
    <div className={`sm:relative md:basis-2/6 sm:basis-4/6 `}>
      <AnimatePresence initial={false} mode="wait" custom={direction}>
        <motion.video
          className={` bottom-full rounded-t-md left-0 right-0 cursor-grab active:cursor-grabbing sm:absolute xs:mt-5 sm:mt-0"
          }`}
          key={currentIndex}
          src={videos[currentIndex].src}
          autoPlay
          controls
          muted
          onEnded={() => {
            handleNext();
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0}
          onDragEnd={(_e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              handleNext();
            } else if (swipe > swipeConfidenceThreshold) {
              handlePrevious();
            }
          }}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          custom={direction}
        />
      </AnimatePresence>
      <div className="bg-primary-200 w-full h-[80px] flex justify-between items-center rounded-r-sm">
        <button onClick={handlePrevious} className="pl-8">
          <img className="w-[20px] h-[20px]" src={ArrowLeft} alt="arrow-left" />
        </button>

        <motion.span
          className="uppercase font-bold text-[10px] tracking-widest"
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.4 }}
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
          }}
        >
          {videos[currentIndex].title}
        </motion.span>
        <button onClick={handleNext} className="pr-8">
          <img
            className="w-[20px] h-[20px]"
            src={ArrowRight}
            alt="arrow-right"
          />
        </button>
      </div>
    </div>
  );
};

export default Video;
