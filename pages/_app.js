
import 'tailwindcss/tailwind.css';
import '../styles/main.scss';

import { Fragment } from 'preact';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';

function MyApp({ Component, pageProps }) {
    return (
        <Fragment>
            <CssBaseline />
            <Head>
                <title>Gloss</title>
            </Head>
            <Component { ...pageProps } />
        </Fragment>
    );
}

export default MyApp;
