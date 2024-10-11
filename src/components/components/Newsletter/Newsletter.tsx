import TextTitle from "../../../shared/TextTitles";
import { useForm } from "react-hook-form";
import Modal from "./Modal";

type Props = {};

const Newsletter = (props: Props) => {
  const inputStyles = ` w-full mt-7 px-3 rounded-lg focus:outline-none text-xs text-gray-100 bg-white py-3 placeholder:text-[10px] placeholder-gray-100 placeholder:opacity-70 placeholder:font-bold border-b-2 border-primary-200 border-opacity-30 focus:border-primary-100 focus:border-opacity-40`;
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
    <section className="mb-48 xs:flex xs:flex-col xs:items-center relative bg-[url('/src/assets/newsletter-cover.jpg')] bg-no-repeat bg-cover bg-center sm:h-[750px] xs:h-[583px]">
      <div className="w-11/12 mx-auto flex flex-col sm:justify-end sm:items-start sm:text-left xs:text-center h-full w-full px-10 py-10">
        <div id="newsletter" className=" sm:w-96 xs:w-full xs:pt-16">
          <TextTitle>Sign Up Our Newsletter</TextTitle>
        </div>
        <p className="mb-10 text-xs  md:max-w-96 sm:max-w-60">
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
        className="rounded-xl sm:absolute md:right-20 sm:right-10  sm:-bottom-[64px] flex flex-col w-[400px] bg-white"
      >
        <div className=" mx-14 my-10">
          <div className="relative">
            <input
              type="text"
              placeholder="NAME"
              className={inputStyles}
              {...register("name", {
                required: true,
                maxLength: 100,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors.name && (
              <Modal>
                {errors.name.type === "required" && "This field is required"}
                {errors.name.type === "maxLength" && "Max length is 100 char"}
                {errors.name.type === "pattern" && "Name is not valid"}
              </Modal>
            )}
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="EMAIL"
              className={inputStyles}
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <Modal>
                {errors.email.type === "required" && "This field is required"}
                {errors.email.type === "pattern" && "Email is not valid"}
              </Modal>
            )}
          </div>
          <div className="relative">
            <input
              type="tel"
              placeholder="PHONE NUMBER"
              className={inputStyles}
              {...register("phone", {
                required: true,
                maxLength: 16,
                pattern:
                  /^(\+?7|8)?[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{1}[\s\-]?[0-9]{1}[\s\-]?[0-9]{1}[\s\-]?[0-9]{1}[\s\-]?[0-9]{1}[\s\-]?[0-9]{1}[\s\-]?[0-9]{1}$/,
              })}
            />
            {errors.phone && (
              <Modal>
                {errors.phone.type === "required" && "This field is required"}
                {errors.phone.type === "maxLength" && "Max length is 16 char"}
                {errors.phone.type === "pattern" && "Phone number is not valid"}
              </Modal>
            )}
          </div>
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
