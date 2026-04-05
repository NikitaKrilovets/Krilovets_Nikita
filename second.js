const urls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/users/1'
];

function fetchData(url) {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.3) {
      reject(`Помилка для ${url}`);
      return;
    }

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        return res.json();
      })
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
}

const delay = ms => new Promise(res => setTimeout(res, ms));

async function fetchAllData(urls) {
  let results = await Promise.allSettled(urls.map(fetchData));

  const failed = results
    .map((r, i) => (r.status === 'rejected' ? urls[i] : null))
    .filter(Boolean);

  if (failed.length) {
    await delay(1000);

    const retryResults = await Promise.allSettled(failed.map(fetchData));

    let j = 0;
    results = results.map(r => {
      if (r.status === 'rejected') {
        return retryResults[j++];
      }
      return r;
    });
  }

  return results;
}

fetchAllData(urls).then(results => {
  console.log(results);
});