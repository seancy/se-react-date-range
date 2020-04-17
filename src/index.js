import React from "react";
import {render} from "react-dom";
import Component from "./component";
import './index.scss'

const App = () => (
    <Component className='single-line' startDateName="start1" endDateName="end1"
        //dateFormat="YYYY-MM-DD"
        /*startDate='2020-3-20'
        endDate='2020-3-25'*/
               onChange={console.log}
               //Select a time range， last
               label="Last "/>
);

render(<App/>, document.querySelector(".root"));
