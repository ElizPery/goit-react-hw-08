import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from '../../redux/operations';
import css from './ContactListItem.module.css';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.listItemOfContacts}>
      <p className={css.nameOfContact}>
        {name}: {number}
      </p>
      <button
        className={css.deleteBtn}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string,
};
