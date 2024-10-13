interface ContainerProps extends React.ComponentPropsWithRef<"div"> {}

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      {...props}
      className={`w-full px-6 py-8 max-w-screen-xl mx-auto ${className}`}
    />
  );
}
