import { useState } from "react";
import { Pages } from "../../../../../shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  openPage: Pages;
  setOpenPage: (page: Pages) => void;
  setToggleMenu: (toggleMenu: boolean) => void;
};

const Link = ({ page, openPage, setOpenPage, setToggleMenu }: Props) => {
  const idPage = page.toLowerCase().replace(/ /g, "-") as Pages;

  return (
    <AnchorLink
      className={`${
        openPage === idPage ? "opacity-60" : ""
      } transition duration-500 hover:opacity-60`}
      onClick={() => {
        if (idPage) {
          setOpenPage(idPage);
          setToggleMenu(false);
        }
      }}
      href={`#${idPage}`}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
