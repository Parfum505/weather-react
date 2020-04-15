import React from 'react';

function LimitDays(props) {
    const limits = {
        name: 'limit',
        val: [3, 5, 7]
    }
    const radioBtns = limits.val.map((item, i) => {
        return (
            <div key={i} className="custom-control custom-radio custom-control-inline">
                <input type="radio"
                       className="custom-control-input"
                       checked={props.limits === item}
                       id={`${limits.name}${item}`}
                       name={limits.name}
                       value={item}
                onChange={(e) => props.changeLimits(e.target.value)}/>
                <label className="custom-control-label" htmlFor={`${limits.name}${item}`}>{item}</label>
            </div>
        );
    });
    return (
        <div className="col limit mb-4 text-center">
            <span className="mr-3">For:</span>
            {radioBtns}<span className="ml-1">days</span>
        </div>
    );
}

export default LimitDays;