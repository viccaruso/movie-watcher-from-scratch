const fetch = require('node-fetch');
require('dotenv').config();

    //eslint-disable-next-line
exports.handler = async (event) => {
  const query = event.queryStringParameters.query;
  const page = event.queryStringParameters.page;
  const URL = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${process.env.TMDB_KEY}&language=en-US&page=${page}&include_adult=false`;

  try {
    const response = await fetch(URL);
    const data = await response.json();
    const json = JSON.stringify({ data });
    
    return { 
      statusCode: 200, 
      body: json
    };
  } catch (error) {
    //eslint-disable-next-line
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
