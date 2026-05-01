const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="shadow-md p-4 rounded-lg bg-white">
      {children}
    </div>
  );
};

export default Card;