import { ContextualNavigation } from "./ContextualNavigation";

interface NestedScreenProps extends React.ComponentPropsWithRef<"div"> {
  title: string;
}

export function NestedScreen({ className, ...props }: NestedScreenProps) {
  return (
    <div className={`h-full ${className}`} {...props}>
      <ContextualNavigation title={props.title} />
      <div className="h-full pt-[57px] lg:mt-0">{props.children}</div>
    </div>
  );
}
