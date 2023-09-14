import { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      <h1>Total Course: {courses.length} </h1>
      {
        courses.map((course) => (<Course key={courses.id} course={course} ></Course>))
      }
    </div>
  );
};

export default Courses;
