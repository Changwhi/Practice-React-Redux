import classes from './Auth.module.css';
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../store/index'
import { useRef } from 'react';

const Auth = () => {
  const dispatch = useDispatch();
  const email = useRef("");
  const password = useRef("");

  const logInHandler = (event) => {
      event.preventDefault();
        dispatch(authActions.logIn())
            console.log("get in here")
            console.log(email.current)
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={logInHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' ref={email} id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input ref={password} type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
