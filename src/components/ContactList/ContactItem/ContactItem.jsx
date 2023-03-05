import toastr from 'toastr';
import { ButtonCss } from 'components/App/App.styled';

import PropTypes from 'prop-types';

import { ContactTextCss } from './ContactItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchdDeleteContact } from 'redux/tasks/taskoperations';
import { selectIsLoading } from 'redux/tasks/cont-selectors';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  // const isLoading = useSelector(selectIsLoading);

  const handleDeleteContact = (id) => {
    dispatch(fetchdDeleteContact(id));
    toastr.success("Deleted!")
  }

  return <>
    <ContactTextCss>{name}: {number}</ContactTextCss>
    <ButtonCss type='button' onClick={() => handleDeleteContact(id)} disabled={isLoading}>Delete</ButtonCss>
  </>
}


ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,

}

export default ContactItem;