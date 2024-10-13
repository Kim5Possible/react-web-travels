import { motion } from "framer-motion";
import { VideoImageType } from "../../../shared/types";
import Navbar from "./components/Navbar/Navbar";
import Find from "../../../assets/icons/find.svg";
import video1 from "../../../assets/videos/1.mp4";
import video2 from "../../../assets/videos/2.mp4";
import video3 from "../../../assets/videos/3.mp4";
import Video from "./Video";
import TextTitle from "../../../shared/TextTitles";
import Text from "../../../shared/Text";
import Button from "../../../shared/Button";

const videos: Array<VideoImageType> = [
  {
    src: video1,
    title: "wonderful moutain",
  },
  {
    src: video2,
    title: "deep forest",
  },
  {
    src: video3,
    title: "incredible ocean",
  },
];

const NewBook = () => {
  return (
    <div className="bg-[url('/src/assets/first-bg.jpg')] bg-no-repeat bg-center bg-cover">
      <Navbar />
      <section id="newbook" className="mx-auto w-11/12 mt-24">
        <div className="mb-36">
          <motion.span
            className="inline-block uppercase text-xs font-bold mb-10 py-3 px-8 bg-gray-100 rounded-full bg-opacity-70"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            New Book
          </motion.span>
          <TextTitle className="max-w-[300px]">
            Mother earth hosts our travels
          </TextTitle>
          <Text className="max-w-md">
            There are not many cities that have experienced such social and
            political extremes in recent history as Amsterdam. In the 20th
            century alone, Amsterdam faced the atrocities of war for the first
            time in 400 years, became the radical center of 1960s social
            movements and witnessed a complete
          </Text>
          <Button className=" bg-primary-100 hover:bg-primary-200 duration-300">
            Buy New Book
          </Button>
        </div>
        <div className="sm:flex drop-shadow-sm">
          <label
            htmlFor="search"
            className="flex justify-between items-center px-8 w-full h-[80px] basis-4/6 bg-white text-gray-100 rounded-l-sm "
          >
            <input
              className="w-full placeholder:text-gray-100 placeholder:text-xs focus:outline-none"
              placeholder="Search stories..."
              type="text"
              name="search"
            />
            <motion.img
              className="w-[20px] h-[20px]"
              src={Find}
              alt="find"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { scale: 1.5 },
                visible: { scale: 1 },
              }}
            />
          </label>

          <Video videos={videos} />
        </div>
      </section>
    </div>
  );
};

export default NewBook;
