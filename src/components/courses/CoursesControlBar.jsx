import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { listCourses } from "./redux/courses-slice";

export default function CoursesControlBar() {
  const { filterByTag } = useSelector((state) => state.courses);

  const dispatch = useDispatch();

  const filters = [
    {
      title: "All Courses",
      value: "all",
    },
    {
      title: "The Newest",
      value: "newest",
    },
    {
      title: "Top Rated",
      value: "topRated",
    },
    {
      title: "Most Popular",
      value: "popular",
    },
  ];

  function onClickFilter(filterValue) {
    dispatch(
      listCourses({
        filterValue,
      })
    );
  }

  return (
    <div>
      <h2 className=" text-left text-2xl text-black font-bold mb-4">Courses</h2>
      <div className=" flex gap-7">
        {filters.map((filter) => {
          const activeFilterStyles =
            filterByTag === filter.value ? "font-bold text-black" : "";

          return (
            <h3
              key={filter.value}
              onClick={() => onClickFilter(filter.value)}
              className={`text-[16px] ${activeFilterStyles}`}
            >
              {filter.title}
            </h3>
          );
        })}
      </div>
    </div>
  );
}
