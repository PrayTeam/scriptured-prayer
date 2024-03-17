interface FooterColumn extends React.ComponentPropsWithRef<"div"> {}

export function FooterColumn({ className, ...props }: FooterColumn) {
  return (
    <div
      {...props}
      className={`flex flex-col space-y-4 ${className}`}
    />
  );
}
