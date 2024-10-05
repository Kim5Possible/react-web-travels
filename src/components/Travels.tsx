import { useState } from "react";
import { Pages } from "../shared/types";
import NewBook from "./components/NewBook/NewBook";
import Lessons from "./components/Lessons/Lessons";
import Featured from "./components/Featured/Featured";
import FeaturedVideos from "./components/FeaturedVideos/FeaturedVideos";

const Travels: React.FC = () => {
  const [openPage, setOpenPage] = useState<Pages>(Pages.NewBook);
  return (
    <div>
      <NewBook openPage={openPage} setOpenPage={setOpenPage} />
      <Lessons setOpenPage={setOpenPage} />
      <Featured setOpenPage={setOpenPage} />
      <FeaturedVideos setOpenPage={setOpenPage} />
    </div>
  );
};

export default Travels;
