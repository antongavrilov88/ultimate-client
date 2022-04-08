const jestConfig = {
  preset: 'ts-jest/presets/default-esm', // or other ESM presets
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/.jest/fileMock.js',
    '\\.jpg?as=webp$': '<rootDir>/.jest/fileMock.js',
    '\\.svg$': '<rootDir>/.jest/svgrMock.js',
    '\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/.jest/setupTests.js', '@testing-library/jest-dom/extend-expect'],
};

module.exports = jestConfig;
