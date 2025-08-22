import cardData from '../data/pokemon_cards.json';

// Route handlers
const handleRoot = () => {
  return new Response('Pokemon TCG Pocket API Server', {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
};

const handleSearch = async () => {
  try {
    return new Response(JSON.stringify(cardData), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Failed to load pokemon cards data' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
};

const handleNotFound = () => {
  return new Response('Not Found', {
    status: 404,
    headers: {
      'Content-Type': 'text/plain',
    },
  });
};

// API configuration
const API_PREFIX = '/api';

// Simple router
const router = {
  'GET /': handleRoot,
  [`GET ${API_PREFIX}/search`]: handleSearch,
};

export { router, handleNotFound };
