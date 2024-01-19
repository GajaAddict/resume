import React, { useState } from "react";
import MotionHoc from "./MotionHoc";
import Resume from '../assets/pdf/Gajendran_resume.pdf'

const HomeComponent = React.memo(() => {
  return (
    <div>
      <iframe src={Resume} width="100%" height="500vh" />
    </div>
  )
}
)

const Home = MotionHoc(HomeComponent);

export default Home;
