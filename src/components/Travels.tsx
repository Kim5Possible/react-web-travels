import { useState } from "react";
import { Pages } from "../shared/types";
import Navbar from "./components/Navbar/Navbar";

const Travels: React.FC = () => {
  const [openPage, setOpenPage] = useState<Pages>(Pages.NewBook);
  return (
    <div>
      <Navbar openPage={openPage} setOpenPage={setOpenPage} />
    </div>
  );
};

export default Travels;
