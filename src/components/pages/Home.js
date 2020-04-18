import React from 'react';
import Form from "../Form";
import ErrorMsg from "../ErrorMsg";
import Results from "../Results";

function Home(params) {
    return (
        <>
            <Form newCity={params.newCity} />
            { params.appState.errorMsg ? <ErrorMsg errorMsg={params.appState.errorMsg}/> : (
                params.appState.load ? <Results forecast={params.forecast}
                                         limit={params.limit}
                                         changeLimit={params.changeLimit}/> :
                    <div className="text-center">Loading...</div>)
            }
        </>
    );
}

export default Home;