import PropTypes from "prop-types";

const Carts = ({ carts, totalTime, remaining }) => {
  return (
    <div className="mt-12 lg:mt-0 md:mt-0 text-center md:text-start lg:text-start">
      <div className="bg-white px-6 lg:px-3 rounded-lg md:w-40 lg:w-44 xl:w-72 2xl:w-72 xl:mt-12 lg:mt-6 md:mt-4">
        <h3 className="text-[#2F80ED] text-[18px] font-bold pt-6">
          Credit Hour Remaining {remaining} hr
        </h3>
        <hr className="h-1 text-[#1C1B1B33] my-4" />
        <h3 className="text-[#1C1B1B] text-xl font-bold mb-4">Course Name</h3>

        {carts.map((cart, index) => (
          <div key={index}>
            <p className="text-[#1C1B1B99] text-[16px] font-normal space-y-4">
              {index + 1}. {cart.title}
            </p>
          </div>
        ))}
        <hr className="h-1 text-[#1C1B1B33] mt-6 mb-4" />
        <p>Total Credit Hour : {totalTime} hr </p>
        <hr className="h-1 text-[#1C1B1B33] pb-6 mt-4" />
      </div>
    </div>
  );
};

Carts.propTypes = {
  carts: PropTypes.object.isRequired,
  totalTime: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired,
};

export default Carts;
