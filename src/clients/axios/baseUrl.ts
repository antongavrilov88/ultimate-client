const getBaseURL = (): string => {
  if (process.env.NODE_ENV === 'test') return 'mocked_path';
  const url = process.env.SERVER_API_URL;
  // const version = process.env.SERVER_API_VERSION;
  return url || `http://localhost:5000`;
};

const baseURL = getBaseURL();

export { baseURL };
