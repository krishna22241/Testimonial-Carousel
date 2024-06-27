import React from "react";
import reviews from "./data";
import  Testimonials  from "./components/Testimonials";


function App() {
  return (
    <div className="flex flex-col items-center justify-center w-[100vw]  h-[100vh]  bg-gray-200">

      <div className="text-center">

        <h1 className="text-4xl font-bold relative top-[-100px]">Our Testimonials</h1>

        <div className="bg-violet-400 h-[4px] w-full absolute top-[15%] left-0 "></div>

        <Testimonials reviews={reviews}/>

      </div>
    </div>
  );
}

export default App;
