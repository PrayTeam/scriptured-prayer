interface FooterLinks extends React.ComponentPropsWithRef<"div"> {}

export function FooterLinks({ className, ...props }: FooterLinks) {
  return <div {...props} className={`flex flex-col space-y-2 ${className}`} />;
}
