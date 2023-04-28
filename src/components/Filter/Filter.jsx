import React from "react";

import { Input, Label } from "./Filter.Styled";
import { useDispatch, useSelector } from "react-redux";
import { addFilter } from 'redux/slice';
import { selectFilter } from "redux/selector";
export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);
  
  
   
  
  return (
 
    <Label>Find contact by name<Input type = "text" value ={filterValue} onChange={(e) => dispatch(addFilter(e.target.value))}/>
</Label>

);

  }