
import { useDispatch, useSelector } from 'react-redux';
import { Title, Container , Button, Form, Label } from "./ContactForm.styled";

import { selectContacts } from "redux/selector";
import { addContact } from "redux/action";
export const ContactForm = () => {
    const dispatch = useDispatch();
    const items = useSelector(selectContacts);
    

    const addNewContact = (event) => {
     event.preventDefault();
     const { name, number } = event.target;
        const checkContact = items.find(item => item.name.toLowerCase() === name.value.toLowerCase());
   
        if (checkContact) {
         return alert(`${name.value} is already in contacts.`);
        }
        dispatch(
            addContact({
                name:  name.value, 
                number: number.value
            })
        );
        event.target.reset();
    };


    
    return (
        <Title>
            Phonebook
            <Container>
                <Form onSubmit={addNewContact}>
                    <Label>Name</Label>
                <input
  type="text"
  name="name"
 

  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  
/> 
<Label>Phone</Label>
<input
  type="tel"
  name="number"


  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
<Button type="submit">Add contact</Button>
                </Form>
           </Container> 
        </Title>
    );
}
