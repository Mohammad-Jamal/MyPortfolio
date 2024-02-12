import React from "react";
import GlobalStyle from "./globalstyles"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/Themes";
import { useLocation } from "react-router-dom";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; // Correct import statements
//components
import Main from "./components/Main"
import AboutPage from "./components/AboutPage"
import BlogPage from "./components/BlogPage"
import WorkPage from "./components/WorkPage"
import MySkillsPage from "./components/MySkillsPage"
import { AnimatePresence } from "framer-motion";



function App() {

  const location = useLocation();
  return <>
    <GlobalStyle  />
    <ThemeProvider theme={lightTheme}>
      {/*       For framer-motion animation on Page Change!  */}
      <AnimatePresence mode='wait'>
        <Routes key={location.pathname} location={location}>
        <Route path="/MyPortfolio" element={<Main />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/skills" element={<MySkillsPage />} />
        <Route path="*" element={<Main />} />
        </Routes>
        </AnimatePresence>


    </ThemeProvider>
    </>
    
}

export default App;

