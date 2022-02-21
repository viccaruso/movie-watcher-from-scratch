const fetch = require('node-fetch');
require('dotenv').config();

    //eslint-disable-next-line
exports.handler = async (event) => {
  const id = event.queryStringParameters.id;
  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_KEY}&language=en-US`;

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
