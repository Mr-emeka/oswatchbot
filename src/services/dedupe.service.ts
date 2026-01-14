const cache = new Set();

async function exists(id: any) {
  return cache.has(id);
}

async function store(id: any) {
  cache.add(id);
}

export default { exists, store };
