import { motion } from "framer-motion";
import TextTitle from "../../../shared/TextTitles";
import image1 from "../../../assets/insp-1.jpg";
import image2 from "../../../assets/insp-2.jpg";
import image3 from "../../../assets/insp-3.jpg";
import image4 from "../../../assets/insp-4.jpg";
import image5 from "../../../assets/insp-5.jpg";
import image6 from "../../../assets/insp-6.jpg";
import image7 from "../../../assets/insp-7.jpg";
import ava1 from "../../../assets/avatar-1.jpg";
import ava2 from "../../../assets/avatar-2.jpg";
import { useState } from "react";

const images = [
  {
    src: image1,
    text: "Destinations",
    title: "A Guide To Rocky Mountains Vacation",
    featured: "Featured",
    avatar: [ava1, ava2, ava1],
  },
  {
    src: image2,
    text: "Destinations",
    title: "Traveling to Barcelona",
    playButton: true,
    avatar: [ava1, ava2],
  },
  {
    src: image3,
    text: "Destinations",
    title: "Party Jokes Startling But Unnecessary",
    avatar: [ava1, ava2],
  },
  {
    src: image4,
    title: "Maui By Air The Best Way Around The Island",
    avatar: [ava1, ava2],
  },
  {
    src: image5,
    text: "Andre Gide",
    title:
      "Man cannot discover new oceans unless he has the courage to lose sight of the shore.",
    avatar: [ava1, ava2],
  },
  {
    src: image6,
    text: "Destinations",
    title: "Traveling to Barcelona",
    playButton: true,
    avatar: [ava1, ava2],
  },
  {
    src: image7,
    title: "A Guide To Rocky Mountains Vacation",
    featured: "Featured",
    avatar: [ava1, ava2, ava1],
  },
];

type Props = {};

const Inspirations = (props: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section id="inspiration" className="w-11/12 mx-auto mt-24 text-gray-100">
      <div className="mb-16 text-center">
        <TextTitle>Inspirations</TextTitle>
        <p className="text-xs mx-auto max-w-md opacity-70">
          The state of Utah in the United States is home to lots of beautiful
          National Parks, & Bryce Canyon National Park ranks as three of the
          most magnificent & awe inspiring.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative  ${
              index === 0
                ? "col-span-2"
                : index === 1
                ? "col-span-1"
                : index === 2
                ? "col-span-1 row-span-1"
                : index === 3
                ? "col-span-1 row-span-1"
                : index === 4
                ? "col-span-1 row-span-1"
                : index === 5
                ? "col-span-1 row-span-1"
                : index === 6
                ? "col-span-2 row-span-1"
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
                    ? "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-[300px]"
                    : "bottom-24 left-8"
                }`}
              >
                {image.text && (
                  <p className="text-[10px] uppercase pl-1">{image.text}</p>
                )}
                {image.title && (
                  <h3 className="text-xl font-bold">{image.title}</h3>
                )}
              </div>

              {image.featured && (
                <div className="absolute top-8 right-8 inline-block uppercase text-xs text-white font-bold mb-10 py-3 px-8 bg-gray-100 rounded-full bg-opacity-60">
                  {image.featured}
                </div>
              )}

              {image.playButton && (
                <button className="absolute top-8 left-8">
                  <motion.div
                    className="w-14 h-14"
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill={`${isHovered ? "#E8594E" : "white"}`}
                        d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9l0-176c0-8.7 4.7-16.7 12.3-20.9z"
                      />
                    </svg>
                  </motion.div>
                </button>
              )}

              {image.avatar && (
                <div
                  className={`absolute bottom-10 flex ${
                    index === 4
                      ? "left-1/2 transform -translate-x-1/2"
                      : "left-8"
                  }`}
                >
                  {image.avatar.map((avatar, avatarIndex) => (
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
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full rounded-lg "
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Inspirations;
