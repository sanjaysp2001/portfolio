import React, { useEffect } from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
// import { Projects } from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { Certifications } from "./components/Certifications/Certifications";

import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { firebaseConfig } from "./firebase.config";
const firebaseApp = initializeApp(firebaseConfig);

export const analytics = getAnalytics(firebaseApp);

function App() {
  useEffect(() => {
    logEvent(analytics, "application_loaded");
  });
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      {/* <Projects /> */}
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
