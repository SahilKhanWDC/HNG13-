const dotenv = require('dotenv')
dotenv.config()
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;
const EMAIL = process.env.USER_EMAIL || 'replace-me@example.com';
const NAME = process.env.USER_NAME || 'Replace Me';
const STACK = process.env.USER_STACK || 'Node.js/Express';

app.use((req, _res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
  next();
});

app.get('/me', async (req, res) => {
  const now = new Date().toISOString();
  let fact = 'Meow! Could not fetch a cat fact right now. Try again soon.';

  try {
    const { data } = await axios.get('https://catfact.ninja/fact', {
      timeout: 3000,
      headers: {
        Accept: 'application/json',
        'User-Agent': 'HNG-Stage0-ProfileEndpoint/1.0',
        'Cache-Control': 'no-cache',
      },
    });
    if (data && typeof data.fact === 'string' && data.fact.length > 0) {
      fact = data.fact;
    }
  } catch (err) {
    console.error('Cat Facts API error:', err.message);
  }

  res.set({
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store', // discourage client/proxy caching
  });

  return res.status(200).json({
    status: 'success',
    user: {
      email: EMAIL,
      name: NAME,
      stack: STACK,
    },
    timestamp: now, 
    fact,
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});