import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import Loader from './components/Loader/Loader';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

import { selectError, selectIsLoading } from './redux/selectors';
import { fetchContacts } from './redux/operations';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <Loader />}
      {error && Notify.failure('Something went wrong, please try again')}
      {!isLoading && !error && <ContactList />}
    </div>
  );
}

export default App;