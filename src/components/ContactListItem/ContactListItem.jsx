import React from 'react';
import PropTypes from 'prop-types';
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

ContactListItem.PropTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
 number: PropTypes.string.isRequired, 
  
}