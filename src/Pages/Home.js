import React, { useState } from "react";
import MotionHoc from "./MotionHoc";
import resumeFile from '../assets/pdf/Gajendran_resume.pdf'

const HomeComponent = React.memo(() => {
  return (
    <div style={{ width: '100%', height: "100vh" }}>
      <iframe src={resumeFile} width="100%" height="100%" />
    </div>
  )
}
)

// const Home = MotionHoc(HomeComponent);

export default HomeComponent;
