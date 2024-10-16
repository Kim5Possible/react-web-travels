import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const TextTitle = ({ children, className }: Props) => {
  return (
    <motion.h1
      className={`md:text-5xl sm:text-4xl xs:text-3xl leading-tight font-bold mb-10 capitalize ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {children}
    </motion.h1>
  );
};

export default TextTitle;
