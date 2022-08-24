import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import JoinNow from "./pages/JoinNow";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/account/create" element={<JoinNow />} />
    </Routes>
    </BrowserRouter>
      
      
   
      
      
    </>
  );
}

export default App;
