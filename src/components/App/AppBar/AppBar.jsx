import ContactForm from "components/ContactForm";
import ContactList from "components/ContactList";
import Filter from "components/Filter";
import { ContactFlexCss } from "../App.styled";

const AppBar = () => {

    return (
      <ContactFlexCss>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </ContactFlexCss>
    );
}

export default AppBar;