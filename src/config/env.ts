export const env = {
  // @ts-expect-error: does not have correct typing for process.env
  BASE_URL: process.env.BASE_URL || 'http://localhost:3000',
};
