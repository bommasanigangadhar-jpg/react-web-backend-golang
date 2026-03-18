import React, { Fragment, useState } from "react";
import './HelloWorld.css';

function HelloWorld(props) {
    const [isTrue, setIsTrue] = useState(false);

    const toggleTrue = () => {
        if(isTrue) {
            setIsTrue(false);
            return;
        }
        setIsTrue(true);
    }

    return (
        <Fragment>
            <hr></hr>
            <h1 className="h1-green">{props.message}</h1>
            <hr />
            {isTrue &&
                <Fragment>
                    <p>The current value of IsTrue is true</p>
                    <hr />
                </Fragment>
            }
            <hr />
            { isTrue ? <p>Is True</p> : <p>Is False</p> }
            <hr />
            <a href="#!" className="btn btn-outline-secondary" onClick={toggleTrue}>Toggle isTrue</a>
        </Fragment>
    );
}

export default HelloWorld;