import React from 'react';
import './search.css';

export const Search = (props) => (
    <input
        className='search'
        type='search'
        placeholder={props.placeholder} //reusable
        onChange={props.handleChange}  //handlechange is defined in props
   / >

)

