

import React from 'react';
import { connect } from 'react-redux';

const StatusMessage = ({message}) => (
    <div
        style={{
        backgroundColor: '#fff',
        padding: "1em 2em",
        margin: "10px",
        border: "1px solid rgb(34, 34, 34)"
        }}
    >{message}
    </div>
);

const Status = ({status}) => (
    <div
        style={{
            position: "fixed",
            top: 0,
            left: 0
        }}
    >
        {Object.keys(status.messages).map(type => <StatusMessage key={type} message={status.messages[type]}></StatusMessage>)}
    </div>
)

export const mapStateToProps = ({status})=>({status});

export default connect(mapStateToProps)(Status);
