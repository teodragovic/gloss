import faunadb from 'faunadb';

const client = new faunadb.Client({
    secret: process.env.FAUNA_SERVER_KEY
});

const q = faunadb.query;

export { client, q };
