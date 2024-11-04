import { UpArrowIcon } from "./Icons";

interface JumpProps extends React.ComponentPropsWithRef<"div"> {}

export function Jump({ className, ...props }: JumpProps) {
  return (
    <div
      onClick={() => window.scroll(0, 0)}
      className={`rounded-full bg-indigo p-3 w-14 h-14 -top-2 cursor-pointer ${className}`}
      {...props}
    >
      <UpArrowIcon className="w-full" color="#fff" />
    </div>
  );
}
