import v4 from 'uuid/v4';
import * as storage from '../services/storage';

export default class Model {
  constructor(items = []) {
    this.items = items;
  }

  addItem(text, title, select){
    const item = {
      id: v4(),
      text,
      title,
      select,
    }
    
    this.items.push(item);
    storage.set(this.items);

    return item;
  }

  updateItem(id, props) {
    const item = this.items.find(item => item.id === id);

    const keys = Object.keys(props);

    keys.forEach(key => item[key] = props[key]);
  }

  removeItem(id) {
    this.items = this.items.filter(item => item.id !== id);
    // storage.clear();
    // storage.set(this.items);
  }

  // deleteFromStorage(id) {
  //   const item = this.items.find(item => item.id === id);
  //   this.removeItem(item.id);
  // }

}