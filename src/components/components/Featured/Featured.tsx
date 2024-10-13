import { AnimatePresence, motion } from "framer-motion";
import TextTitle from "../../../shared/TextTitles";
import ava1 from "../../../assets/ava-1.jpg";
import ava2 from "../../../assets/ava-2.jpg";
import ava3 from "../../../assets/ava-3.jpg";
import ava4 from "../../../assets/ava-4.jpg";
import Text from "../../../shared/Text";
import Button from "../../../shared/Button";
import { useState } from "react";
import Modal from "./Modal";

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
  const [openModal, setOpenModal] = useState(false);
  return (
    <section className=" bg-[url('/src/assets/featured.jpg')] bg-no-repeat bg-cover bg-center sm:h-[750px]">
      <div className="shadow-[inset_0_-300px_400px_100px_rgba(28,46,61,0.5),_inset_0_-100px_100px_0_rgba(0,0,0,0.9)]">
        <div className="sm:flex justify-between">
          <div
            id="featured"
            className="mt-36 pt-24 sm:mx-auto sm:w-6/12 md:px-0 xs:px-10 "
          >
            <motion.span
              className="select-none inline-block uppercase text-xs font-bold mb-10 py-3 px-8 bg-primary-100 rounded-full "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              featured
            </motion.span>
            <TextTitle>How to fly a private jet on your next trip</TextTitle>
            <Text className=" max-w-sm">
              The state of Utah in the United States is home to lots of
              beautiful National Parks, & Bryce Canyon National Park ranks as
              three of the most magnificent & awe inspiring.
            </Text>

            <Button
              className=" bg-primary-200  hover:bg-primary-100 mb-10"
              onClick={() => setOpenModal(true)}
            >
              Read article
            </Button>

            <AnimatePresence
              initial={false}
              mode="wait"
              onExitComplete={() => null}
            >
              {openModal && <Modal setOpenModal={setOpenModal} />}
            </AnimatePresence>
          </div>
          <motion.div
            className="bg-secondary-100 bg-opacity-90 py-28 pl-20 h-[750px] overflow-y-scroll"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
