import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  href?: string;
};

const Button = ({ children, className, ...props }: Props) => {
  return (
    <motion.button
      className={`px-20 py-6 uppercase rounded-lg font-bold text-xs duration-300 ${className}`}
      {...props}
      initial="hidden"
      whileInView="visible"
      whileTap={{ scale: 0.95, transition: { duration: 0.01 } }}
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5, delay: 1 } },
      }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
