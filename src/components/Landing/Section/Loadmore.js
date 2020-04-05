import React from 'react'
import { Button } from 'antd';
function Loadmore({ nextPage, handleLoadmore}) {
    if(!nextPage){
        return null;
    }
    return (
        <div className="load-more" data-test="load-more">
            <Button type="primary" onClick={handleLoadmore}>Load More</Button>
        </div>
    )
}

export default Loadmore
