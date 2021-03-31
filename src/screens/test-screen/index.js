import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const TestScreen = () => {
    return (
        <Fragment>
            <h3>TestScreen</h3>
            <Link to="/">There is no place like home!</Link>
        </Fragment>
    );
}

export default TestScreen;