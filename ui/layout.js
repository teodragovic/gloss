
import { Fragment } from 'preact';
import Link from 'next/link';

import { logout } from '../utils/auth';

const Layout = (props) => (
    <Fragment>
        <header className="container mb-4">
            <nav className="w-full">
                <ul className="flex justify-between">
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/login">
                            <a>Login</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/signup">
                            <a>Signup</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/profile">
                            <a>Profile</a>
                        </Link>
                    </li>
                    <li>
                        <button onClick={ logout }>Logout</button>
                    </li>
                </ul>
            </nav>
        </header>
        <main className="container">
            { props.children }
        </main>
    </Fragment>
);

export default Layout;
