import React from 'react';

function LimitDays(props) {
    const limits = {
        name: 'limit',
        val: [3, 5, 7]
    }
    function handleChange(e) {
        e.target.parentNode.classList.toggle('active');
        props.changeLimits(e.target.value);
    }
    const radioBtns = limits.val.map((item, i) => {
        return (
            <label key={i} className={`custom-control-label custom-control-inline ${props.limits === item ? 'active' : ''}`}>
                <input type="radio"
                       className="custom-control-input"
                       checked={props.limits === item}
                       id={`${limits.name}${item}`}
                       name={limits.name}
                       value={item}
                onChange={handleChange}/>
                <span className="">{item}</span>
            </label>
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