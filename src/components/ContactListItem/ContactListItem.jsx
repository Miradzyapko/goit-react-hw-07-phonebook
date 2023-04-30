import React from 'react';
import propTypes from 'prop-types';
import { Button } from './ContactList.Styled';
import { ListItem } from './ContactListItem.Styled'
 export const ContactListItem = ({ name, number, id, onDel }) => {
  return (
    <ListItem>
      <li>
        {name}: {number}
      </li>
      <Button type="button" onClick={() => onDel(id)}>
        Delete
      </Button>
    </ListItem>
  )}

ContactListItem.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
 number: propTypes.string.isRequired, 
  
}