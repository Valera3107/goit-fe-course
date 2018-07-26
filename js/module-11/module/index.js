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
  const form = document.querySelector('.form');

  submitBtn.addEventListener('click', filter);
  clearBtn.addEventListener('click', reset);

  function reset(evt){
    evt.preventDefault();
    
    list.innerHTML = '';

    const labels = Array.from(
      form.querySelectorAll('input[type="checkbox"]:checked'),
    );

    labels.forEach(element => {
        element.checked = false;
    })
  }

  function filter(event){
    event.preventDefault();
   
    const inputs = Array.from(
      form.querySelectorAll('input[type="checkbox"]:checked'),
    );
    
    let filter = getCheckedPoints(inputs);

    const matchedLaptops = filterGoods(filter, laptops);

    const list = document.querySelector('#root');
    const source = document.querySelector('#source').innerHTML.trim();
    const template = Handlebars.compile(source);
    const markup = template({matchedLaptops});
    list.insertAdjacentHTML('afterbegin', markup);
  } 

  function getCheckedPoints(arrOfInputs) {
    let arrOfFilter = arrOfInputs.reduce(
      (acc, elem) => {
        acc[elem.name].push(elem.value);
        return acc;
      }, { size: [], color: [], release_date: [] }
    );
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