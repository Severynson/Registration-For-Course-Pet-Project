import React from "react";
import Header from "./Components/Header/Header";
import CourseDescripton from "./Components/Articles/CourseDescripton";
import CourseGallery from "./Components/CourseGallery/CourseGallery";

function App() {
  return (
    <React.Fragment>
      <Header />
      <CourseGallery />
      <CourseDescripton />
    </React.Fragment>
  );
}

export default App;
