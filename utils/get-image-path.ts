export const getImagePath = (imageName: string) => {
  const isProd = process.env.NODE_ENV === 'production';
  const repoName = 'kvk_landing';

  return isProd ? `/${repoName}/${imageName}` : `/${imageName}`;
};
