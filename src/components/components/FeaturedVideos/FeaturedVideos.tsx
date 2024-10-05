import TextTitle from "../../../shared/TextTitles";
import { Pages } from "../../../shared/types";
import { motion } from "framer-motion";
import image1 from "../../../assets/videos-slider-1.jpg";
import image2 from "../../../assets/videos-slider-2.jpg";
import image3 from "../../../assets/videos-slider-3.jpg";

type Props = {
  setOpenPage: (page: Pages) => void;
};

const VideoLink = [
  {
    src: image1,
    title: "A Guide To Rocky Mountains Vacation",
  },
  {
    src: image2,
    title: "A Guide To Rocky Mountains Vacation",
  },
  {
    src: image3,
    title: "A Guide To Rocky Mountains Vacation",
  },
];

const FeaturedVideos = ({ setOpenPage }: Props) => {
  return (
    <section className="mx-auto w-11/12 my-36 text-gray-100">
      <motion.div onViewportEnter={() => setOpenPage(Pages.FeaturedVideos)}>
        <div className="mb-16 text-center">
          <TextTitle>Featured Videos</TextTitle>
          <p className="text-xs mx-auto max-w-md opacity-70">
            The state of Utah in the United States is home to lots of beautiful
            National Parks, & Bryce Canyon National Park ranks as three of the
            most magnificent & awe inspiring.
          </p>
        </div>
        <div className="flex justify-between gap-4 flex-wrap">
          {VideoLink.map((video, index) => (
            <div
              key={index}
              className="w-[700px] h-[500px] relative overflow-hidden"
            >
              <img
                src={video.src}
                alt="image"
                className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[100%] w-[100%]  object-cover"
              />
              <p className="text-xs">{video.title}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedVideos;
