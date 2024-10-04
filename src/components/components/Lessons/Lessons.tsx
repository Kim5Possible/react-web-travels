import { Pages, VideoImageType } from "../../../shared/types";
import { motion } from "framer-motion";
import Image1 from "../../../assets/become-1.jpg";
import Image2 from "../../../assets/become-2.jpg";
import Image3 from "../../../assets/become-3.jpg";
import Image4 from "../../../assets/become-4.jpg";

type Props = {
  setOpenPage: (page: Pages) => void;
};

const Images: Array<VideoImageType> = [
  { src: Image1, title: "Become a travel pro in one easy lesson" },
  { src: Image2, title: "Become a travel pro in one easy lesson" },
  { src: Image3, title: "Become a travel pro in one easy lesson" },
  { src: Image4, title: "Become a travel pro in one easy lesson" },
];

const Lessons = ({ setOpenPage }: Props) => {
  return (
    <section
      id="lessons"
      className="mx-auto xs:w-11/12 md:w-5/6 my-24 text-black"
    >
      <motion.div onViewportEnter={() => setOpenPage(Pages.Lessons)}>
        <h1 className=" max-w-[600px] text-5xl leading-tight font-bold mb-10 capitalize">
          Become a travel pro in one easy lesson
        </h1>
        <div className="flex justify-between gap-3 flex-wrap">
          {Images.map((image, index) => (
            <div key={index} className="h-auto w-auto">
              <img
                src={image.src}
                alt="image"
                className="md:w-[350px] xs:w-[550px] sm:w-[400px] h-auto"
              />
              <p>{image.title}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Lessons;
