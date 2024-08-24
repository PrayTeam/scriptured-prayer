import { LoadingIcon } from "./Icons";

type LoaderProps = React.ComponentProps<"svg"> & { title?: string };

export function Loader(props: LoaderProps) {
  return <LoadingIcon width="24" height="24" {...props} />;
}
