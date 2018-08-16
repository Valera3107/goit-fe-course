import v4 from 'uuid/v4';
import * as storage from './services/storage';

export default class Model {
  constructor(items = []) {
    this.items = storage.get();
    this.selectedItemId = null;
  }

  addItem(text, title, select){
    const item = {
      id: '1',
      text,
      title,
      select,
    }

    if(this.items === null){
       this.items = [];
    }
    
    this.items.push(item);
    storage.set(this.items);

    return this.items;
  }

  setSelectedItemId(id) {
    this.selectedItemId = id;
  }

  getSelectedItemId() {
    return this.selectedItemId;
  }

  findItem(id) {
    return this.items.find(item => item.id === id);
  }

  updateItem(note) {
    const updatedItem = this.findItem(note.id);
    updatedItem.text = note.text;
    updatedItem.title = note.title;
    
    let item = this.findItem(updatedItem.id);
    item = Object.assign(item, updatedItem);
    storage.clear();
    storage.set(this.items);

    return item;
  }

  filtrateItems(select) {
    if(Number(select) === 5){
      return this.items;
    }

    const filtrateNotes = this.items.filter(item => item.select === select);
    return filtrateNotes;
  }

  removeItem(id) {
    this.items = this.items.filter(item => item.id !== id);
    storage.clear();
    storage.set(this.items);
  }
}