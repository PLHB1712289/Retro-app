const dev = {
  API_URL: "http://localhost:3000",
  APP_NAME: "RETRO APP",
  APP_URL: "localhost",
};

const prod = {
  API_URL: process.env.REACT_APP_API_URL,
  APP_NAME: process.env.REACT_APP_APP_NAME,
  APP_URL: process.env.REACT_APP_APP_URL,
};

const config = process.env.REACT_APP_STAGE === "production" ? prod : dev;

export default config;
