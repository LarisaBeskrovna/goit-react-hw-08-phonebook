import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredcontacts, selectFilter } from '..//../redux/selector';
import { deleteContacts } from '..//../redux/operations';
import css from './contacts.module.css';
import Notification from '../Notification/Notification';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredcontacts);
  const filter = useSelector(selectFilter);
  const handleDelete = e => {
    dispatch(deleteContacts(e.target.value));
  };

  if (contacts.length > 0) {
    return (
      <div className={css.main}>
        <ul className={css.list}>
          {contacts
            .filter(i => i.name.includes(filter))
            .map(item => {
              const { name, id, number } = item;
              return (
                <li className={css.list_item} key={id}>
                  {name}: {number}
                  <button
                    type="button"
                    className={css.delete_btn}
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    );
  } else {
    return <Notification />;
  }
};

export default Contacts;
