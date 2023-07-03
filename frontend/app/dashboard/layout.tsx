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
      });
    });
  }, []);

  useEffect(() => {
    if (!isSessionValid) {
      redirect("/auth/login");
    }
  }, [isSessionValid]);

  return (
    <main id="dashboard-layout">
      <div id="nav">
        <NavBar userInfo={userData} />
      </div>
      <div id="content">{props.children}</div>
    </main>
  );
}
