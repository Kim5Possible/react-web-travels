import { Pages } from "../../../../../shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  setOpenPage: (page: Pages) => void;
  setToggleMenu: (toggleMenu: boolean) => void;
};

const Link = ({ page, setOpenPage, setToggleMenu }: Props) => {
  const idPage = page.toLowerCase().replace(/ /g, "") as Pages;

  return (
    <AnchorLink
      className="group transition-all duration-300 ease-in-out"
      onClick={() => {
        if (idPage) {
          setOpenPage(idPage);
          setToggleMenu(false);
        }
      }}
      href={`#${idPage}`}
    >
      <div className="bg-left-bottom bg-gradient-to-r from-white to-primary-200 bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out">
        {page}
      </div>
    </AnchorLink>
  );
};

export default Link;
