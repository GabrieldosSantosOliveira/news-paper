export const env = {
  // @ts-expect-error: does not have correct typing for process.env
  BASE_URL: (process.env.BASE_URL as string) || 'http://localhost:3000',
  ANDROID_GOOGLE_CLIENT_ID:
    // @ts-expect-error: does not have correct typing for process.env
    (process.env.ANDROID_GOOGLE_CLIENT_ID as string) || '',
  // @ts-expect-error: does not have correct typing for process.env
  IOS_GOOGLE_CLIENT_ID: (process.env.IOS_GOOGLE_CLIENT_ID as string) || '',
  SCHEME: 'news-paper',
  // @ts-expect-error: does not have correct typing for process.env
  ANDROID_GOOGLE_CLIENT_ID: process.env.ANDROID_GOOGLE_CLIENT_ID as string,
};
