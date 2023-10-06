import { useDispatch, useSelector } from 'react-redux';
import { DeleteButton } from '../App.styled';
import { deleteContact, getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  // console.log(contacts);
  // console.log(filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <ul>
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
            <DeleteButton onClick={() => dispatch(deleteContact(id))}>
              Delete
            </DeleteButton>
          </li>
        ))}
      </ul>
    </div>
  );
};
