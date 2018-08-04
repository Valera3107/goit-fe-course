import EventEmitter from '../services/event-emitter';

export default class View extends EventEmitter{
  constructor() {
    super();

    this.form = document.querySelector('.add');
    this.text = this.form.querySelector('.recipe');
    this.title = this.form.querySelector('.title-recipe');
    this.select = this.form.querySelector('.select');
    this.container = document.querySelector('.container'); 

    this.form.addEventListener('submit', this.handleAdd.bind(this));
  }

  handleAdd(evt) {
    evt.preventDefault();

    if(this.title.value === '' && this.text.value === '') return;

    this.emit('add', this.title.value, this.text.value);
  }

  createNote(note) {
    const item = document.createElement('div');
    item.dataset.id = note.id;
    item.dataset.select = note.select;
    item.classList.add('item');
  
    const title = document.createElement('h2');
    title.classList.add('title-recipe');
    title.textContent = note.title;
  
    const block = document.createElement('div');
    block.classList.add('block');
  
    const recipe = document.createElement('p');
    recipe.classList.add('recipe');
    recipe.textContent = note.text;
  
    const action = document.createElement('div');
    action.classList.add('action');
  
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.classList.add('button');
    deleteBtn.dataset.action = 'remove';
    deleteBtn.textContent = 'Delete';
  
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit');
    editBtn.classList.add('button');
    editBtn.dataset.action = 'edit';
    editBtn.textContent = 'Edit';
  
    action.append(deleteBtn, editBtn);
  
    block.append(recipe, action);
  
    item.append(title, block);
  
    this.appendEventListners(item);
  
    return item;
  }

  appendEventListners(item) {
    const deleteBtn = item.querySelector('[data-action="remove"]');
    const editBtn = item.querySelector('[data-action="edit"]');
    
    editBtn.addEventListener('click', this.handleEdit.bind(this));
    deleteBtn.addEventListener('click', this.handleDelete.bind(this));
  }

  addNote(note) {
    const item = this.createNote(note);

    this.form.reset();

    this.container.appendChild(item);
  }

  handleEdit({target}) {

  }

  handleDelete({target}) {
    const parent = target.closest('.item');

    this.emit('remove', parent.dataset.id);
  }

  removeNote(id) {
    const item = this.container.querySelector(`[data-id="${id}"]`);
    this.container.removeChild(item);
  }
}
