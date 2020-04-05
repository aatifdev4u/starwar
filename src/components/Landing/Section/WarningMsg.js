import React from 'react'

function WarningMsg({blockstatus}) {
    if(!blockstatus){
        return null;
    }
    return (
        <div className="warning-msg" data-test="warning-msg">
            <span>You are not allowed to make more than 15 search in a minute.Please wait..</span>
        </div>
    )
}

export default WarningMsg
