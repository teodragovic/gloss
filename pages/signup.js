
import { useState } from 'preact/hooks';
import Router from 'next/router';

import Layout from '../ui/layout';

function Signup() {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        error: '',
    });

    async function handleSubmit(event) {
        event.preventDefault();
        setUserData({ ...userData, error: '' });

        const email = userData.email;
        const password = userData.password;

        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            if (response.status !== 200) {
                throw new Error(await response.text());
            }

            Router.push('/profile');
        } catch (error) {
            console.error(error);
            setUserData({ ...userData, error: error.message });
        }
    }

    return (
        <Layout>
            <div className="mt-8 max-w-md w-full">
                <h1 className="text-4xl font-bold mb-8">Register</h1>

                <form onSubmit={ handleSubmit } className="">

                    <label className="block mb-1" htmlFor="email">Email</label>
                    <input
                        className="block w-full mb-6"
                        type="text"
                        id="email"
                        name="email"
                        value={ userData.email }
                        onChange={ (event) =>
                            setUserData(
                                Object.assign({}, userData, { email: event.target.value })
                            )
                        }
                    />

                    <label className="block mb-1" htmlFor="password">Password</label>
                    <input
                        className="block w-full mb-6"
                        type="password"
                        id="password"
                        name="password"
                        value={ userData.password }
                        onChange={ (event) =>
                            setUserData(
                                Object.assign({}, userData, { password: event.target.value })
                            )
                        }
                    />

                    <button
                        className="bg-blue-500 font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600"
                        type="submit"
                    >
                        Sign up
                    </button>

                    { userData.error && <p className="error">Error: { userData.error }</p> }
                </form>
            </div>
        </Layout>
    );
}

export default Signup;
