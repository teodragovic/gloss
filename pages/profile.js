
import { useEffect } from 'preact/hooks';
import { useRouter } from 'next/router';
import useSWR from 'swr';

import { withAuthSync } from '../utils/auth';
import Layout from '../ui/layout';

const fetcher = (url) =>
    fetch(url).then((res) => {
        if (res.status >= 300) {
            throw new Error('API Client error');
        }

        return res.json();
    });

const Profile = () => {
    const router = useRouter();
    const { data: user, error } = useSWR('/api/profile', fetcher);

    useEffect(() => {
        // if (error) {router.push('/');}
    }, [error, router]);

    return (
        <Layout>
            { error ? (
                <h1>An error has occurred: { error.message }</h1>
            ) : user ? (
                <h1>Your user id is { user.userId }</h1>
            ) : (
                <h1>Loading...</h1>
            ) }
        </Layout>
    );
};

export default withAuthSync(Profile);
