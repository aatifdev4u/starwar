import React from 'react'

function NoResultsFound({resultsfound}) {
    if(resultsfound){
        return null;
    }
    return (
        <div className="warning-msg" data-test="no-results">
            <span>Sorry!! No results found</span>
        </div>
    )
}

export default NoResultsFound
