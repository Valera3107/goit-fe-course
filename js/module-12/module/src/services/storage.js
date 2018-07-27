export const set = value => {
  localStorage.setItem('url-list', JSON.stringify(value));
};

export const get = () => {
  const data = localStorage.getItem('url-list');

  return data ? JSON.parse(data) : null;
};
