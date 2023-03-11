import { lazy } from 'react';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import { ContactFlexCss } from 'components/App/App.styled';
import { useSelector } from 'react-redux';
import { selectAllContacts } from 'redux/tasks/cont-selectors';

const ContactsList = lazy(() => import('components/ContactList'));

const ContactsView = () => {
  return (
    <ContactFlexCss>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </ContactFlexCss>
  );
};

export default ContactsView;
