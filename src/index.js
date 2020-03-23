import React from "react";
import { render } from "react-dom";
import Component from "./component";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Component startDateName="start1" endDateName="end1"
               //dateFormat="YYYY-MM-DD"
        startDate={'2020-3-20'}
        endDate={'2020-3-25'}
               onChange={console.log}
               label="Select a time range， Last" />
  </div>
);

render(<App />, document.querySelector(".root"));
