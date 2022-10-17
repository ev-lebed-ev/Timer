import { ButtonHTMLAttributes, memo, PropsWithChildren, ReactNode } from "react";
import classes from "./Button.css";

type ButtonProps = PropsWithChildren & {
  onClick: NonNullable<ButtonHTMLAttributes<HTMLButtonElement>["onClick"]>;
  children: NonNullable<ReactNode>;
}

const Button = memo<ButtonProps>((props) => (
  <button className={classes.button} {...props} />
));
Button.displayName = "Button";

export { Button };
