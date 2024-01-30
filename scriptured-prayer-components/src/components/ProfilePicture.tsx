import defaultUser from "~/assets/default-user.png";

interface ProfilePictureProps {
  size?: number;
  src?: string;
}

export function ProfilePicture(props: ProfilePictureProps) {
  const size = props.size ?? 48;
  const src = props.src ?? defaultUser;

  return (
    <div
      className="rounded-full bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url('${src}')`,
        width: size,
        height: size,
      }}
    ></div>
  );
}
