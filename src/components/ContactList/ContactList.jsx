import ContactItem from './ContactItem';
import { ContactUlCss, ContactItemCss } from './ContactList.styled';
import Spinner from 'components/Spinner';
import { useGetAllContactsQuery } from 'redux/tasks/cont-slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/tasks/cont-selectors';
import { fetchAllContacts } from 'redux/tasks/taskoperations';
import { useEffect } from 'react';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  // const {data} = useGetAllContactsQuery()
  console.log(contacts);

    useEffect(() => {
        dispatch(fetchAllContacts())
    }, [dispatch])
    //dispatch(fetchAddContact)
    //dispatch(fetchDeleteContact(id))

    return (
      <>
        <Spinner />
          <ContactUlCss>
          {contacts.map(({ id, name, phone }) => (
            <ContactItemCss key={id}>
              <ContactItem id={id} name={name} number={phone} />
            </ContactItemCss>
          ))}
        </ContactUlCss>
        <Spinner />
      </>
    );
}


export default ContactList;