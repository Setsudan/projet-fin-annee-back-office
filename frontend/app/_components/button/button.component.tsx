import "./button.styles.scss";
import type { ReactComponentElement } from "react";
import Image from "next/image";
export default function Button({
  type,
  isTransparent,
  text,
  leftIcon,
  rightIcon,
}: {
  type: "primary" | "secondary" | "alert" | "success" | "warning" | "info";
  isTransparent?: boolean;
  text?: string;
  leftIcon?: ReactComponentElement<any> | string;
  rightIcon?: ReactComponentElement<any> | string;
  onClick?: () => void;
}) {
  return (
    <button
      className={`button type-${type ? type : "primary"} ${
        isTransparent ? "transparent" : ""
      }
      ${leftIcon || rightIcon ? "with-icon" : ""}
      `}
    >
      {leftIcon ? (
        typeof leftIcon === "string" ? (
          <Image src={leftIcon} width={16} height={16} alt="icon" />
        ) : (
          leftIcon
        )
      ) : null}
      {text ? text : "Button"}
      {rightIcon ? (
        typeof rightIcon === "string" ? (
          <Image src={rightIcon} width={16} height={16} alt="icon" />
        ) : (
          rightIcon
        )
      ) : null}
    </button>
  );
}
