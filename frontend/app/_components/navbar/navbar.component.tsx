"use client";
import Chip from "@components/chip/chip.components";
import "./navbar.styles.scss";
import UserChip from "@components/userChip/userChip.component";
import ChipDropdown from "@components/chipDropdown/chipDropdown.component";
import { useState, useEffect } from "react";
import { HiLogout } from "react-icons/hi";
import { NavItem } from "@interface/nav.interface";
import { authStore } from "@app/_utils/session";
import { redirect } from "next/navigation";

export default function NavBar({
  userInfo,
  navItems,
}: {
  userInfo: {
    avatar: string;
    email: string;
    first_name: string;
    id: string;
    last_name: string;
    role: string;
    username: string;
    verified: boolean;
  };
  navItems: NavItem[];
}) {
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

  useEffect(() => {
    console.log("navItems", navItems);
  });

  return (
    <nav>
      <UserChip userInfo={userInfo} />
      <div className="nav-content">
        {navItems.map((item) => {
          if (item.type === "link") {
            return (
              <Chip
                key={item.name}
                text={item.name}
                icon={item.icon}
                setIsSelected={setIsSelectedHandler(item.name)}
                isSelected={isSelected[item.name as keyof typeof isSelected]}
                onClicked={() => {
                  redirect(item.link as string);
                }}
              />
            );
          } else if (item.type === "dropdown") {
            return (
              <ChipDropdown
                key={item.name}
                dropDownContent={item.items as NavItem[]}
                text={item.name}
                icon={item.icon}
                setIsSelected={setIsSelectedHandler(item.name)}
                isSelected={isSelected[item.name as keyof typeof isSelected]}
                type="primary"
              />
            );
          }
        })}
      </div>
      <div className="bottom-btn">
        <Chip
          type="warning"
          text="Logout"
          setIsSelected={setIsSelectedHandler("logout")}
          isSelected={isSelected.logout}
          icon={<HiLogout />}
          onClicked={() => {
            authStore.clear();
            window?.location?.reload();
          }}
        />
      </div>
    </nav>
  );
}
