import toastr from 'toastr';

import PropTypes from 'prop-types';

import { ContactTextCss, DeleteButtonCss } from './ContactItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchdDeleteContact } from 'redux/tasks/taskoperations';
import { selectIsLoading } from 'redux/tasks/cont-selectors';
import { toast } from 'react-hot-toast';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  // const isLoading = useSelector(selectIsLoading);

  const handleDeleteContact = (id) => {
    dispatch(fetchdDeleteContact(id));
    toast('A contact was deleted succefully!', {
      icon: '❌',
      style: {
        borderRadius: '10px',
        background: 'black',
        color: '#fff',
      },
    });
  }

  return <>
    <ContactTextCss>{name}: {number}</ContactTextCss>
    <DeleteButtonCss type='button' onClick={() => handleDeleteContact(id)} disabled={isLoading}>Delete</DeleteButtonCss>
  </>
}


ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,

}

export default ContactItem;