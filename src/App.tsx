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


function App() {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  useEffect(()=>{
    logEvent(analytics,"test_firebase_analytics")
  },[analytics])
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
