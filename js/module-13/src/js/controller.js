export default class Controller {
  constructor(modal, view) {
    this.modal = modal;
    this.view = view;

    view.on('add', this.addNote.bind(this));
    view.on('add', this.removeNote.bind(this));
  }

  addNote({text, title, select}) {
    const item = this.modal.addItem({text, title, select});
    this.view.addNote(item);
  }

  removeNote(id) {
    this.modal.removeItem(id);
    this.view.removeItem(id);
  }
}