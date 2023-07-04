"use client";
import { getCurrentUserData } from "@utils/user";
import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function ProfilePage() {
  const user = getCurrentUserData();

  useEffect(() => {
    if (!user) {
      redirect("/login");
    }
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      <p>{user?.email}</p>
    </div>
  );
}
