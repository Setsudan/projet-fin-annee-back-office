"use client";
import Badge from "@components/badge/badge.component";
import Button from "@components/button/button.component";
import Chip from "@components/chip/chip.components";
import ChipDropdown from "@components/chipDropdown/chipDropdown.component";
import Hero from "@components/hero/hero.component";
import Input from "@components/input/input.component";
import LogsContainer from "@components/logsContainer/logsContainer";
import ProjectCard from "@components/projectcard/projectcard.component";
import ScrollInfo from "@components/scrollInfo/scrollInfo.component";
import UserCard from "@components/usercard/usercard.component";
import VideoPlayer from "@components/videoplayer/videoplayer.component";
import {
  alert,
  iconSize,
  info,
  primary,
  secondary,
  success,
  warning,
} from "@scss/variables";
import { useState } from "react";
import {
  HiAcademicCap,
  HiArrowUpRight,
  HiCog6Tooth,
  HiFolder,
  HiHome,
  HiUsers,
} from "react-icons/hi2";

export default function Page() {
  const logContent = [
    { title: "Log 1", date: "2023-06-27" },
    { title: "Log 2", date: "2023-06-28" },
    { title: "Log 3", date: "2023-06-29" },
    { title: "Log 3", date: "2023-06-29" },
    { title: "Log 3", date: "2023-06-29" },
  ];
  const evenement = [
    "Masterclass #210",
    "Masterclass #173",
    "Converence #14",
    "Masterclass #172",
    "Converence #12",
    "Masterclass #210",
    "Masterclass #210",
  ];

  const dropDownContent = [
    {
      link: "https://google.com",
      text: "Google",
    },
    {
      link: "https://google.com",
      text: "Google",
    },
    {
      link: "https://google.com",
      text: "Google",
    },
    {
      link: "https://google.com",
      text: "Google",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: "#efefef",
        padding: "5rem",
      }}
    >
      <div
        className="component"
        style={{
          marginBottom: "2rem",
        }}
      >
        <h1>Input</h1>
        <Input
          label="Exemple"
          name="exemple"
          placeholder="Some text here"
          onChange={(e) => console.log(e)}
        />
        <Input
          type="email"
          label="Email example"
          name="exemple"
          placeholder="Email here"
        />
        <Input
          type="password"
          label="Password example"
          name="exemple"
          placeholder="Password here"
        />
        <Input
          type="tel"
          label="Phone example"
          name="exemple"
          placeholder="Phone here"
        />
      </div>
      <div
        className="component"
        style={{
          marginBottom: "2rem",
        }}
      >
        <h1>Button</h1>
        <div
          className="multiples-components"
          style={{
            width: "90vw",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "1rem",
          }}
        >
          <div>
            <Button type="primary" text="Primary" />
            <Button type="primary" isTransparent text="Primary transparent" />
          </div>
          <div>
            <Button type="secondary" text="Secondary" />
            <Button
              type="secondary"
              isTransparent
              text="Secondary transparent"
            />
          </div>
          <div>
            <Button type="success" text="Success" />
            <Button type="success" isTransparent text="Success transparent" />
            <Button
              type="success"
              isTransparent
              text="With icon"
              leftIcon={<HiFolder size={iconSize} color={success} />}
              rightIcon={<HiArrowUpRight size={iconSize} color={success} />}
            />
          </div>
          <div>
            <Button type="alert" text="Alert" />
            <Button type="alert" isTransparent text="Alert transparent" />
            <Button
              type="alert"
              isTransparent
              text="With icon"
              leftIcon={<HiFolder size={iconSize} color={alert} />}
              rightIcon={<HiArrowUpRight size={iconSize} color={alert} />}
            />
          </div>
          <div>
            <Button type="warning" text="Warning" />
            <Button type="warning" isTransparent text="Warning transparent" />
            <Button
              type="warning"
              isTransparent
              text="With icon"
              leftIcon={<HiFolder color={warning} size={iconSize} />}
              rightIcon={<HiArrowUpRight color={warning} size={iconSize} />}
            />
          </div>
        </div>
      </div>
      <div className="components">
        <h1>Card</h1>
        <UserCard
          name="John Doe"
          role="Software Engineer"
          profilePicture="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1330&q=80"
        />
      </div>
      <div className="component">
        <h1>Hero</h1>
        <Hero image="https://images.unsplash.com/photo-1687226013074-5d59ffeb2625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80">
          <h1>Hero title</h1>
          <Input label="Exemple" name="exemple" placeholder="Some text here" />
          <Input label="Exemple" name="exemple" placeholder="Some text here" />
          <Button type="primary" text="Submit" />
        </Hero>
      </div>
      <div className="component">
        <VideoPlayer
          video="https://www.shutterstock.com/shutterstock/videos/1099171545/preview/stock-footage--d-render-of-monochrome-black-and-white-abstract-art-video-animation-with-surreal-ball-or-sphere.webm"
          hasControls
        />
      </div>
      <div className="component">
        <h1>Badge</h1>
        <Badge icon={<HiFolder color={success} />} type="success" />
        <Badge icon={<HiFolder color={alert} />} type="alert" />
        <Badge icon={<HiFolder color={info} />} type="info" />
        <Badge icon={<HiFolder color={warning} />} type="warning" />
        <Badge icon={<HiFolder color={primary} />} type="primary" />
        <Badge icon={<HiFolder color={secondary} />} type="secondary" />
      </div>
      <div className="projectcard">
        <h1>ProjectCard</h1>
        <ProjectCard
          icon={<HiFolder color={primary} />}
          status="In Progress"
          progress={64}
          link=""
          name="John Doe"
          role="Monteur"
          type="montage"
        />
      </div>
      <div className="component">
        <h1>Chip</h1>
        <Chip
          setIsSelected={setIsOpen}
          isSelected={isOpen}
          icon={<HiHome />}
          text="Dashboard"
        />
        <Chip
          setIsSelected={setIsOpen}
          isSelected={isOpen}
          icon={<HiAcademicCap />}
          text="Project"
        />
        <Chip
          setIsSelected={setIsOpen}
          isSelected={isOpen}
          icon={<HiUsers />}
          text="Moderators"
        />
        <Chip
          setIsSelected={setIsOpen}
          isSelected={isOpen}
          icon={<HiCog6Tooth />}
          text="Settings"
        />
      </div>
      <h1>Scroll Projet En Cours</h1>
      <div className="component">
        <h1>Scroll Projet En Cours</h1>
        <ScrollInfo dataContent={evenement} />
      </div>
      <div className="component">
        <ChipDropdown
          icon={<HiHome />}
          text="Dashboard"
          dropDownContent={dropDownContent}
          isSelected={isOpen}
          setIsSelected={setIsOpen}
          type="primary"
        />
      </div>
      <h1>Logs container</h1>
      <LogsContainer dataContent={logContent} />
    </main>
  );
}
