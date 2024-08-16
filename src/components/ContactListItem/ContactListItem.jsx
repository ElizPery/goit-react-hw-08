import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from '../../redux/contacts/operations';
import css from './ContactListItem.module.css';
import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.listItemOfContacts}>
      <div>
        <p>
          <FaUser className={css.iconOfInfo} />
          {name}
        </p>
        <p>
          <FaPhone className={css.iconOfInfo} />
          {number}
        </p>
      </div>
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
