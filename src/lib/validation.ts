export const validGithubUser = (user: string): boolean => {
  const re = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
  return re.test(user);
};

export const validGithubRepo = (repo: string): boolean => {
  const re = /\s/;
  return !re.test(repo);
};
