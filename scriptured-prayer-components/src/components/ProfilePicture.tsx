import defaultUser from "~/assets/icons/default-user.png";

interface ProfilePictureProps extends React.ComponentPropsWithRef<"div"> {
  size?: number;
  src?: string;
}

export function ProfilePicture({
  className,
  size,
  src,
  ...props
}: ProfilePictureProps) {
  const imgSize = size ?? 48;
  const imgSrc = src ?? defaultUser;

  return (
    <div
      {...props}
      className={`rounded-full bg-no-repeat bg-center bg-cover ${props.onClick ? "cursor-pointer" : ""} ${className}`}
      style={{
        backgroundImage: `url('${imgSrc}')`,
        width: imgSize,
        height: imgSize,
      }}
    ></div>
  );
}
