import React from "react";
import { Pages } from "../../../shared/types";

type Props = {
  openPage: Pages;
  setOpenPage: (page: Pages) => void;
};

const Navbar = ({ openPage, setOpenPage }: Props) => {
  return <nav>Navbar</nav>;
};

export default Navbar;
