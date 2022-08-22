import React from "react";
import Footer from "./components/Footer";
import Home from "./pages/Home";


function App() {
  return (
    <div className="">
      <Home />
      <div className="flex flex-col justify-center my-[20px] items-center">
    <span className='text-xs text-center max-w-[40rem] font-bold justify-center'>*Starbucks Rewards is available at participating stores. Some restrictions apply. For full program details, visit starbucks.com/rewards </span>
    </div>
    <Footer />
      
      
    </div>
  );
}

export default App;
