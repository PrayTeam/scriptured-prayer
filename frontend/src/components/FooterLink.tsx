interface FooterLink extends React.ComponentPropsWithRef<"a"> {}

interface FooterLink {
  link: string;
}

export function FooterLink({ className, link, ...props }: FooterLink) {
  return (
    <a
      {...props}
      rel={`noopener noreferrer`}
      href={`${link}`}
      className={`hover:underline ${className}`}
    />
  );
}
