import { useState } from "react";
import { Pages } from "../shared/types";
import NewBook from "./components/NewBook/NewBook";
import Lessons from "./components/Lessons/Lessons";
import Featured from "./components/Featured/Featured";

const Travels: React.FC = () => {
  const [openPage, setOpenPage] = useState<Pages>(Pages.NewBook);
  return (
    <div>
      <NewBook openPage={openPage} setOpenPage={setOpenPage} />
      <Lessons setOpenPage={setOpenPage} />
      <Featured setOpenPage={setOpenPage} />
    </div>
  );
};

export default Travels;
