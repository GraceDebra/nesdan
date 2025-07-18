const config = {
  API_BASE_URL: window.location.hostname === 'localhost' 
    ? 'http://localhost:5000'
    : 'https://nesdan-backend.onrender.com'
};

export default config;