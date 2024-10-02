import { Pages } from "../../../../../shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  openPage: Pages;
  setOpenPage: (page: Pages) => void;
};

const Link = ({ page, openPage, setOpenPage }: Props) => {
  const idPage = page.toLowerCase().replace(/ /g, "-") as Pages;
  return (
    <AnchorLink onClick={() => setOpenPage(idPage)} href={`#${idPage}`}>
      {page}
    </AnchorLink>
  );
};

export default Link;
