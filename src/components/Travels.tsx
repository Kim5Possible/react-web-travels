import { useState } from "react";
import { Pages } from "../shared/types";
import NewBook from "./components/NewBook/NewBook";

const Travels: React.FC = () => {
  const [openPage, setOpenPage] = useState<Pages>(Pages.NewBook);
  return (
    <div>
      <NewBook openPage={openPage} setOpenPage={setOpenPage} />
    </div>
  );
};

export default Travels;
