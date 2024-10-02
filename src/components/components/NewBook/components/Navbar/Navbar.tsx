import { Pages } from "../../../../../shared/types";
import Facebook from "../../../../../assets/icons/facebook.svg";
import Twitter from "../../../../../assets/icons/twitter.svg";
import Bars from "../../../../../assets/icons/bars.svg";
import useMediaQuery from "../../../../../hooks/useMediaQuery";
import { useState } from "react";
import Link from "./Link";
import { tr } from "framer-motion/client";

type Props = {
  openPage: Pages;
  setOpenPage: (page: Pages) => void;
};

const Navbar = ({ openPage, setOpenPage }: Props) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav>
      <div
        className={`${
          toggleMenu
            ? "fixed top-0 z-40 h-full w-full bg-primary-100 drop-shadow-xl text-white"
            : ""
        }`}
      >
        <div className="mx-auto w-5/6 md:flex flex-row items-center justify-between py-12 tracking-widest">
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
        </div>
        {toggleMenu && (
          <div className="mx-auto flex flex-col justify-center items-center gap-10 font-bold text-3xl">
            <Link
              page="New Book"
              openPage={openPage}
              setOpenPage={setOpenPage}
            />
            <Link
              page="Lessons"
              openPage={openPage}
              setOpenPage={setOpenPage}
            />
            <Link
              page="Featured"
              openPage={openPage}
              setOpenPage={setOpenPage}
            />
            <Link page="Videos" openPage={openPage} setOpenPage={setOpenPage} />
            <Link
              page="Newsletter"
              openPage={openPage}
              setOpenPage={setOpenPage}
            />
            <Link
              page="Inspiration"
              openPage={openPage}
              setOpenPage={setOpenPage}
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
