import React from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div className="home">
      <div className="home-titles">
        <h1>Welcome Game Addict</h1>
      </div>
      
    </div>
  );
}

export default withAuth(Home);
