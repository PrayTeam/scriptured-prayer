interface LinkProps {
  href: string;
  children: string;
}

export function Link(props: LinkProps) {
  return (
    <a className="underline text-emerald" href={props.href}>
      {props.children}
    </a>
  );
}
