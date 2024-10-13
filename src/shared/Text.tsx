import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Text = ({ children, className }: Props) => {
  return (
    <motion.p
      className={`mb-10 text-xs ${className}`}
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
    </motion.p>
  );
};

export default Text;
