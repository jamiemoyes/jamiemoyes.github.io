import { ComponentProps } from "react";

export const ArrowRight: React.FC<ComponentProps<"svg">> = (props) => {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M32 0L26.36 5.64L48.68 28H0V36H48.68L26.36 58.36L32 64L64 32L32 0Z" />
    </svg>
  );
};
