import PropTypes from "prop-types";

const Course = ({ course, handelAddToCart }) => {
  const { image, title, description, price, credit } = course;

  return (
    <div className="bg-white px-4 pt-4 mx-auto ml-4">
      <div>
        <img className="rounded-lg" src={image} alt="" />

        <h1 className="text-[#1C1B1B] text-xl font-semibold mt-4"> {title} </h1>

        <p className="text-[#1C1B1B99] text-[14px] font-normal mt-2">
          {" "}
          {description}{" "}
        </p>

        <div className="text-[#1C1B1B99] text-[16px] my-5 flex justify-between">
          <div>Price: {price} </div>
          <div>Credit: {credit}</div>
        </div>

        <button
          onClick={() => handelAddToCart(course)}
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
};

export default Course;
