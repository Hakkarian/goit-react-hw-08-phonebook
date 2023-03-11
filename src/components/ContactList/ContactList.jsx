import { useEffect } from 'react';
import { lazy } from 'react';
import { ContactUlCss, ContactItemCss } from './ContactList.styled';
import Spinner from 'components/Spinner';
import { useGetAllContactsQuery } from 'redux/tasks/cont-slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllContacts, selectFilteredContacts } from 'redux/tasks/cont-selectors';
import { fetchAllContacts } from 'redux/tasks/taskoperations';

const ContactItem = lazy(() => import('./ContactItem'));

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  console.log(contacts)

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <>

      <ContactUlCss>
        {contacts.map(({ id, name, number }) => (
          <ContactItemCss key={id}>
            <ContactItem id={id} name={name} number={number} />
          </ContactItemCss>
        ))}
      </ContactUlCss>
    </>
  );
};

export default ContactList;
