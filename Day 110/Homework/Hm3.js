const fetchWithRetry = async (url, retries = 3, delay = 1000) => {
    for (let attempt = 1; attempt <= retries; attempt++) {
    try {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data
    } catch (error) {
    console.warn(`Attempt ${attempt} failed: ${error.message}`);
    if (attempt === retries) {
        throw new Error(`All ${retries} attempts failed: ${error.message}`);
    }
    
    await new Promise(res => setTimeout(res, delay));
    }
}
};


(async () => {
try {
    const data = await fetchWithRetry('https://jsonplaceholder.typicode.com/posts/1');
    console.log('Fetched data:', data);
} catch (error) {
    console.error('Final error:', error.message);
}
})();
