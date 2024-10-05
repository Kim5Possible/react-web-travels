import { motion } from "framer-motion";
import { Pages } from "../../../../../shared/types";
import Facebook from "../../../../../assets/icons/facebook.svg";
import Twitter from "../../../../../assets/icons/twitter.svg";
import Bars from "../../../../../assets/icons/bars.svg";
import { useEffect, useState } from "react";
import Link from "./Link";

type Props = {
  openPage: Pages;
  setOpenPage: (page: Pages) => void;
};

const Navbar = ({ openPage, setOpenPage }: Props) => {
  const [hidden, setHidden] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setHidden(false);
        setOpenPage(Pages.NewBook);
      } else {
        setHidden(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    toggleMenu
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [toggleMenu]);
  return (
    <nav>
      <div
        className={`${
          toggleMenu ? "fixed top-0 z-40 h-[100vh] w-full bg-primary-100 " : ""
        }`}
      >
        <motion.div
          className=" sticky top-0 mx-auto w-5/6 mb-4 flex flex-row items-center justify-between py-12 tracking-widest"
          variants={{
            visible: { y: 0 },
            hidden: { y: "-100%" },
          }}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          <div className="flex flex-row items-center gap-10 basis-1">
            <img
              src={Facebook}
              alt="facebook-logo"
              className="w-[20px] h-[20px]"
            />
            <img
              src={Twitter}
              alt="twitter-logo"
              className="w-[20px] h-[20px]"
            />
          </div>
          <div className="uppercase font-bold text-white">Mitravel</div>
          <button onClick={() => setToggleMenu(!toggleMenu)}>
            <img src={Bars} alt="bars" className="w-[20px] h-[20px]" />
          </button>
        </motion.div>
        {toggleMenu && (
          <div className=" mx-auto flex flex-col justify-center items-center gap-10 font-bold text-3xl">
            <Link
              page="New Book"
              setOpenPage={setOpenPage}
              setToggleMenu={setToggleMenu}
            />
            <Link
              page="Lessons"
              setOpenPage={setOpenPage}
              setToggleMenu={setToggleMenu}
            />
            <Link
              page="Featured"
              setOpenPage={setOpenPage}
              setToggleMenu={setToggleMenu}
            />
            <Link
              page="Videos"
              setOpenPage={setOpenPage}
              setToggleMenu={setToggleMenu}
            />
            <Link
              page="Newsletter"
              setOpenPage={setOpenPage}
              setToggleMenu={setToggleMenu}
            />
            <Link
              page="Inspiration"
              setOpenPage={setOpenPage}
              setToggleMenu={setToggleMenu}
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
