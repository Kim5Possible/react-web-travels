import TextTitle from "../../../shared/TextTitles";
import { useForm } from "react-hook-form";

type Props = {};

const Newsletter = (props: Props) => {
  const inputStyles = `w-full mt-5 px-3 rounded-lg focus:outline-none text-xs text-gray-100 bg-white py-3 placeholder:text-[10px] placeholder-gray-100 placeholder:opacity-70 placeholder:font-bold border-b-2 border-primary-200 border-opacity-30 focus:border-primary-100 focus:border-opacity-40`;
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();
  const onSubmit = async (e: any) => {
    const isValid = await trigger();

    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section className="relative bg-[url('/src/assets/newsletter-cover.jpg')] bg-no-repeat bg-cover bg-center sm:h-[750px]">
      <div className="w-11/12 mx-auto flex flex-col justify-end items-start h-full w-full px-10 py-10">
        <div id="newsletter" className=" w-96">
          <TextTitle>Sign Up Our Newsletter</TextTitle>
        </div>
        <p className="mb-10 text-xs  max-w-96">
          The state of Utah in the United States is home to lots of beautiful
          National Parks, & Bryce Canyon National Park ranks as three of the
          most magnificent & awe inspiring.
        </p>
      </div>
      <form
        target="_blank"
        onSubmit={onSubmit}
        // action="https://formsubmit.co/your@email.ru"
        // method="POST"
        className="rounded-xl absolute right-32 -bottom-[64px] flex flex-col w-[400px] bg-white"
      >
        <div className=" mx-14 my-10">
          <input
            type="text"
            placeholder="NAME"
            className={inputStyles}
            {...register("name", { required: true, maxLength: 100 })}
          />
          <input
            type="text"
            name="email"
            placeholder="EMAIL"
            className={inputStyles}
          />
          <input
            type="text"
            name="phone number"
            placeholder="PHONE NUMBER"
            className={inputStyles}
          />
        </div>

        <div className="rounded-b-xl w-full text-center py-6 uppercase font-bold text-xs bg-primary-200 hover:bg-primary-100 duration-300 ">
          <button type="submit" className="uppercase w-full rounded-b-xl">
            Sign up now
          </button>
        </div>
      </form>
    </section>
  );
};

export default Newsletter;
