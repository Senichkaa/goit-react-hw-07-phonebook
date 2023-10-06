import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteButton } from '../App.styled';
// import { deleteContact, getContacts } from 'redux/contactsSlice';
// import { getFilter } from 'redux/filterSlice';

import { fetchContacts, deleteContact } from 'redux/operations';
import {
  // selectAllContacts,
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from 'redux/selectors';

export const ContactList = () => {
  // const contacts = useSelector(getContacts);
  // const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);

  // console.log(contacts);
  // console.log(filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {!isLoading &&
          filteredContacts.map(({ id, name, number }) => (
            <li key={id}>
              {name}: {number}
              <DeleteButton onClick={() => dispatch(deleteContact(id))}>
                Delete
              </DeleteButton>
            </li>
          ))}
      </ul>
      {isLoading && !error && (
        <p>Please wait. Your wish will be executed soon!</p>
      )}
    </div>
  );
};
