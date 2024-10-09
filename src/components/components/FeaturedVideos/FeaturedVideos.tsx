import TextTitle from "../../../shared/TextTitles";
import { VideoImageType } from "../../../shared/types";
import { motion } from "framer-motion";
import image1 from "../../../assets/videos-slider-1.jpg";
import image2 from "../../../assets/videos-slider-2.jpg";
import image3 from "../../../assets/videos-slider-3.jpg";
import Card from "./Card";
import { useRef, useState } from "react";

const images: Array<VideoImageType> = [
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

const FeaturedVideos = () => {
  return (
    <section id="videos" className="mx-auto my-36 text-gray-100">
      <div className="mb-16 text-center">
        <TextTitle>Featured Videos</TextTitle>
        <p className="text-xs mx-auto max-w-md opacity-70">
          The state of Utah in the United States is home to lots of beautiful
          National Parks, & Bryce Canyon National Park ranks as three of the
          most magnificent & awe inspiring.
        </p>
      </div>
      <div>
        <Card images={images} />
      </div>
    </section>
  );
};

export default FeaturedVideos;
