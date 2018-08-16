export const set = value => {
  localStorage.setItem('recipe-list', JSON.stringify(value));
};

export const clear = () => {
  localStorage.clear('recipre-list');
}

export const get = () => {
  const data = localStorage.getItem('recipe-list');

  return data ? JSON.parse(data) : null;
};
