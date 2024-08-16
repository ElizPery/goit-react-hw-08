import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectUser,
  selectError,
  selectIsLoading,
} from '../../redux/auth/selectors';
import Loader from '../../components/Loader/Loader';
import css from './UserMenu.module.css';
import { logOut } from '../../redux/auth/operations';

const UserMenu = () => {
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      {isLoading && !error && <Loader />}
      {error && Notify.failure(`Something went wrong, please try again!`)}
      {!isLoading && !error && (
        <>
          <p className={css.username}>Welcome, {user.name}</p>
          <button type="button" onClick={() => dispatch(logOut())}>
            Logout
          </button>
        </>
      )}
    </div>
  );
};

export default UserMenu;
