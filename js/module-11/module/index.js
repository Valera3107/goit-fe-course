'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const submitBtn = document.querySelector('.filter');
  const clearBtn = document.querySelector('.clear');

  submitBtn.addEventListener('click', filter);

  function filter(evt){
    evt.preventDefault();
    const filter = { size: [], color: [], release_date: [] }
    let arrOfCheckedElem = [];
    const inputs = document.querySelectorAll('input');
    
    inputs.forEach(element => {
      if(element.checked){
         arrOfCheckedElem.push(element);
      }
    })
   
    for(let i=0;i<arrOfCheckedElem.length ;i+=1 ){
      filter[arrOfCheckedElem[i].name].push(arrOfCheckedElem[i].value);
    }

    const matchedLaptops = filterGoods(filter, laptops);

    const list = document.querySelector('#root');
  
    const source = document.querySelector('#source').innerHTML.trim();
  
    const template = Handlebars.compile(source);
  
    const markup = template({matchedLaptops});

    list.insertAdjacentHTML('afterbegin', markup);
    // makeCards(matchedLaptops);
  } 

  function filterGoods(arrOfFilter ,goods){
    let arrOfGoods = [];
    const arrOfComparsation = ['size', 'color', 'release_date'];
     
    for(let i=0; i < arrOfFilter.size.length; i+=1){
      for(let j=0; j < goods.length; j+=1) {
        if(goods[j].size == arrOfFilter.size[i] && !arrOfGoods.includes(goods[j])){
          arrOfGoods.push(goods[j]);
        }
      }
    }

      for(let i=0; i < arrOfFilter.color.length; i+=1){
        for(let j=0; j < goods.length; j+=1) {
          if(goods[j].color == arrOfFilter.color[i] && !arrOfGoods.includes(goods[j])){
            arrOfGoods.push(goods[j]);
          }
        }
      }

      for(let i=0; i < arrOfFilter.release_date.length; i+=1){
        for(let j=0; j < goods.length; j+=1) {
          if(goods[j].release_date == arrOfFilter.release_date[i] && !arrOfGoods.includes(goods[j])){
            arrOfGoods.push(goods[j]);
          }
        }
      }

    console.log(arrOfGoods);
  }

  // function makeCards(arr){
  //   const list = document.querySelector('#root');
  
  //   const source = document.querySelector('#source').innerHTML.trim();
  
  //   const template = Handlebars.compile(source);
  
  //   const markup = template({arr});

  //   list.insertAdjacentHTML('afterbegin', markup);
  // }

  
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