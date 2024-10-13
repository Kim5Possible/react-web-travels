import Exclamation from "../assets/icons/exclamation.svg";
import { motion } from "framer-motion";
type Props = {
  children: React.ReactNode;
};

const Modal = ({ children }: Props) => {
  return (
    <motion.div
      className="absolute -bottom-8 flex gap-2 items-center  z-10 text-xs text-gray-100 border border-solid border-gray-100 border-opacity-70 rounded-md bg-white py-1 px-5"
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className=" w-5 h-5 px-1 py-1 bg-amber-600 rounded-sm">
        <img src={Exclamation} alt="Exclamation" className=" w-full h-full" />
      </div>
      {children}
    </motion.div>
  );
};

export default Modal;
