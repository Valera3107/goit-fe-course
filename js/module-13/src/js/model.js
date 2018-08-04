import v4 from 'uuid/v4';

export default class Model {
  constructor(items = []) {
    this.items = items;
  }

  addItem({text, title, select}){
    const item = {
      id: v4(),
      text,
      title,
      select,
    }

    storage.set(item);
    this.items.push(item);

    return item;
  }

  updateItem(id, props) {
    const item = this.items.find(item => item.id === id);

    const keys = Object.keys(props);

    keys.forEach(key => item[key] = props[key]);
  }

  removeItem(id) {
    this.items = this.items.filter(item => item.id !== id);
  }

}