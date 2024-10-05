type Props = {
  children: React.ReactNode;
};

const TextTitle = ({ children }: Props) => {
  return (
    <h1 className="md:text-5xl sm:text-4xl xs:text-3xl leading-tight font-bold mb-10 capitalize">
      {children}
    </h1>
  );
};

export default TextTitle;
