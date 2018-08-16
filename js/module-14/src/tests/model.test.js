// import View from '../view';
import Controller from '../controller';
import * as storage from '../services/storage';
import v4 from 'uuid/v4';
import Model from '../model';


describe('Model class', ()=> {
  it('Should new add item', ()=>{
    const model = new Model();
  
    expect(model.addItem("Napoleonion",'Some text....', '1'))
    .toEqual([{id:'1' ,text: "Napoleonion", title: 'Some text....', select: '1'}]);
  })

  it('Must find item by id', () => {
    const model = new Model();

    model.addItem("Napoleonion",'Some text....', '1').then(
    expect(model.findItem('1').toEqual( {id:'1' ,text:"Napoleonion", title:'Some text....', select:'1'})));
  })

  it('Update item', ()=>{
    const model = new Model();
    model.addItem("Napoleonion",'Some text....', '1');
    expect(model.updateItem({id:'1', text:'KFC', title: 'fastfood', select: '1'}).toEqual({id:'1', text:'KFC', title: 'fastfood', select: '1'}));
  })
})