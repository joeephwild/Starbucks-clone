import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FindStore from "./pages/FindStore";
import Home from "./pages/Home";
import Create from "./pages/Create";
import SignIn from "./pages/SignIn";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/account/create" element={<Create />} />
      <Route path="/account/signin" element={<SignIn/>} />
      <Route path="/findstore" element={<FindStore/>} />
    </Routes>
    </BrowserRouter>
      
      
   
      
      
    </>
  );
}

export default App;
