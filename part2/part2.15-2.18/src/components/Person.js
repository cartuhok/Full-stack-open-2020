import React from 'react'

const Person = props => (
    <p> {props.name}: {props.number} <button value={props.value} name={props.name} onClick={props.handleDelete}>delete</button> </p>
)

export default Person