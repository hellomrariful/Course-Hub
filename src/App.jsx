import { useState } from "react";
import "./App.css";
import Carts from "./components/Carts/Carts";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [carts, setCarts] = useState([]);
  const [remaining, setRemaining] = useState(20);
  const [totalTime, setTotalTime] = useState(0);

  const handelAddToCart = ({ course }) => {
    const isExist = carts.find((item) => item.id == course.id);

    let count = course.credit;

    if (isExist) {
      toast.error("Course already added, Please check your list.");
    } else {
      carts.forEach((i) => {
        count += i.credit;
      });

      const totalTimeRemaining = 20 - count;

      if (count > 20) {
        return toast.error("Credit hour limit exceeded.");
      } else {
        setTotalTime(count);
        setRemaining(totalTimeRemaining);
        const newCarts = [...carts, course];
        setCarts(newCarts);
      }
    }
  };

  return (
    <>
      <div className="bg-[#F3F3F3] max-w-screen-2xl mx-auto pb-20 lg:px-16 md:px-16 xl:px-32 2xl:px-32 px-6">
        <Header></Header>

        <div className="lg:flex md:flex justify-between gap-4">
          <Courses handelAddToCart={handelAddToCart}></Courses>
          <Carts
            totalTime={totalTime}
            remaining={remaining}
            carts={carts}
          ></Carts>
        </div>
        <Toaster position="top-center" reverseOrder={true}></Toaster>
      </div>
    </>
  );
}

export default App;
