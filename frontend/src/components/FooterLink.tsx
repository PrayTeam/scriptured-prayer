interface FooterLink extends React.ComponentPropsWithRef<"a"> {}

interface FooterLink {
  link: string;
  highlight?: boolean;
}

export function FooterLink({
  className,
  link,
  highlight,
  ...props
}: FooterLink) {
  return (
    <a
      {...props}
      rel={`noopener noreferrer`}
      href={`${link}`}
      className={`hover:underline ${className} ${highlight ? "text-gray" : ""}`}
    />
  );
}
