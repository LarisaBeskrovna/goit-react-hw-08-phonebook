import AddContact from 'components/AddContact/AddContact';
import Contacts from '..//components/Contacts/Contacts';
import Filter from '..//components/Filter/Filter';
import Loader from 'components/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selector';
import css from '../components/Contacts/contacts.module.css';

function Phonebook() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="App">
      <AddContact />
      <h1 className={css.title}>Find contacts by name</h1>
      <Filter />
      {isLoading && !error && <Loader />}
      <h1 className="main_title">Contacts</h1>
      <Contacts />
    </div>
  );
}

export default Phonebook;
