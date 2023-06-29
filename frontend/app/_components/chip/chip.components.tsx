"use client";

import { iconSize, primary, white } from "@scss/variables";
import React, { ReactComponentElement, useState } from "react";
import "./chip.styles.scss";

export default function Chip({
  text,
  icon,
  type,
  isSelected,
  setIsSelected,
}: {
  text: string;
  icon?: ReactComponentElement<any>;
  type?: "primary" | "secondary" | "alert" | "success" | "warning" | "info";
  isSelected: boolean;
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <button
      className={
        `chipButton ` +
        `${isSelected ? "chipSelected " : ""} ` +
        `${type ? type + "-" : "primary-"}chip`
      }
      onClick={() => {
        setIsSelected(!isSelected);
      }}
    >
      {icon ? (
        <div className="chipIcon">
          {React.cloneElement(icon, {
            /* color: isSelected ? primary : white, 
            color depends on type and isSelected
            */
            color: isSelected ? white : type ? type : "primary",
            size: iconSize,
          })}
        </div>
      ) : null}

      <p className={isSelected ? "chipTextSelected" : "chipText"}>{text}</p>
    </button>
  );
}
