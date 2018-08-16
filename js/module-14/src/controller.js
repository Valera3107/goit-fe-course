export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    if(this.model.items){
      this.view.hydrateRecipeCard(this.model.items);
    }

    view.on('add', this.addNotes.bind(this));
    view.on('remove', this.removeNote.bind(this));
    view.on('edit', this.startNoteEdit.bind(this));
    view.on('edit-cancel', this.handleEditCancel.bind(this));
    view.on('edit-success', this.handleEditSuccess.bind(this));
    view.on('filtrate', this.filtrateRecipes.bind(this));
  }

  filtrateRecipes(select) {
    const checkedNotes = this.model.filtrateItems(select);
    this.view.addNotes(checkedNotes);
  }

  handleEditSuccess(title, text) {
    const id = this.model.getSelectedItemId(); 
    const note = this.model.updateItem({id, title, text});
    this.view.closeModal();
    this.view.updateNote(note);
  }

  startNoteEdit(id) {
    const item = this.model.findItem(id);
    this.model.setSelectedItemId(id);
    this.view.openModal(item);
  }

  handleEditCancel() {
    this.view.closeModal();
  }

  addNotes(text, title, select) {
    const items = this.model.addItem(text, title, select);
    this.view.addNotes(items);
  }

  removeNote(id) {
    this.model.removeItem(id);
    this.view.removeNote(id);
  }
}