import React from 'react';
import Form from "../Form";
import ErrorMsg from "../ErrorMsg";
import Results from "../Results";

function Home(props) {
    return (
        <>
            <Form newCity={props.newCity} />
            { props.appState.errorMsg ? <ErrorMsg errorMsg={props.appState.errorMsg}/> : (
                props.appState.load ? <Results forecast={props.forecast}
                                         limit={props.limit}
                                         changeLimit={props.changeLimit}/> :
                    <div className="text-center">Loading...</div>)
            }
        </>
    );
}

export default Home;