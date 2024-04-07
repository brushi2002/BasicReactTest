import { ReactNode } from "react";
import Alert from "./Alert";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger" | "success";
  onClick: () => void;
}

const handleClick = () => {};

const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <>
      <button className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
