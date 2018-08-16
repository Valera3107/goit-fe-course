import EventEmitter from '../src/services/event-emitter';
import recipeCardTemplate from '../src/templates';

export default class View extends EventEmitter{
  constructor() {
    super();

    this.page = document.querySelector('.page');
    this.modal = document.querySelector('.modal');
    this.form = document.querySelector('.add');
    this.text = this.form.querySelector('.text');
    this.title = this.form.querySelector('.name');
    this.select = this.form.querySelector('.select');
    this.container = document.querySelector('.notes');
    this.filter = document.querySelector('.filterBtn');

    this.select = document.querySelector('.filter-select');

    this.editSuccessBtn = document.querySelector(`[data-action="edit-success"]`);
    this.editCancelBtn = document.querySelector(`[data-action="edit-cancel"]`);

    this.container.addEventListener('click', this.appendEventListners.bind(this));
    this.form.addEventListener('submit', this.handleAdd.bind(this));
    this.editCancelBtn.addEventListener('click', this.handleEditCancel.bind(this));
    this.editSuccessBtn.addEventListener('click', this.handleEditSuccess.bind(this));
    this.filter.addEventListener('click', this.handleSelect.bind(this));
    this.updateNote = this.updateNote.bind(this);
  }

  handleAdd(evt) {
    evt.preventDefault();

    if(this.text.value === '' && this.title.value === '') return;

    this.emit('add', this.text.value, this.title.value, this.select.value);
  }

  handleSelect(e) {
    e.preventDefault();
    this.emit('filtrate', this.select.value);
  }

  createCardItems(items) {
    return items.reduce((markup, item) =>
      markup + recipeCardTemplate(item), '');
  }

  hydrateRecipeCard(items) {
    const markup = this.createCardItems(items);
    this.addNewCard(markup);
  }

  addNewCard(markup) {
   this.container.insertAdjacentHTML('afterbegin', markup);
  }

  updateContainer() {
    this.container.innerHTML = "";
  }

  appendEventListners({target}) {

    const nodeName = target.nodeName;
    if(nodeName !== 'BUTTON') return;
    
    const item = target.closest('.item');

    const deleteBtn = item.querySelector('[data-action="remove"]');
    const editBtn = item.querySelector('[data-action="edit"]');
    
    editBtn.addEventListener('click', this.handleEdit.bind(this));
    deleteBtn.addEventListener('click', this.handleDelete.bind(this));
  }

  addNotes(notes) {
    this.updateContainer();
    this.hydrateRecipeCard(notes);

    this.form.reset();
  }

  handleEdit({target}) {
    const parent = target.closest('.item');
    this.emit('edit', parent.dataset.id);
  }

  handleEditCancel() {
    this.emit('edit-cancel');
  }

  handleEditSuccess() {
    const input = this.modal.querySelector('.edit-input');
    const textarea = this.modal.querySelector('.edit-text');

    this.emit('edit-success', input.value, textarea.value);
  }

  handleDelete({target}) {
    const parent = target.closest('.item');

    this.emit('remove', parent.dataset.id);
  }

  removeNote(id) {
    const item = this.container.querySelector(`[data-id="${id}"]`);
    this.container.removeChild(item);
  }

  openModal(note) {
    this.page.classList.add('show-modal');
    const input = this.modal.querySelector('.edit-input');
    input.value = note.title;

    const textarea = this.modal.querySelector('.edit-text');
    textarea.value = note.text;
  }

  closeModal() {
    this.page.classList.remove('show-modal');
  }

  updateNote(note) {
    const noteText = this.container.querySelector(`[data-id="${note.id}"] .recipe`);
    noteText.textContent = note.text;

    const noteTitle = this.container.querySelector(`[data-id="${note.id}"] .title-recipe`);
    noteTitle.textContent = note.title;
  }
}
