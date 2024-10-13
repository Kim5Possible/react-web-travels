import { VideoImageType } from "../../../shared/types";
import { motion } from "framer-motion";
import Image1 from "../../../assets/become-1.jpg";
import Image2 from "../../../assets/become-2.jpg";
import Image3 from "../../../assets/become-3.jpg";
import Image4 from "../../../assets/become-4.jpg";
import Card from "./Card";
import TextTitle from "../../../shared/TextTitles";

const Images: Array<VideoImageType> = [
  { src: Image1, title: "Vacation with experts" },
  { src: Image2, title: "Vacation with experts" },
  { src: Image3, title: "Vacation with experts" },
  { src: Image4, title: "Vacation with experts" },
];

const Lessons = () => {
  return (
    <section id="lessons" className="mx-auto w-11/12 my-36 text-gray-100">
      <div>
        <motion.div
          className=" max-w-[600px] mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <TextTitle>Become a travel pro in one easy lesson</TextTitle>
        </motion.div>
        <div className="flex justify-between gap-4 flex-wrap">
          {Images.map((image, index) => (
            <Card
              key={index}
              index={index}
              src={image.src}
              title={image.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lessons;
