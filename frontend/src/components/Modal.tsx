import { createContext, useContext, useEffect, useState } from "react";

const ModalContext = createContext({ toggle: () => {}, open: false });

interface RootProps extends React.ComponentPropsWithRef<"div"> {}

function Root(props: RootProps) {
  const [open, setOpen] = useState(false);
  const toggleModal = () => setOpen(!open);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "initial";
  }, [open]);

  return (
    <ModalContext.Provider value={{ toggle: toggleModal, open }}>
      {props.children}
    </ModalContext.Provider>
  );
}

interface ContainerProps extends React.ComponentPropsWithRef<"div"> {}

function Container(props: ContainerProps) {
  const { toggle, open } = useContext(ModalContext);

  if (!open) return <></>;

  return (
    <>
      <div
        onClick={toggle}
        style={{ backgroundColor: "rgba(0,0,0,.5)" }}
        className="fixed w-full h-full z-20"
      />
      <div className="fixed h-full w-full max-w-screen-lg -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-30 overflow-y-auto scrollbar-hidden">
        <div className="bg-white p-4 rounded-xl m-4">{props.children}</div>
      </div>
    </>
  );
}

export function useModal() {
  const modalContext = useContext(ModalContext);
  if (!modalContext) {
    console.error(
      new Error("ModalContext must be used inside ModalContext.Provider."),
    );
  }

  return modalContext;
}

export default useModal;

export const Modal = {
  useModal,
  Root,
  Trigger: ModalContext.Consumer,
  Container,
};
