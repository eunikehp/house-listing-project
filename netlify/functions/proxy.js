const fetch = require('node-fetch');

exports.handler = async function (event, context) {
    const targetUrl = 'https://api.intern.d-tt.nl/api/houses'; // Replace with your target URL

    try {
        const response = await fetch(targetUrl);
        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data),
            headers: {
                'Access-Control-Allow-Origin': '*', // Allow CORS for all origins
            },
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to fetch data' }),
        };
    }
};