import { useState } from "react";
import Layout from "./components/Layout/Layout";
import "./App.css";
import About from "./pages/About/About";

function App() {
  return (
    <>
      <Layout />
      <div className="container">
      <About/>
      </div>
     
    </>
  );
}

export default App;
