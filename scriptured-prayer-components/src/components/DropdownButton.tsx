import { Button } from "@radix-ui/themes";

interface props {
  onClick: () => void;
  open: boolean;
}

const DropdownButton = ({ onClick, open }: props) => {
  return (
    <Button
      className="bg-transparent transition-all text-black text-3xl relative bottom-[2px] hover:text-white hover:cursor-pointer"
      onClick={onClick}
      style={{ rotate: open ? "0deg" : "90deg" }}
    >
      ▽
    </Button>
  );
};

export default DropdownButton;
