// import { useEffect } from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
// import { useDispatch, useSelector } from 'react-redux';

// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// import Loader from './components/Loader/Loader';
// import ContactForm from './components/ContactForm/ContactForm';
// import Filter from './components/Filter/Filter';
// import ContactList from './components/ContactList/ContactList';

// import { selectError, selectIsLoading } from './redux/selectors';
// import { fetchContacts } from './redux/operations';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));

function App() {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      {/* <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <Loader />}
      {error && Notify.failure('Something went wrong, please try again')}
      {!isLoading && !error && <ContactList />} */}
    </Layout>
  );
}

export default App;