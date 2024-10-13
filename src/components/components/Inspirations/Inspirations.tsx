import TextTitle from "../../../shared/TextTitles";
import image1 from "../../../assets/insp-1.jpg";
import image2 from "../../../assets/insp-2.jpg";
import image3 from "../../../assets/insp-3.jpg";
import image4 from "../../../assets/insp-4.jpg";
import image5 from "../../../assets/insp-5.jpg";
import image6 from "../../../assets/insp-6.jpg";
import image7 from "../../../assets/insp-7.jpg";
import ava1 from "../../../assets/avatar-1.jpg";
import ava2 from "../../../assets/avatar-2.jpg";
import Card from "./Card";
import { InspirationType } from "../../../shared/types";
import Text from "../../../shared/Text";

const images: Array<InspirationType> = [
  {
    src: image1,
    text: "Destinations",
    title: "A Guide To Rocky Mountains Vacation",
    featured: "Featured",
    avatar: [ava1, ava2, ava1],
  },
  {
    src: image2,
    text: "Destinations",
    title: "Traveling to Barcelona",
    playButton: true,
    avatar: [ava1, ava2],
  },
  {
    src: image3,
    text: "Destinations",
    title: "Party Jokes Startling But Unnecessary",
    avatar: [ava1, ava2],
  },
  {
    src: image4,
    title: "Maui By Air The Best Way Around The Island",
    avatar: [ava1, ava2],
  },
  {
    src: image5,
    text: "Andre Gide",
    title:
      "Man cannot discover new oceans unless he has the courage to lose sight of the shore.",
    avatar: [ava1, ava2],
  },
  {
    src: image6,
    text: "Destinations",
    title: "Traveling to Barcelona",
    playButton: true,
    avatar: [ava1, ava2],
  },
  {
    src: image7,
    title: "A Guide To Rocky Mountains Vacation",
    featured: "Featured",
    avatar: [ava1, ava2, ava1],
  },
];

const Inspirations = () => {
  return (
    <section
      id="inspiration"
      className="mb-36 w-11/12 mx-auto mt-24 text-gray-100"
    >
      <div className="mb-16 text-center">
        <TextTitle>Inspirations</TextTitle>
        <Text className="mx-auto max-w-md ">
          The state of Utah in the United States is home to lots of beautiful
          National Parks, & Bryce Canyon National Park ranks as three of the
          most magnificent & awe inspiring.
        </Text>
      </div>
      <div className="grid sm:grid-cols-3 xs:grid-cols-2 sm:grid-rows-subgrid xs:grid-rows-3 auto-rows-[0] gap-4 overflow-y-hidden">
        {images.map((image, index) => (
          <Card key={index} index={index} {...image} />
        ))}
      </div>
    </section>
  );
};

export default Inspirations;
