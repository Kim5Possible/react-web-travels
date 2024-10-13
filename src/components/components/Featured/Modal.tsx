import { motion } from "framer-motion";
import PrivateJet from "../../../assets/private-jet.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setOpenModal: (openModal: boolean) => void;
};

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal = ({ setOpenModal }: Props) => {
  return (
    <motion.div
      onClick={() => setOpenModal(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed top-0 left-0 z-40 px-10 w-full h-full flex items-center justify-center bg-black bg-opacity-70"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-[500px] flex flex-col items-center justify-center gap-5 px-5 py-10 rounded-lg bg-gradient-to-t from-teal-300 to-sky-500"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h1 className="text-3xl font-bold">Private Jet</h1>
        <p className="z-10">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis,
          itaque ducimus saepe repellendus distinctio inventore fuga iusto.
          Officiis, provident natus!
        </p>
        <div className="w-full h-[1px] bg-white opacity-50" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          sapiente laborum blanditiis doloribus deserunt minus.
        </p>
        <div className="w-full h-[1px] bg-white opacity-50" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          cupiditate totam vitae optio molestiae hic animi, asperiores delectus
          molestias ad exercitationem repellendus? Mollitia, quo dolor. Maiores
          ipsa quis, aut id facere error in autem distinctio.
        </p>
        <AnchorLink
          className="text-left opacity-75 hover:opacity-100 underline cursor-pointer"
          href="#newbook"
          onClick={() => setOpenModal(false)}
        >
          learn more
        </AnchorLink>
        <motion.button
          onClick={() => setOpenModal(false)}
          className=" bg-primary-100 px-4 py-2 rounded-lg z-10"
          whileHover={{ scale: 1.1 }}
        >
          Close
        </motion.button>

        <img
          src={PrivateJet}
          alt="Private Jet"
          className="w-[250px] absolute -bottom-[40px] -right-[60px] z-0"
        />
      </motion.div>
    </motion.div>
  );
};

export default Modal;
