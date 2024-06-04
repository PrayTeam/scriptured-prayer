import { useProfile } from "~/hooks";

interface LinkProps {
  href: string;
  children: string;
}

export function Link(props: LinkProps) {
  const { profile } = useProfile();

  return (
    <a
      className="underline text-emerald"
      href={`/${profile.language}${props.href}`}
    >
      {props.children}
    </a>
  );
}
