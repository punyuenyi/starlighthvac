import Header from "./component/Header";
import Footer from "./component/Footer";
import { Outlet } from "react-router-dom";
import React from 'react';
// import { useState } from "react";

function App() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </> 

  );
}

export default App;

// const styles = {
//   icon: {
//     height: '100vh'
//   }
// }
