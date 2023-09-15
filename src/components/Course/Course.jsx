import PropTypes from "prop-types";
import { BsBook } from "react-icons/bs";
import { FiDollarSign } from "react-icons/fi";

const Course = ({ course, handelAddToCart }) => {
  const { image, title, description, price, credit } = course;

  return (
    <div className="bg-white px-4 pt-4 mx-auto md:ml-2 xl:ml-12 lg:ml-2 justify-center items-center content-center xl:mt-12 lg:mt-6 md:mt-4 w-64">
      <div>
        <img className="rounded-lg w-full mx-auto" src={image} alt="" />

        <h1 className="text-[#1C1B1B] text-xl font-semibold mt-4"> {title} </h1>

        <p className="text-[#1C1B1B99] text-[14px] font-normal mt-2 ">
          {description}
        </p>

        <div className="text-[#1C1B1B99] text-[16px] my-5 flex justify-between items-center">
          <span className="flex items-center gap-1">
            <FiDollarSign /> Price : {price}
          </span>
          <span className="flex items-center gap-1">
            <BsBook /> Credit : {credit}
          </span>
        </div>
        <button
          onClick={() => handelAddToCart({ course })}
          className="text-white text-[18px] font-semibold bg-[#2F80ED] rounded-lg py-2 w-full mt-5 mb-4"
        >
          Select
        </button>
      </div>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
  handelAddToCart: PropTypes.func.isRequired,
  time: PropTypes.number.isRequired,
};

export default Course;
