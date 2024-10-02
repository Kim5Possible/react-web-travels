import { Pages } from "../../../shared/types";
import Navbar from "./components/Navbar/Navbar";

type Props = {
  openPage: Pages;
  setOpenPage: (page: Pages) => void;
};

const NewBook = ({ openPage, setOpenPage }: Props) => {
  return (
    <div className=" bg-[url('/src/assets/first-bg.jpg')] bg-no-repeat bg-center bg-cover">
      <Navbar openPage={openPage} setOpenPage={setOpenPage} />
    </div>
  );
};

export default NewBook;
