import { useState } from "react";
import { motion } from "framer-motion";

type Props = {
  src: string;
  title: string;
  index: number;
  text?: string;
  featured?: string;
  playButton?: boolean;
  avatar: string[];
};

const Card = ({
  src,
  title,
  index,
  text,
  featured,
  playButton,
  avatar,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      key={index}
      className={`relative  ${
        index === 0
          ? "sm:col-span-2 xs:col-span-1"
          : index === 1
          ? "col-span-1"
          : index === 2
          ? "col-span-1 "
          : index === 3
          ? "col-span-1"
          : index === 4
          ? "col-span-1 "
          : index === 5
          ? "col-span-1"
          : index === 6
          ? "col-span-2"
          : ""
      }`}
    >
      <div
        key={index}
        className={`absolute inset-0 z-10  rounded-lg ${
          index === 4 ? "bg-gray-100/90" : "bg-black/40"
        }`}
      >
        <div
          className={`absolute text-white ${
            index === 4
              ? "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center max-w-[300px] "
              : "bottom-24 left-8"
          } ${index === 6 ? "xs:hidden sm:block" : ""}`}
        >
          {text && <p className="text-[10px] uppercase pl-1">{text}</p>}
          {title && (
            <h3 className="md:text-xl xs:text-sm font-bold">{title}</h3>
          )}
        </div>

        {featured && (
          <div
            className={`absolute top-8 right-8 inline-block uppercase text-xs text-white font-bold mb-10 py-3 px-8 bg-gray-100 rounded-full bg-opacity-60 ${
              index === 6 ? "xs:hidden sm:inline-block" : ""
            }`}
          >
            {featured}
          </div>
        )}

        {playButton && (
          <button className="absolute top-8 left-8">
            <motion.div
              className="md:w-14 md:h-14 xs:w-10"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  fill={`${isHovered ? "#E8594E" : "white"}`}
                  d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9l0-176c0-8.7 4.7-16.7 12.3-20.9z"
                />
              </svg>
            </motion.div>
          </button>
        )}

        {avatar && (
          <div
            className={`absolute md:bottom-10 xs:bottom-5 ${
              index === 4 ? "left-1/2 transform -translate-x-1/2" : "left-8"
            } ${index === 6 ? "xs:hidden sm:flex" : "flex"}`}
          >
            {avatar.map((avatar, avatarIndex) => (
              <img
                key={avatarIndex}
                src={avatar}
                alt="Avatar"
                className="w-9 h-9 mx-1 rounded-full"
              />
            ))}
          </div>
        )}
      </div>
      <img src={src} alt={title} className="w-full h-full rounded-lg " />
    </div>
  );
};

export default Card;
