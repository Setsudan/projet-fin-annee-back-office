"use client";
import content from "@content/landing.json";
import { isSessionValidFunc } from "./_utils/session";
import { useEffect } from "react";
import { redirect } from 'next/navigation';

export default function Home() {
  useEffect(() => {
    if (!isSessionValidFunc()) {
      redirect('/auth/login');
    }
    redirect('/dashboard')
  }, []);

  return (
    <main>
      <h1>{content.title}</h1>
    </main>
  );

}
