import React from "react";

import logo from "../../assets/logo.png";

export default function Sidebar() {
  const pages = ["home", "createCourse"];

  return (
    <div className=" bg-black rounded-2xl px-10 py-4">
      <img src={logo} className=" pb-12" />
      <div>
        {pages.map((page) => {
          return (
            <div>
              <a className=" pb-8  text-white" href={page}>
                {page}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
