import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Home</title>
    </Helmet>
    <div>HOME 2</div>
    <Link to="/users">User</Link>
    <button onClick={() => alert("test 2")}>test</button>
  </div>
);

export default Home;
