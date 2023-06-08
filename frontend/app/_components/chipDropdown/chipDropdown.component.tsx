import Link from "next/link";
import React, { ReactComponentElement } from "react";
import "./chipDropdown.styles.scss";
interface IdropdownContent {
  link: string;
  text: string;
}

export default function ChipDropdown({
  text,
  icon,
  dropDownContent,
  setIsSelected,
  isSelected,
  type,
}: {
  text: string;
  icon?: ReactComponentElement<any>;
  dropDownContent: IdropdownContent[];
  isSelected: boolean;
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
  type?: "primary" | "secondary" | "alert" | "success" | "warning" | "info";
}) {
  return (
    <div className="chipDropdown">
      <button
        className={`chipButton ` + `${type ? type + "-" : "primary-"}chip`}
        onClick={() => setIsSelected(!isSelected)}
      >
        {icon ? (
          <div className="chipIcon">
            {React.cloneElement(icon, {
              color: type ? type : "primary",
              size: 20,
            })}
          </div>
        ) : null}

        <p className="chipText">{text}</p>
      </button>
      {isSelected ? (
        <div className="chipDropdownContent">
          {dropDownContent.map((item, index) => (
            <Link href={item.link} key={index}>
              {item.text}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
