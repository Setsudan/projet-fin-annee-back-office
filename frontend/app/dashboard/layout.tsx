"use client";
import NavBar from "@components/navbar/navbar.component";
import "./layout.styles.scss";

import {
  getCurrentUserId,
  isSessionValidFunc,
  getUserData,
} from "@app/_utils/session";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { NavItem } from "@interface/nav.interface";
import {
  HiAcademicCap as DashboardIcon,
  HiUser as ProfileIcon,
  HiBookmark as CoursesIcon,
  HiBookOpen as MyCoursesIcon,
} from "react-icons/hi2";

const navData = {
  student: [
    {
      name: "Dashboard",
      icon: <DashboardIcon />,
      link: "/dashboard/student",
      type: "link",
    },
    {
      name: "Courses",
      icon: <CoursesIcon />,
      link: "/dashboard/student/courses",
      type: "link",
    },
    {
      name: "My Courses",
      icon: <MyCoursesIcon />,
      link: "/dashboard/student/my-courses",
      type: "link",
    },
    {
      name: "My Profile",
      icon: <ProfileIcon />,
      link: "/dashboard/student/profile",
      type: "link",
    },
  ],
  teach: [
    {
      name: "Dashboard",
      icon: <DashboardIcon />,
      link: "/dashboard/teacher",
      type: "link",
    },
    {
      name: "Plan Courses",
      icon: <CoursesIcon />,
      link: "/dashboard/teacher/courses",
      type: "link",
    },
    {
      name: "My Courses",
      icon: <MyCoursesIcon />,
      link: "/dashboard/teacher/my-courses",
      type: "link",
    },
    {
      name: "My Profile",
      icon: <ProfileIcon />,
      link: "/dashboard/teacher/profile",
      type: "link",
    },
  ],
  admin: [
    {
      name: "Dashboard",
      icon: <DashboardIcon />,
      link: "/dashboard/admin",
      type: "link",
    },
    {
      name: "Users",
      icon: <CoursesIcon />,
      link: "/dashboard/admin/users",
      type: "link",
    },
    {
      name: "Courses",
      icon: <MyCoursesIcon />,
      link: "/dashboard/admin/courses",
      type: "link",
    },
    {
      name: "My Profile",
      icon: <ProfileIcon />,
      link: "/dashboard/admin/profile",
      type: "link",
    },
  ],
};

export default function Layout(props: { children: React.ReactNode }) {
  const [userData, setUserData] = useState({
    avatar: "",
    email: "",
    first_name: "",
    id: "",
    last_name: "",
    role: "",
    username: "",
    verified: false,
  });

  const [isSessionValid, setIsSessionValid] = useState(true);
  const [userRole, setUserRole] = useState("");
  const [userNavitems, setUserNavitems] = useState<NavItem[] | undefined>([]);

  useEffect(() => {
    getCurrentUserId().then((id) => {
      if (id === undefined) {
        setIsSessionValid(false);
      }
      getUserData(id as string).then((data) => {
        setUserData({
          avatar:
            "http://127.0.0.1:8090/api/files/_pb_users_auth_/" +
            id +
            "/" +
            data?.avatar,
          email: data?.email,
          first_name: data?.first_name,
          id: id as string,
          last_name: data?.last_name,
          role: data?.role,
          username: data?.username,
          verified: data?.verified,
        });
        setUserRole(data?.role);
      });
    });
  }, []);

  useEffect(() => {
    if (!isSessionValid) {
      redirect("/auth/login");
    }
  }, [isSessionValid]);

  useEffect(() => {
    if (userRole) {
      /* @ts-ignore */
      console.log(navData[userRole]);
      /* @ts-ignore */
      setUserNavitems(navData[userRole]);
      console.log(userNavitems);
    }
  }, [userRole, userNavitems]);

  return (
    <main id="dashboard-layout">
      <div id="nav">
        <NavBar userInfo={userData} navItems={userNavitems as NavItem[]} />
      </div>
      <div id="content">{props.children}</div>
    </main>
  );
}
