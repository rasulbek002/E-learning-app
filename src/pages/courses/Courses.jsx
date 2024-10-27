/* External dependencies*/
import React from "react";

/* Local dependencies*/
import CourcesList from "../../components/courses/CourcesList";
import CoursesControlBar from "../../components/courses/CoursesControlBar";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Courses() {
  return (
    <div className=" flex gap-4">
      <Sidebar />
      <div>
        <CoursesControlBar />
        <CourcesList />
      </div>
    </div>
  );
}
