import React from "react";

function DateTitle(props) {
    return <div className="date text-center">{props.children ? `${props.children} `: ``}{props.date}</div>
}
export default DateTitle;