const fields = {
  name: {
    label: 'Name',
    name: 'name',
    variant: 'filled',
    type: 'text',
    placeholder: 'Enter name...',
    required: true,
  },
  email: {
    label: 'Email',
    name: 'email',
    variant: 'filled',
    type: 'email',
    placeholder: 'Enter email...',
    required: true,
  },
  password: {
    label: 'Password',
    name: 'password',
    variant: 'filled',
    type: 'password',
    placeholder: 'Enter password...',
    required: true,
  },
  contact: {
    label: 'Contact',
    name: 'name',
    variant: 'filled',
    type: 'text',
    placeholder: 'Enter the contact...',
    required: true,
    pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    title: "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  },
  number: {
    label: 'Number',
    name: 'number',
    variant: 'filled',
    type: 'tel',
    placeholder: 'Enter the number...',
    required: true,
    title: "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  },
};

export default fields;