import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Form, Input, Button } from '../App.styled';

import { useDispatch, useSelector } from 'react-redux';
import { addContact, getContacts } from 'redux/contactsSlice';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const id = nanoid();

    if (
      contacts.find(newContact =>
        newContact.name.toLowerCase().includes(name.toLowerCase())
      )
    ) {
      setName('');
      setNumber('');
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(
      addContact({
        id,
        name: name,
        number: number,
      })
    );

    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="">
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
          placeholder="Write a name"
        />
      </label>

      <label htmlFor="">
        Phone Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
          placeholder="Write a number"
        />
      </label>

      <Button type="submit">Add Contact</Button>
    </Form>
  );
};
