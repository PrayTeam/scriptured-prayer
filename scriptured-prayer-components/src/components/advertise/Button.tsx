interface ButtonProps extends React.ComponentPropsWithRef<"button"> {}

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`transition-colors ease-in bg-black text-white font-bold text-lg py-4 px-8 mt-6 hover:text-black hover:bg-white ${className}`}
    />
  );
}
