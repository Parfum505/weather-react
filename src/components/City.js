import React from 'react';

function City({city, country}) {
    return (
         ( city && city.length) ? (
            <div className="row justify-content-center flex-column">
                <div className="col city mb-3 text-center">{city}, {country}</div>
            </div>
        ) : (<></>)
    );
}

export default City;