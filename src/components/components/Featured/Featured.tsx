import { motion } from "framer-motion";
import TextTitle from "../../../shared/TextTitles";
import ava1 from "../../../assets/ava-1.jpg";
import ava2 from "../../../assets/ava-2.jpg";
import ava3 from "../../../assets/ava-3.jpg";
import ava4 from "../../../assets/ava-4.jpg";

const People = [
  {
    image: ava1,
    title: "Do A Sporting Stag Do In Birmingham",
    date: "13 Dec 2019",
  },
  {
    image: ava2,
    title: "From Wetlands To Canals And Dams Amsterdam Is Alive",
    date: "16 Jan 2019",
  },
  {
    image: ava3,
    title: "Stu Unger Rise And Fall Of A Poker Genius",
    date: "25 Sep 2020",
  },
  {
    image: ava4,
    title: "New Ideas For A Low Cost Vacation On Water",
    date: "1 May 2022",
  },
];

const Featured = () => {
  return (
    <section className=" bg-[url('/src/assets/featured.jpg')] bg-no-repeat bg-cover bg-center sm:h-[750px]">
      <motion.div className="shadow-[inset_0_-300px_400px_100px_rgba(28,46,61,0.5),_inset_0_-100px_100px_0_rgba(0,0,0,0.9)]">
        <div className="sm:flex justify-between">
          <div
            id="featured"
            className="mt-36 pt-24 sm:mx-auto sm:w-6/12 md:px-0 xs:px-10 "
          >
            <span className="inline-block uppercase text-xs font-bold mb-10 py-3 px-8 bg-primary-100 rounded-full ">
              featured
            </span>
            <div className="sm:max-w-[500px] xs:max-w-[350px]">
              <TextTitle>How to fly a private jet on your next trip</TextTitle>
            </div>
            <p className="mb-10 text-xs  max-w-sm">
              The state of Utah in the United States is home to lots of
              beautiful National Parks, & Bryce Canyon National Park ranks as
              three of the most magnificent & awe inspiring.
            </p>
            <button className="mb-8 px-20 py-6 uppercase font-bold text-xs bg-primary-200 rounded-lg hover:bg-primary-100 duration-300 ">
              Read article
            </button>
          </div>
          <div className="bg-secondary-100 bg-opacity-90 py-28 pl-20 h-[750px] overflow-y-scroll">
            <TextTitle>
              Featured <br />
              stories
            </TextTitle>

            <div className="flex flex-col justify-between gap-16">
              {People.map((person, index) => (
                <div key={index} className=" w-[65%] h-[80px]">
                  <div className="flex gap-4 border-b-white border-b border-opacity-20">
                    <img
                      src={person.image}
                      alt="ava"
                      className="w-[50px] h-[50px] rounded-full"
                    />
                    <div className="flex flex-col justify-center">
                      <p className="text-sm font-bold">{person.title}</p>
                      <p className="text-[10px] opacity-50 mb-7">
                        {person.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Featured;
