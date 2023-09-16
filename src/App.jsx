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
      const displayErrorToast = () => {
        toast.dismiss("error-toast");
        toast.error("Course already added,Please check your list.", {
          id: "error-toast",
          duration: 1000,
          style: {
            padding: "8px",
            paddingLeft: "18px",
            color: "#ED4337",
          },
          iconTheme: {
            primary: "#ED4337",
            secondary: "#FFFFFF",
          },
        });
      };
      displayErrorToast();
    } else {
      carts.forEach((i) => {
        count += i.credit;
      });

      const totalTimeRemaining = 20 - count;

      if (count > 20) {
        const displayErrorToast = () => {
          toast.dismiss("error-toast");
          toast.error("Credit hour limit exceeded.", {
            id: "error-toast",
            duration: 1000,
            style: {
              padding: "14px",

              color: "#ED4337",
            },
            iconTheme: {
              primary: "#ED4337",
              secondary: "#FFFFFF",
            },
          });
        };
        displayErrorToast();
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
      <div className="bg-[#F3F3F3] items-center">
        <div className=" container mx-auto  md: xl: 2xl:px-32 lg:px-3 px-6 pb-20 pt-10">
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
      </div>
    </>
  );
}

export default App;
