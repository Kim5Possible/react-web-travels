import { Pages } from "../../../../../shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  page: string;
  setToggleMenu: (toggleMenu: boolean) => void;
};

const Link = ({ page, setToggleMenu }: Props) => {
  const idPage = page.toLowerCase().replace(/ /g, "") as Pages;

  return (
    <AnchorLink
      className="group transition-all duration-300 ease-in-out"
      onClick={() => {
        if (idPage) {
          setToggleMenu(false);
        }
      }}
      href={`#${idPage}`}
    >
      <motion.div
        className="bg-left-bottom bg-gradient-to-r from-white to-primary-200 bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-200 ease-out"
        whileHover={{ scale: 1.1 }}
      >
        {page}
      </motion.div>
    </AnchorLink>
  );
};

export default Link;
