import { useState } from "react";
import "./App.css";
import Carts from "./components/Carts/Carts";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";

function App() {
  const [carts, setCarts] = useState([]);

  const handelAddToCart = (course) => {
    const newCarts = [...carts, course];
    setCarts(newCarts);
  };

  return (
    <>
      <div className="bg-[#F3F3F3] max-w-screen-2xl mx-auto pb-20 lg:px-8 md:px-8 xl:px-14 2xl:px-14 px-6">
        <Header></Header>

        <div className="lg:flex md:flex justify-between gap-4">
          <Courses handelAddToCart={handelAddToCart}></Courses>
          <Carts carts={carts}></Carts>
        </div>
      </div>
    </>
  );
}

export default App;
