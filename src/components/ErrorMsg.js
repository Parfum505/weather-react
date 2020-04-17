import React from 'react';

function ErrorMsg(props) {
        const errorMsg = props.errorMsg.trim();
        const errorText = `${errorMsg.charAt(0).toUpperCase()}${errorMsg.slice(1)}`;
        return (
            <div className="error text-center">{errorText}</div>
        );
}

export default ErrorMsg;