import toastr from 'toastr';
import { useState } from 'react';
import {
  ContactFormCss,
  ContactLabelCss,
  CreateButtonCss,
} from './ContactForm.styled';
import {
  ButtonCss,
  CenterCss,
  CenterHorizontalCss,
  TitleCss,
} from 'components/App/App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllContacts } from 'redux/tasks/cont-selectors';
import { fetchAddContacts } from 'redux/tasks/taskoperations';
import { TextField } from '@mui/material';
import { InputCss } from 'shared/components/Password/Password.styled';
import fields from 'shared/utils/fields';

const ContactForm = () => {
  const contacts = useSelector(selectAllContacts);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    name: '',
    number: '',
  });
  const { name, number } = state;
  const payload = {
    name: name,
    number: number,
  };

  // const contacts = useSelector(selectAllContacts);

  const handleInputChange = e =>
    setState({ ...state, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();

    for (let contact of contacts) {
      console.log(contact);
      if (contact.name.toLowerCase() === name.toLowerCase()) {
        alert(`${contact.name} is already in contacts`);
        return;
      }
      if (contact.number.toLowerCase() === number.toLowerCase()) {
        alert(`${contact.number} is already in contacts`);
        return;
      }
    }
    console.log(payload);
    dispatch(fetchAddContacts(payload));
    toastr.success('Created!');
    reset();
  };
  const reset = () => {
    return setState({ name: '', number: '' });
  };

  return (
    <CenterHorizontalCss>
      <ContactFormCss onSubmit={handleSubmit}>
        <TitleCss>Enter your contact</TitleCss>
        <InputCss
          {...fields.contact}
          onChange={handleInputChange}
          value={name}
        />
        <InputCss
          {...fields.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          onChange={handleInputChange}
          value={number}
        />
        <CreateButtonCss type="submit">Add to contact</CreateButtonCss>
      </ContactFormCss>
    </CenterHorizontalCss>
  );
};

export default ContactForm;

// class ContactForm extends Component {
//     state = {
//         name: '',
//         number: ''
//     }
//     handleInputChange = e => this.setState(({ [e.currentTarget.name]: e.currentTarget.value }));
//     handleSubmit = e => {
//       const { name, number } = this.state;
//       e.preventDefault();

//       for (let contact of this.props.contacts) {
//       if (contact.name.toLowerCase() === this.state.name.toLowerCase()) {
//         alert(`${contact.name} is already in contacts`);
//         return;
//         }
//         if (contact.number.toLowerCase() === this.state.number.toLowerCase()) {
//           alert(`${contact.number} is already in contacts`);
//           return;
//         }
//     }
//       this.reset();
//       return this.props.onSubmit(name, number);
//   }
//   reset() {
//     return this.setState({name: '', number: ''})
//   }
//     render() {
//         return (
//           <ContactFormCss onSubmit={this.handleSubmit}>
//             <ContactLabelCss>
//               {" "}
//               Name:{" "}
//               <input
//                 type="text"
//                 name="name"
//                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                 onChange={this.handleInputChange}
//                 value={this.state.name}
//                 required
//               />
//             </ContactLabelCss>
//             <ContactLabelCss>
//               {" "}
//               Phone:{" "}
//               <input
//                 type="tel"
//                 name="number"
//                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                 onChange={this.handleInputChange}
//                 value={this.state.number}
//                 required
//               />
//             </ContactLabelCss>
//             <ButtonCss type="submit">Add to contact</ButtonCss>
//           </ContactFormCss>
//         );
//     }
// }
