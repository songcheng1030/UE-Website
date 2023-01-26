const config = {
  test: {
    API_URL: "http://localhost:3000",
    ENGINE_WS_URL: "ws://localhost:3001"
  },
  development: {
    API_URL: "http://34.229.14.1:3000",
    ENGINE_WS_URL: "ws://34.229.14.1:3001"
  },
  production: {
    API_URL: "https://mallet.gg/api",
    ENGINE_WS_URL: "ws://23.88.70.95:3001",
  }
}

// export default config[process.env.NODE_ENV]
export default config.development
