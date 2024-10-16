/* External dependencies */
import React from "react";

/* Local dependencies*/
import flame from "../../assets/flat.png";
import timeLogo from "../../assets/time.png";
import Button from "../ui/Button";

export default function CourseCard(props) {
  const { image, title, description, rating, time } = props;

  function onViewDetails() {
    console.log("onViewDetails");
  }

  return (
    <div className="bg-[#D9D9D9] p-2 flex justify-between items-center rounded-md ">
      <img className=" w-16 h-16" src={image} alt="" />
      <div>
        <h4 className=" ">{title}</h4>
        <p>{description}</p>
      </div>
      <div className=" flex gap-1 items-center">
        <img className=" w-5 h-5" src={timeLogo} alt="" />
        <p>{time}</p>
      </div>
      <div className=" flex gap-1 items-center">
        <img className=" w-5 h-5" src={flame} alt="" />
        <p>{rating}</p>
      </div>
      <Button onClick={onViewDetails} text="View course" />
    </div>
  );
}
