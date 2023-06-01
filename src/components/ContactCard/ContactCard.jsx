import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { ContactItem, DeleteBtn } from './ContactCard.styled';

const ContactCard = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <ContactItem>
      {name}: {number}
      <DeleteBtn type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </DeleteBtn>
    </ContactItem>
  );
};

ContactCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactCard;
