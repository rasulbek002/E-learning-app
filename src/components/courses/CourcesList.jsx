import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CourseCard from "./CourseCard";
import { listCourses } from "./redux/courses-slice";
import CardShimmer from "../ui/CardShimmer";

export default function CourcesList() {
  const { courses, loading } = useSelector((state) => state.courses);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listCourses());
  }, []);

  return (
    <div>
      {loading && <CardShimmer/>}
      {courses.map((course) => {
        return (
          <div key={course.title} className=" mb-3">
            <CourseCard {...course} />
          </div>
        );
      })}
    </div>
  );
}
