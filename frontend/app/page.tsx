"use client";
import { isSessionValidFunc } from "@utils/session";
import { getCurrentUserId, getUserData } from "@utils/user";
import { useEffect } from "react";
import "@scss/pages/bridge.scss";

export default function Home() {
  useEffect(() => {
    checkRedirect();
  }, []);

  const checkRedirect = async () => {
    const valid = await isSessionValidFunc();
    if (valid) {
      const id = await getCurrentUserId();
      const data = await getUserData(id as string);
      if (data?.role !== "" && data?.role !== undefined) {
        window?.location?.replace("/dashboard/" + data?.role);
      } else {
        window?.location?.replace("/auth/login");
      }
    }
  };

  return (
    <main id="bridge">
      <div className="loading">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="loading__circle"></div>
        ))}
      </div>
    </main>
  );
}
