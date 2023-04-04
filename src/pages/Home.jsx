import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="landing-navigation">
      <h1>Homepage</h1>
      <ul>
        <li>
          <Link to="/">Connect the Dots</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
