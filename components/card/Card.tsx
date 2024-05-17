import { ReactNode, MouseEventHandler, forwardRef } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
  onClick?: MouseEventHandler;
};
const Card = forwardRef<HTMLDivElement, Props>(
  ({ children, className, onClick }: Props, ref) => {
    return (
      <div
        className={`h-max flex justify-between items-center border-none m-2 p-6 bg-primary/60 rounded-3xl overflow-hidden ${
          className && className
        }`}
        onClick={onClick}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";
export default Card;
