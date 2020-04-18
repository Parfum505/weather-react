import React from 'react';

function City(props) {
    return (
         ( props.city) ? (
            <div className="row justify-content-center flex-column">
                <div className="col city mb-3 text-center">{props.city}, {props.country}</div>
            </div>
        ) : (<></>)
    );
}

export default City;