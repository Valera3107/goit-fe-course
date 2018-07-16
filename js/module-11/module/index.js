'use strict';

document.addEventListener('DOMContentLoaded', () => {
  
  const laptops = [
    {
      size: 13,
      color: 'white',
      price: 28000,
      release_date: 2015,
      name: 'Macbook Air White 13"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 13,
      color: 'gray',
      price: 32000,
      release_date: 2016,
      name: 'Macbook Air Gray 13"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 13,
      color: 'black',
      price: 35000,
      release_date: 2017,
      name: 'Macbook Air Black 13"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 15,
      color: 'white',
      price: 45000,
      release_date: 2015,
      name: 'Macbook Air White 15"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 15,
      color: 'gray',
      price: 55000,
      release_date: 2016,
      name: 'Macbook Pro Gray 15"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 15,
      color: 'black',
      price: 45000,
      release_date: 2017,
      name: 'Macbook Pro Black 15"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 17,
      color: 'white',
      price: 65000,
      release_date: 2015,
      name: 'Macbook Air White 17"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 17,
      color: 'gray',
      price: 75000,
      release_date: 2016,
      name: 'Macbook Pro Gray 17"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 17,
      color: 'black',
      price: 80000,
      release_date: 2017,
      name: 'Macbook Pro Black 17"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
  ];

  const submitBtn = document.querySelector('.filter');
  const clearBtn = document.querySelector('.clear');
  const list = document.querySelector('#root');

  submitBtn.addEventListener('click', filter);
  clearBtn.addEventListener('click', reset);

  function reset(evt){
    evt.preventDefault();
    
    const arrOfCards = list.querySelectorAll('.container');
    arrOfCards.forEach(element => element.remove());

    const labels = document.querySelectorAll('input');
    labels.forEach(element => {
      if(element.checked){
        element.checked = false;
      }
    })
  }

  function filter(event){
    event.preventDefault();
   
    const inputs = document.querySelectorAll('input');
    
    let filter = getCheckedPoints(inputs);

    const matchedLaptops = filterGoods(filter, laptops);

    const list = document.querySelector('#root');
    const source = document.querySelector('#source').innerHTML.trim();
    const template = Handlebars.compile(source);
    const markup = template({matchedLaptops});
    list.insertAdjacentHTML('afterbegin', markup);
  } 

  function getCheckedPoints(arrOfInputs) {
    let arrOfCheckedElem = [];
    let arrOfFilter = { size: [], color: [], release_date: [] };
    arrOfInputs.forEach(element => {
      if(element.checked){
         arrOfCheckedElem.push(element);
      }
    })
    for(let i=0;i<arrOfCheckedElem.length ;i+=1 ){
      arrOfFilter[arrOfCheckedElem[i].name].push(arrOfCheckedElem[i].value);
    }
    return arrOfFilter;
  }

  function filterGoods(arrOfFilter ,goods){
    let arrOfGoods = [];
    goods.filter(element => {
  
      if(arrOfFilter.size.includes(`${element.size}`) 
      && arrOfFilter.color.includes(`${element.color}`) 
      && arrOfFilter.release_date.includes(`${element.release_date}`)){
        arrOfGoods.push(element);
      }
    })
    return arrOfGoods;
  }

});