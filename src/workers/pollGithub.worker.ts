import axios from 'axios'
const matcher = require('../services/matcher.service');

async function pollKeyword(keyword:string) {
  const q = `${keyword} in:title,body,readme`;

  const { data } = await axios.get(
    'https://api.github.com/search/issues',
    {
      params: { q, sort: 'updated' },
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_APP_TOKEN}`
      }
    }
  );

  for (const item of data.items) {
    await matcher.match(item);
  }
}

module.exports = { pollKeyword };