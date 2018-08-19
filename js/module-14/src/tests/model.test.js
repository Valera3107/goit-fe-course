import * as storage from '../services/storage';
import Model from '../model';



describe('Model class', ()=> {
  it('Should create Model instance', () => {
    const model = new Model();

    expect(model instanceof Model).toBe(true);
  });

  it('Should add new item', ()=>{
    const model = new Model();
  
    expect(model.addItem('1' ,"Napoleonion",'Some text....', '1'))
    .toEqual([{id:'1' ,text: "Napoleonion", title: 'Some text....', select: '1'}]);
  })

  it('Find item by id', () => {
    const model = new Model();

    model.addItem('2','rrrr','Napoleonion', '2');
    expect(model.findItem('1')).toEqual({id: '1', select: '1', text: 'Napoleonion', title:'Some text....'});
  })

  it('Update item', ()=>{
    const model = new Model();
    expect(model.updateItem({id:'1', text:'KFC', title: 'fastfood', select: '1'})).toEqual({id:'1', text:'KFC', title: 'fastfood', select: '1'});
  })

  it('Set selected item id', () => {
    const model = new Model();
    expect(model.setSelectedItemId()).toBeUndefined();
  })

  it('Set selected item id', () => {
    const model = new Model();
    expect(model.setSelectedItemId('1')).toBe('1');
  })

  it('Should remove item by id', () => {
    const model = new Model();
    model.addItem('3' ,"Napoleonion",'Some text....', '1');
    model.addItem('4' ,"Nap",'Some text....', '2');

    expect(model.removeItem('3')).toEqual(
   [{id: "1", select: "1", text: "KFC", title: "fastfood"}, 
    {id: "2", select: "2", text: "rrrr", title: "Napoleonion"}, 
    {id: "4", select: "2", text: "Nap", title: "Some text...."}]);
  })

  it('Filtrate items by select', () => {
    const model = new Model();
    expect(model.filtrateItems('2')).toEqual(
    [{id: "2", select: "2", text: "rrrr", title: "Napoleonion"}, 
    {id: "4", select: "2", text: "Nap", title: "Some text...."}])
  })
})