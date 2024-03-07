import { ReactElement } from "react";

interface props {
  title: string;
  children: ReactElement | ReactElement[];
  visible: boolean;
  button: ReactElement;
}

const PrivacySection = ({ title, children, visible, button }: props) => {
  return (
    <>
      <div className="flex justify-between">
        <h3 className="text-2xl font-semibold">{title}</h3>
        {button}
      </div>
      <div
        className="transition-all"
        style={{ maxHeight: visible ? "fit-content" : "0px" }}
      >
        {children}
      </div>
    </>
  );
};

export default PrivacySection;
