'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // const submitBtn = document.querySelector('.filter');
  // const clearBtn = document.querySelector('.clear');

  // submitBtn.addEventListener('click', filter);

  // function filter(evt){
  //   evt.preventDefault();
  //   const filter = { size: [], color: [], release_date: [] }
  //   let arrOfCheckedElem = [];
  //   const inputs = document.querySelectorAll('input');
    
  //   inputs.forEach(element => {
  //     if(element.checked){
  //        arrOfCheckedElem.push(element);
  //     }
  //   })
   
  //   for(let i=0;i<arrOfCheckedElem.length ;i+=1 ){
  //     filter[arrOfCheckedElem[i].name].push(arrOfCheckedElem[i].value);
  //   }

  //   filterGoods(filter, laptops);

  // } 

  // function filterGoods(arrOfFilter ,goods){
  //   let arrOfGoods = [];
  //   let arrOfComparsation = ['size', 'color', 'release_date'];

  //     for(let i = 0; i < goods.length; i+=1){
  //       for(let j = 0; j < arrOfComparsation.length; j+=1){
  //         console.log(goods[i].arrOfComparsation[i] === arrOfFilter.arrOfComparsation[i]);
  //       }
  //     }
  //     // console.log(arrOfFilter.size.forEach(elem => {console.log(elem)}));
  //     // element.size === arrOfFilter.size.forEach(elem => {return elem})||element.color === arrOfFilter.color.forEach(elem => {return elem})||element.release_date === arrOfFilter.release_date.forEach(elem => {return elem})
  //     // arrOfGoods.push(element.size === arrOfFilter.size.forEach(elem => {return elem})||element.color === arrOfFilter.color.forEach(elem => {return elem})||element.release_date === arrOfFilter.release_date.forEach(elem => {return elem}));
  //   console.log(goods);
  //   console.log(arrOfGoods);
  // }

  // const list = document.querySelector('#root');

  // const source = document.querySelector('#source').innerHTML.trim();

  // const template = Handlebars.compile(source);

  // const markup = template({});

  let filter = { size: [], color: [], release_date: [] };
const form = document.querySelector('.js-form');
const source = document.querySelector('#source').innerHTML.trim();
const template = Handlebars.compile(source);
const container = document.querySelector('#root');

form.addEventListener('submit', handelOnSubmit);
form.addEventListener('reset', hanselFormReset);

function matchArray(arr, value) {
  return arr.length === 0 || arr.includes(value);
}

function handelOnSubmit(event) {
  event.preventDefault();

  const chekedCheckbox = Array.from(
    form.querySelectorAll('input[type="checkbox"]:checked'),
  );

  filter = chekedCheckbox.reduce(
    (acc, checkbox) => {
      acc[checkbox.name].push(checkbox.value);
      return acc;
    },
    { size: [], color: [], release_date: [] },
  );

  const matchedLaptops = laptops.filter(laptop => {
    const matchSize = matchArray(filter.size, String(laptop.size));
    const matchColor = matchArray(filter.color, laptop.color);
    const matchReleaseDate = matchArray(
      filter.release_date,
      String(laptop.releaseDate),
    );

    return matchSize && matchColor && matchReleaseDate;
  });

  const markup = template({ laptops: matchedLaptops });

  container.innerHTML = markup;

  form.reset();
}

function hanselFormReset(event) {
  resetFilter();
  form.reset();
}

function resetFilter() {
  filter.size = [];
  filter.color = [];
  filter.releaseDate = [];
}

  
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

});