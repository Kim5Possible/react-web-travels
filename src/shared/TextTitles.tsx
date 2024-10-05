type Props = {
  children: React.ReactNode;
};

const TextTitle = ({ children }: Props) => {
  return (
    <h1 className="text-5xl leading-tight font-bold mb-10 capitalize">
      {children}
    </h1>
  );
};

export default TextTitle;
