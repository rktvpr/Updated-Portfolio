import React from "react";
import Display from "./components/Display";
import Header from "./components/header";
import Work from "./components/work";
import Footer from "./components/footer";
import './App.css';

function App() {
  return (
    <div className="Container">
      <Header />
      <Display />
      <Work />
      <Footer />
    </div>

  )
}

export default App;
