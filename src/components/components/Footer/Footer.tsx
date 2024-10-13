import AnchorLink from "react-anchor-link-smooth-scroll";
import Modal from "../../../shared/Modal";
import { useState } from "react";

const footer: Array<{
  title: string;
  links: Array<{ name: string; href: string }>;
}> = [
  {
    title: "Company",
    links: [
      { name: "About", href: "#lessons" },
      { name: "Press", href: "#newbook" },
      { name: "Blog", href: "#featured" },
      { name: "Careers", href: "#newbook" },
      { name: "Security", href: "#newbook" },
      { name: "Driver Centre", href: "#newbook" },
    ],
  },
  {
    title: "Information",
    links: [
      { name: "Our Story", href: "#newbook" },
      { name: "Recipes", href: "#newbook" },
      { name: "Nutrition", href: "#newbook" },
      { name: "Resources", href: "#newbook" },
      { name: "Newsletter", href: "#newsletter" },
      { name: "Contact", href: "#newsletter" },
    ],
  },
  {
    title: "Information",
    links: [
      { name: "Customer service", href: "#newbook" },
      { name: "Recommend a restaurant", href: "#newbook" },
      { name: "Sifnup a restaurant", href: "#newbook" },
      { name: "Jobs", href: "#newbook" },
      { name: "Press", href: "#newbook" },
      { name: "Terms of use", href: "#newbook" },
    ],
  },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      setError("This field is required");
    } else {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!emailRegex.test(email)) {
        setError("Email is not valid");
      } else {
        setError("");
        e.currentTarget.submit();
      }
    }
  };
  return (
    <footer className="text-gray-100">
      <div className=" border-y-gray-100 border-y border-opacity-30 pt-24">
        <div className="w-11/12 mx-auto sm:flex justify-between flex-wrap">
          <div className="flex justify-between mb-20 basis-3/5">
            {footer.map((item, index) => (
              <div key={index} className=" text-xs">
                <h3 className="font-bold mb-5 uppercase">{item.title}</h3>
                <div className="w-[50px] h-[1px] bg-primary-200 mb-5" />
                <ul>
                  {item.links.map((link, index) => (
                    <li
                      className="mb-3 opacity-75 cursor-pointer hover:opacity-100"
                      key={index}
                    >
                      <AnchorLink href={link.href}>{link.name}</AnchorLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <form
            action="#"
            className="flex flex-col md:w-[350px] xs:w-[350px] sm:w-[250px] mb-10 bg-white"
            onSubmit={handleSubmit}
          >
            <h3 className="text-xs font-bold mb-5 uppercase">Subscribe now</h3>
            <div className="w-[50px] h-[1px] bg-primary-200 mb-8" />
            <div className="relative mb-8">
              <input
                type="text"
                name="email"
                placeholder="EMAIL"
                className=" w-full px-3 rounded-lg focus:outline-none text-xs text-gray-100 bg-white py-3 placeholder:text-[10px] placeholder-gray-100 placeholder:opacity-70 placeholder:font-bold border border-primary-200 border-opacity-30 focus:border-primary-100 focus:border-opacity-40"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {error && <Modal>{error}</Modal>}
            </div>

            <button
              type="submit"
              className="rounded-xl w-full text-white text-center py-6 uppercase font-bold text-xs bg-primary-200 hover:bg-primary-100 duration-300 "
            >
              Subscribe now
            </button>
          </form>
        </div>
      </div>
      <div className="w-11/12 mx-auto flex justify-end gap-5 py-4 text-xs cursor-pointer">
        <a href="#" className="opacity-75 hover:opacity-100">
          Terms of Service
        </a>
        <a href="#" className="opacity-75 hover:opacity-100">
          Privace Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
