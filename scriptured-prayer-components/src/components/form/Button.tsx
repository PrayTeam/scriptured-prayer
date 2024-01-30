interface ButtonProps extends React.ComponentPropsWithRef<"button"> {}

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`bg-olive rounded p-2 w-full text-white ${className}`}
    />
  );
}
