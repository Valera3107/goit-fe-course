'use strict';

const sectionCard = document.querySelector('#post');

let actions = [
  {classItem: 'actions__item',
  classButton: 'actions__btn',
  classIcon: 'actions__icon',
  imgIcon: 'actions__icon--like',
  classCount: 'actions__count'},

  {classItem: 'actions__item',
  classButton: 'actions__btn',
  classIcon: 'actions__icon',
  imgIcon: 'actions__icon--dislike',
  classCount: 'actions__count'},

  {classItem: 'actions__item',
  classButton: 'actions__btn',
  classIcon: 'actions__icon',
  imgIcon: 'actions__icon--fav',
  classCount: 'actions__count'}
];

const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    stats: {
      likes: 6,
      dislikes: 2,
      fav: 3
    }
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    stats: {
      likes: 124,
      dislikes: 8,
      fav: 36
    }
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    stats: {
      likes: 800,
      dislikes: 36,
      fav: 147
    }
  }
];

function createPostActions(actions, posts, i){  

    const createItem = document.createElement('li');
    createItem.classList.add(actions[i].classItem);
    
    const createButton = document.createElement('button');
    createButton.classList.add(actions[i].classButton);
    createItem.appendChild(createButton);
    
    const createIcon = document.createElement('span');
    createIcon.classList.add(actions[i].classIcon);
    createIcon.classList.add(actions[i].imgIcon);
    
    const createCount = document.createElement('span');
    createCount.classList.add(actions[i].classCount);
    if(i === 0){
      createCount.textContent = posts[i].stats.likes;
    }else if(i === 1){
      createCount.textContent = posts[i].stats.dislikes;
    }else{
    createCount.textContent = posts[i].stats.fav;
  }
    createButton.appendChild(createIcon);
    createButton.appendChild(createCount);
  return createItem;
};


function createPostCard({img = 'http://...', title = 'Some text ...', text = 'Lorem ...', stats = {likes: 0, dislike: 0, fav: 0}}){
const card = document.createElement('div');
card.classList.add('post');

//====img
const createImg = document.createElement('img');

createImg.setAttribute('class', 'post__image');
createImg.setAttribute('src', img);
createImg.setAttribute('alt', 'post image');
card.appendChild(createImg);

//====title
const createTitle = document.createElement('h2');
createTitle.classList.add('post__title');
createTitle.textContent = title;
card.appendChild(createTitle);

//====text
const createText = document.createElement('p');
createText.classList.add('post__text');
createText.textContent = text;
card.appendChild(createText);

//=====List
const createList = document.createElement('ul');
createList.classList.add('actions');
createList.classList.add('post__actions');

//==li
for(let i = 0; i < 3; i+=1 ){
let createItem = createPostActions(actions, posts, i);
createList.append(createItem);
}

card.appendChild(createList);
return card;
};

sectionCard.appendChild(createPostCard(posts[0]));
sectionCard.appendChild(createPostCard(posts[1]));
sectionCard.appendChild(createPostCard(posts[2]));
