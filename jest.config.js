module.exports = {
  preset: 'ts-jest', // if you use TypeScript, else remove this line
  testEnvironment: 'jsdom', // needed to simulate browser environment
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'], // your setup file
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
};
