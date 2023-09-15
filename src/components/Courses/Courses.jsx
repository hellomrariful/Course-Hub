import { useEffect, useState } from "react";
import Course from "../Course/Course";
import PropTypes from "prop-types";

const Courses = ({ handelAddToCart }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="md:grid lg:grid grid-cols-3 gap-4 space-y-8 md:space-y-0 lg:space-y-0 ">
      {courses.map((course) => (
        <Course
          key={courses.id}
          course={course}
          handelAddToCart={handelAddToCart}
        ></Course>
      ))}
    </div>
  );
};

Courses.propTypes = {
  handelAddToCart: PropTypes.func.isRequired,
  time: PropTypes.number.isRequired,
};

export default Courses;
