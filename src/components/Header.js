import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { authActions } from '../store';

const Header = () => {
    const dispatch = useDispatch();

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const logOutHanlder = () => {
        dispatch(authActions.logOut());
    }

    return (
        <header className={classes.header}>
            <h1>Redux Auth</h1>
            {isLoggedIn &&
                <nav>
                    <ul>
                        <li>
                            <a href='/'>My Products</a>
                        </li>
                        <li>
                            <a href='/'>My Sales</a>
                        </li>
                        <li>
                            <button onClick={logOutHanlder}>Logout</button>
                        </li>
                    </ul>
                </nav>
            }
        </header>
    );
};

export default Header;
