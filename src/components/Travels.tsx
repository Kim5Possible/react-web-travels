import { Pages } from "../shared/types";
import NewBook from "./components/NewBook/NewBook";
import Lessons from "./components/Lessons/Lessons";
import Featured from "./components/Featured/Featured";
import FeaturedVideos from "./components/FeaturedVideos/FeaturedVideos";
import Newsletter from "./components/Newsletter/Newsletter";

const Travels: React.FC = () => {
  return (
    <div>
      <NewBook />
      <Lessons />
      <Featured />
      <FeaturedVideos />
      <Newsletter />
    </div>
  );
};

export default Travels;
