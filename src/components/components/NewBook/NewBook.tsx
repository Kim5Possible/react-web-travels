import { motion } from "framer-motion";
import { Pages, VideoImageType } from "../../../shared/types";
import Navbar from "./components/Navbar/Navbar";
import Find from "../../../assets/icons/find.svg";
import video1 from "../../../assets/videos/1.mp4";
import video2 from "../../../assets/videos/2.mp4";
import video3 from "../../../assets/videos/3.mp4";
import Video from "./Video";
import TextTitle from "../../../shared/TextTitles";

type Props = {
  openPage: Pages;
  setOpenPage: (page: Pages) => void;
};

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

const NewBook = ({ openPage, setOpenPage }: Props) => {
  return (
    <div className="bg-[url('/src/assets/first-bg.jpg')] bg-no-repeat bg-center bg-cover">
      <Navbar openPage={openPage} setOpenPage={setOpenPage} />
      <section id="newbook" className="mx-auto w-11/12 mt-24">
        <motion.div
          className="mb-36"
          onViewportEnter={() => setOpenPage(Pages.NewBook)}
        >
          <span className="inline-block uppercase text-xs font-bold mb-10 py-3 px-8 bg-gray-100 rounded-full bg-opacity-70">
            New Book
          </span>
          <div className="max-w-[300px]">
            <TextTitle>Mother earth hosts our travels</TextTitle>
          </div>
          <p className="mb-10 text-xs max-w-sm">
            There are not many cities that have experienced such social and
            political extremes in recent history as Amsterdam. In the 20th
            century alone, Amsterdam faced the atrocities of war for the first
            time in 400 years, became the radical center of 1960s social
            movements and witnessed a complete
          </p>
          <button className="px-20 py-6 uppercase font-bold text-xs bg-primary-100 rounded-lg hover:bg-primary-200 duration-300 ">
            Buy New Book
          </button>
        </motion.div>
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
            <img className="w-[20px] h-[20px]" src={Find} alt="find" />
          </label>

          <Video videos={videos} />
        </div>
      </section>
    </div>
  );
};

export default NewBook;
