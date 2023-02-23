module.exports = {
  dir: './',
  transform: {
    "^.+\\.(js|jsx|tsx)$": "babel-jest",
    "^.+\\.(js|jsx|ts|tsx)$": "ts-jest"
  },
  transformIgnorePatterns: [
    'node_modules'
  ],
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsconfig: {
        jsx: 'react-jsx',
      }
    }
  }
}

