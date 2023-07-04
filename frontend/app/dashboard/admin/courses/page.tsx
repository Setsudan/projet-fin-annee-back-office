"use client";

import { getAllCourses, getRelatedClasses } from "@utils/courses";

import { useEffect, useState } from "react";

// Create an interface for this
/* the res is an array of these : {
          collectionId: "d6rj2wd7e5atyn6"
          collectionName: "courses"
          created: "2023-07-04 17:36:43.406Z"
          date: "2023-07-04 12:00:00.000Z"
          expand: Object {  }
          id: "x32jnp1vewhhwva"
          isPublic: true
          name: "Full Moon"
          related_class: "kmww8stpdzs25se"
          status: "ready"
          updated: "2023-07-04 17:36:43.406Z"
      video: "screen_recording_1ThnMLukOp.webm"
  }*/

interface ICourse {
  collectionId: string;
  collectionName: string;
  created: string;
  date: string;
  expand: any;
  id: string;
  isPublic: boolean;
  name: string;
  related_class: string;
  status: string;
  updated: string;
  video: string;
}

interface IRelatedClass {
  collectionId: string;
  collectionName: string;
  created: string;
  description: string;
  expand: any;
  id: string;
  name: string;
  participants: string[];
  teach: string[];
  updated: string;
}

export default function Page() {
  const [allCourses, setAllCourses] = useState<ICourse[]>([]);
  const [relatedClasses, setRelatedClasses] = useState<IRelatedClass[]>([]);

  useEffect(() => {
    getAllCourses().then((res) => {
      setAllCourses(res?.items as any);
    });
  }, []);

  useEffect(() => {
    // add a security in case it's undefined
    allCourses[0] &&
      getRelatedClasses(allCourses[0].related_class).then((res) => {
        setRelatedClasses(res?.items as any);
      });
  }, [allCourses]);

  useEffect(() => {
    console.log("allcourses", allCourses);
    console.log("relatedClasses", relatedClasses);
  }, [allCourses, relatedClasses]);

  return (
    <>
      <h1>Courses</h1>
    </>
  );
}
