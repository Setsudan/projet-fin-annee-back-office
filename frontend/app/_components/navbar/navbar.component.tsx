"use client";
import Chip from "@components/chip/chip.components";
import { HiHome, HiCog, HiAcademicCap, HiUser } from "react-icons/hi2";
import "./navbar.styles.scss";
import UserChip from "@components/userChip/userChip.component";
import ChipDropdown from "@components/chipDropdown/chipDropdown.component";
import { useState } from "react";
import { HiLogout } from "react-icons/hi";
export default function NavBar({
  userInfo,
}: {
  userInfo: {
    avatar: string,
email: string,
first_name: string,
id: string,
last_name: string,
role: string,
username: string,
verified: boolean,
  };
}) {
  const dropDownContent = [
    {
      text: "Project 1",
      link: "https://google.com",
    },
    {
      text: "Project 2",
      link: "https://google.com",
    },
    {
      text: "Project 3",
      link: "https://google.com",
    },
    {
      text: "Project 4",
      link: "https://google.com",
    },
  ];

  const [isSelected, setIsSelected] = useState({
    dashboard: false,
    project: false,
    moderator: false,
    settings: false,
    logout: false,
  });

  const setIsSelectedHandler = (chipName: string) => {
    return () => {
      // reset all the chips
      setIsSelected({
        dashboard: false,
        project: false,
        moderator: false,
        settings: false,
        logout: false,
      });
      // set the selected chip
      setIsSelected((prevState) => {
        return {
          ...prevState,
          [chipName]: true,
        };
      });
    };
  };

  return (
    <nav>
      <UserChip userInfo={userInfo} />
      <div className="nav-content">
        <Chip
          text="Dashboard"
          icon={<HiHome />}
          setIsSelected={setIsSelectedHandler("dashboard")}
          isSelected={isSelected.dashboard}
        />
        <ChipDropdown
          dropDownContent={dropDownContent}
          text="Project"
          icon={<HiAcademicCap />}
          setIsSelected={setIsSelectedHandler("project")}
          isSelected={isSelected.project}
          type="primary"
        />
        <Chip
          text="Moderator"
          icon={<HiUser />}
          setIsSelected={setIsSelectedHandler("moderator")}
          isSelected={isSelected.moderator}
        />
        <Chip
          text="Settings"
          icon={<HiCog />}
          setIsSelected={setIsSelectedHandler("settings")}
          isSelected={isSelected.settings}
        />
      </div>
      <div className="bottom-btn">
        <Chip
          type="warning"
          text="Logout"
          setIsSelected={setIsSelectedHandler("logout")}
          isSelected={isSelected.logout}
          icon={<HiLogout />}
        />
      </div>
    </nav>
  );
}
