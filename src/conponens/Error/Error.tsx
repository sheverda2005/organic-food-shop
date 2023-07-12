import React, {FC} from 'react';
import "./error.css"

interface IError {
    message: string,
    active: boolean
}

const Error: FC<IError> = ({message, active}) => {
    return (
        <div className={`error ${active}`} >
           <h2>{message}</h2>
        </div>
    );
};

export default Error;