import React from "react"

const SearchForm = (props) => {
    return (
        <input
                onChange={props.onChange}   
                value={props.value}
        />
    )
}

export default SearchForm