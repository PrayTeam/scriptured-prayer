import { useNavigate } from "react-router-dom";

interface CardProps {
  title: string;
}

export function Card({ title }: CardProps) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/home")}
      className="flex w-full md:w-auto items-center p-6 mb-4 bg-olive rounded-xl text-white text-center uppercase md:text-3xl md:hover:scale-125 ease-out duration-300 cursor-pointer"
    >
      {title}
    </div>
  );
}
