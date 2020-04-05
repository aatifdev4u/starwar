import React from 'react'
import { Input } from 'antd';
const { Search } = Input;


function SearchBar({ handleSearch, handleChange, blockstatus}) {
    return (
        <div className="searchbox">
            <Search
                placeholder="Search planet..."
                size="large"
                enterButton
                allowClear
                disabled={blockstatus}
                onSearch={handleSearch}
                onChange={handleChange}
            />
        </div>
    )
}

export default SearchBar
