import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./App.module.css";
import { HomePage, Navbar } from "./exports";
import BlogsPage from "./pages/Blogs/BlogsPage";
import AboutPage from "./pages/about/About.jsx";
import BottomNavigationBar from "./components/BottomNavigationBar/BottomNavigationBar.jsx";
function App() {
  return (
    <>
      <div className={styles.app}>
        <BottomNavigationBar />
        <HomePage />
        <Navbar />
      </div>
    </>
  );
}

export default App;
