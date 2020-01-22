import React from "react";
import ReactDOM from "react-dom";

import DateRangePicker from "react-daterange-picker";
import "react-daterange-picker/dist/css/react-calendar.css";
import "./index.scss"
import originalMoment from "moment";
import {extendMoment} from "moment-range";
import Icon from './calendar-alt-regular.svg'

const moment = extendMoment(originalMoment);


class DateRange extends React.Component {
    constructor(props, context) {
        super(props, context);

        const today = moment();

        this.state = {
            isOpen: false,
            value: moment.range(today.clone().subtract(7, "days"), today.clone())
        };

        this.myRef = React.createRef();

        document.addEventListener("click", this.hidePanel.bind(this), true);
    }

    onSelect = (value, states) => {
        this.setState({value, states});
    };

    hidePanel = e => {
        if (!this.myRef.current){
            return;
        }
        const dateRangePicker = ReactDOM.findDOMNode(this.myRef.current);
        if (dateRangePicker && dateRangePicker.contains(e.target) && this.container !== e.target) {
            return;
        }
        this.setState({isOpen: false});
    };

    onToggle = () => {
        this.setState({isOpen: !this.state.isOpen});
    };

    setDateRange=(number)=>{
        const today = moment();
        this.setState({
            value: moment.range(today.clone().subtract(number, "days"), today.clone())
        })
    }

    renderLabels = () => {
        const days = [7,30,90]
        return (
            <div className="labels">
                <label>Last </label>
                {days.map(number=>{
                    return (<span key={number} onClick={this.setDateRange.bind(this, number)} className={"days-"+number}>{number} days</span>)
                })}
            </div>
        )
    }

    renderSelectionValue = () => {
        return (
            <div className="box-container" onClick={this.onToggle}>
                {/*<Icon/>*/}
                <input
                    className="start-date"
                    name={this.props.startDateName}
                    //onChange={this.updateStart.bind(this)}
                    value={this.state.value.start.format("YYYY-MM-DD")}
                />
                {" - "}
                <input
                    name={this.props.endDateName}
                    className="start-date"
                    value={this.state.value.end.format("YYYY-MM-DD")}
                />
            </div>
        );
    };

    render() {
        return (
            <div className={'date-range-selector ' + (this.props.className || '')}>
                {this.renderLabels()}
                {this.renderSelectionValue()}
                {this.state.isOpen && (
                    <DateRangePicker className="date-range-picker"
                                     ref={this.myRef}
                                     value={this.state.value}
                                     onSelect={this.onSelect}
                                     singleDateRange={true}
                    />
                )}
            </div>
        );
    }
}

/*let DateRange = function () {
    return (<div>Here is date range...</div>)
}*/

export default DateRange;

