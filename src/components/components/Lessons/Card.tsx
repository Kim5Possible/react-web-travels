import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  src: string;
  title: string;
};

const Card = ({ src, title }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      className="relative md:w-[24%] xs:w-[45%]"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className=" absolute inset-0 bg-primary-200 z-10 rounded-md"
            key={src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              key={src}
              className="absolute inset-0 flex flex-col justify-end "
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              exit={{ y: 50 }}
            >
              <p className="sm:w-[300px] text-2xl font-bold text-white py-10 xs:px-5 xs:w-[200px] md:px-10 capitalize">
                {title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <img src={src} alt="image" />
    </motion.div>
  );
};

export default Card;
