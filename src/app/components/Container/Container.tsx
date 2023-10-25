import classes from "./Container.module.css";
import { PropsWithChildren } from "react";
import { Colour } from "../../shared/types/types";

interface ContainerProps extends PropsWithChildren {
  colour: Colour;
}

const Container: React.FC<ContainerProps> = ({ colour, children }) => {
  return (
    <div className={[classes.container, classes[colour]].join(" ")}>
      {children}
    </div>
  );
};

export { Container };
