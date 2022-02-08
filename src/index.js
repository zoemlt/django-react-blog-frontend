import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
      <Footer />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
