module.exports = {
  dir: './',
  transform: {
    "^.+\\.(js|jsx|tsx)$": "babel-jest",
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  transformIgnorePatterns: [
    'node_modules'
  ],
  testEnvironment: 'jsdom',
}

