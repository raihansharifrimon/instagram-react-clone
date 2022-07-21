import React from "react";
import { Feeds } from "./components";
import Stories from "./components/stories/Stories";
import "./Home.scss";

function Home() {
  return (
    <div className="main-content__inner">
      <Stories />
      <Feeds />
    </div>
  );
}

export default Home;
