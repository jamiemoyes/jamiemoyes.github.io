import { Colour } from "@/app/shared/types/types";
import classes from "./Badge.module.css";
import { PropsWithChildren } from "react";

interface BadgeProps extends PropsWithChildren {
  colour?: Colour | string;
  variant?: "standard" | "bold";
}

const Badge: React.FC<BadgeProps> = ({
  colour,
  variant = "standard",
  children,
}) => {
  return (
    <div className={classes.badge} data-variant={variant} data-color={colour}>
      {children}
    </div>
  );
};

export { Badge };
