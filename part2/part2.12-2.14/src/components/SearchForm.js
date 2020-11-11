import React from "react"

const SearchForm = (props) => {

    return (
      
             <input 
                    value={props.value}
                    onChange={props.onChange}   
                    />
          
       
    )
}

export default SearchForm

