
import { ContactForm } from './ContactForm/ContactForm';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Title } from './ContactForm/ContactForm.styled';
import { selectIsLoading, selectError } from 'redux/selector';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { useEffect } from 'react';
import { fetchContacts } from 'redux/action';

export function App()  {
  /*const contactsValue = useSelector((state) => state.contacts.contacts);*/
  const dispatch = useDispatch();
 const isLoading = useSelector(selectIsLoading)
const error = useSelector(selectError)
    
   useEffect(() => {
    dispatch(fetchContacts());
   }, [dispatch]);
      
   
    


     
 
  
    return (
      <Container>
        <ContactForm title="Phonebook" /* onSubmit={addContact}*//>
         {isLoading && !error  && <b></b>}
         <Title>Contacts</Title>
         <Filter
         /* onChange={changeFilter}
    value={filterValue}*/
 />
         <ContactList title="Contacts"
       />



</Container>
    )
  
    };
  