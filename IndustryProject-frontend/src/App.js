import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Map from "./Components/Map/Map";
import Search from "./Components/Search/Search";
import "./App.scss";

function App() {
  return (
    <div className="wrraper">
      <h1 className="wrraper__title">The Dynamic Safety Zone Map</h1>
      <div className="wrraper__map">
        <Map />
      </div>
      <div className="wrraper__description">
        <div className="description--title">
          <h4>Safety Zone Map</h4>
          <p>
            The Dynamic Safety Zone Map is designed to enhance the safety and
            trust of in-person transactions by highlighting safe, public places
            for exchanges. Aimed at users of online marketplaces like Kijiji,
            this tool addresses the common concern of safety during face-to-face
            meetings with strangers.
          </p>
        </div>
        <Search />
      </div>
    </div>

  );
}
export default App;
