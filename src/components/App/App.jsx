import ContactForm from "components/ContactForm";
import ContactList from "components/ContactList";
import Filter from "components/Filter";
import { Route, Routes } from "react-router-dom";
import ContactsView from "views/ContactsView";
import HomeView from "views/HomeView";
import LoginView from "views/LoginView";
import RegisterView from "views/RegisterView";
import { ContactFlexCss } from "./App.styled";
import AppBar from "./AppBar";



const App = () => {

  return (<>
    <AppBar />
    <Routes>
      <Route path="/" element={HomeView} />
      <Route path="/login" element={LoginView} />
      <Route path="/registration" element={RegisterView}/>
      <Route path="/contacts" element={ContactsView}/>
    </Routes>
    </>
  );
};

export default App;


// const LS_KEY = "contacts";
  

  // const useLocalStorage = (key, value) => {
  //   const [state, setState] = useState(value);

  //   useEffect(() => {
  //     localStorage.setItem(key, JSON.stringify(value));
  //   }, [key, value])
  //   return [state, setState];
  // }

  // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  // { id: "id-4", name: "Annie Copeland", number: "227-91-26" },

  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(localStorage.getItem(LS_KEY)) || []
  // });

  // const [filter, setFilter] = useState("");

  // const addContact = (name, number) => {
  //   const contact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };
  //   setContacts([contact, ...contacts]);
  // };

  // const deletePayContact = (contactId) => setContacts(contacts.filter((contact) => contact.id !== contactId));

// class App extends Component {
//   state = {
//     contacts: [
//       { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//       { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//       { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//       { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//     ],
//     filter: "",
//   };


//   componentDidMount() { 
//     const savedContacts = localStorage.getItem("contacts");
//     const parsedContacts = JSON.parse(savedContacts);
//     if (savedContacts) {
//       this.setState({contacts: parsedContacts})
//     }
//   }
//   componentDidUpdate(prevProps, prevState) { 
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
//     }
//   } 

//   addContact = (name, number) => {
//     const contact = {
//       id: nanoid(),
//       name,
//       number,
//     };
//     return this.setState(({contacts}) => ({contacts: [contact, ...contacts]}))


//   };
//   deleteContact = (contactId) =>
//     this.setState(({ contacts }) => ({
//       contacts: contacts.filter((contact) => contact.id !== contactId),
//     }));
  
//   handleFilterChange = (e) => {
      
//     return this.setState(({ filter: e.currentTarget.value }))
//   }
  
//   getVisibleContacts = e => {
//     const { contacts } = this.state;

//     const normalizedFilter = this.state.filter.toLowerCase();

//     return contacts.filter(
//       (contact) => contact.name.toLowerCase() !== normalizedFilter ? contact.name.toLowerCase().includes(normalizedFilter) ||
//         contact.number.toLowerCase().includes(normalizedFilter) : console.log("NO")
//     );
//   }
//   render() {
//     const contacts = this.getVisibleContacts();
//     return (
//       <ContactFlexCss>
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={this.addContact} contacts={this.state.contacts} />
//         <h2>Contacts</h2>
//         <Filter value={this.state.filter} onChange={this.handleFilterChange} />
//         <ContactList
//           contacts={contacts}
//           onDelete={this.deleteContact}
//         />
//       </ContactFlexCss>
//     );
//   }
// }


