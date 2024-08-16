import { useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import DocumentTitle from '../../components/DocumentTitle';
import LoginForm from '../../components/LoginForm/LoginForm';
import Loader from '../../components/Loader/Loader';
import { selectError, selectIsLoading } from '../../redux/auth/selectors';

export default function LoginPage() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <div>
      <DocumentTitle>Log in</DocumentTitle>
      {isLoading && !error && <Loader />}
      {error && Notify.failure(`Something went wrong, please try again!`)}
      {!isLoading && <LoginForm />}
    </div>
  );
}
