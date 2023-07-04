"use client";
import content from "@content/landing.json";
import {
  isSessionValidFunc,
  getCurrentUserId,
  getUserData,
} from "./_utils/session";
import { useEffect, useState } from "react";

export default function Home() {
  useEffect(() => {
    isSessionValidFunc().then((valid) => {
      if (valid) {
        getCurrentUserId().then((id) => {
          getUserData(id as string).then((data) => {
            if (data?.role !== "" && data?.role !== undefined) {
              window?.location?.replace("/dashboard/" + data?.role);
            } else {
              window?.location?.replace("/auth/login");
            }
          });
        });
      }
      return;
    });
  }, []);

  return (
    <main>
      <h1>Loading....</h1>{" "}
    </main>
  );
}
