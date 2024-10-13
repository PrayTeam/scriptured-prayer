import { LeftArrowIcon } from "./Icons";
import { useNavigate } from "react-router-dom";
import { theme } from "~/tailwind.config";

interface ContextualNavigationProps {
  title: string;
}

export function ContextualNavigation(props: ContextualNavigationProps) {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div className="lg:hidden fixed top-0 z-10 flex w-full bg-white p-4 border-b border-b-gray items-center">
      <div className="absolute cursor-pointer" onClick={goBack}>
        <LeftArrowIcon width={30} color={theme.colors.indigo} />
      </div>
      <div className="w-full text-center">{props.title}</div>
    </div>
  );
}
