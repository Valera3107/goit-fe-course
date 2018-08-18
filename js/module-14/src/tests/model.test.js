//import View from '../view';
import Controller from '../controller';
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

    model.addItem('1','1','rfrf', 'r4r4');
    expect(model.findItem('1').toEqual({id: '1', select: '1', text: 'rfrf', title:'r4r4'}));
  })

  it('Update item', ()=>{
    const model = new Model();
    model.addItem('1', "Napoleonion",'Some text....', '1');
    expect(model.updateItem({id:'1', text:'KFC', title: 'fastfood', select: '1'}).toEqual({id:'1', text:'KFC', title: 'fastfood', select: '1'}));
  })
})