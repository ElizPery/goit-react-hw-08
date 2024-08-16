import { useSelector } from "react-redux";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import DocumentTitle from "../../components/DocumentTitle";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import Loader from '../../components/Loader/Loader';
import { selectError, selectIsLoading } from "../../redux/auth/selectors";

export default function RegisterPage() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);


  return (
    <div>
      <DocumentTitle>Registration</DocumentTitle>
      {isLoading && !error && <Loader />}
      {error && Notify.failure(`Something went wrong, please try again!`)}
      {!isLoading && <RegisterForm />}
    </div>
  );
}
