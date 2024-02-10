interface InputProps extends React.ComponentPropsWithRef<"input"> {}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`flex w-full mb-4 rounded p-2 text-black outline-none ${className}`}
    />
  );
}
