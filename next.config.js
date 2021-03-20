const preact = require('preact');
const withPreact = require('next-plugin-preact');

module.exports = withPreact({
    experimental: {
        modern: true,
    },
    target: 'serverless',
});
