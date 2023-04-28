import PropTypes from 'prop-types';

import { List, Item, Button } from './ContactList.Styled'; 
import { ListItem } from '../ContactListItem/ContactListItem.Styled';
import {  deleteContact } from 'redux/action';
import { useDispatch, useSelector } from "react-redux";

import { selectVisibleContacts } from 'redux/selector';
export const ContactList = () => {
    const contacts = useSelector(selectVisibleContacts);
    const dispatch = useDispatch();
    const onDel = id => {
        dispatch(deleteContact(id))};
  /*  const [newContact, setNewContact] = useState('');
     const onAddNewContact = ({ name, number }) => {
        const contactNew = { id: nanoid(), name, number : newContact }
    
    dispatch(addContacts(contactNew))*/
 
    return (
        <List>   
        {contacts.map(({ id, name, number }) => (
            <ListItem key={id}>
                <Item>{name}: {number}</Item>
               <Button type="button" onClick={() => onDel(id)}>Delete</Button>
            </ListItem>
        ))}
    </List>
);
        };      
ContactList.prototype = {
    contacts: PropTypes.arrayOf(
   PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
       number: PropTypes.string.isRequired, 
    })
    ), 
};




