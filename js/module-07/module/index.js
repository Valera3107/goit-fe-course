'use strict';

const sectionCard = document.querySelector('#post');

let actions = [
  {
  imgIcon: 'actions__icon--like'
},

  {
  imgIcon: 'actions__icon--dislike',
},

  {
  imgIcon: 'actions__icon--fav',
}
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

function createPostAction(iconClass, count){  

    const createItem = document.createElement('li');
    createItem.classList.add('actions__item');
    
    const createButton = document.createElement('button');
    createButton.classList.add('actions__btn');
    
    const createIcon = document.createElement('span');
    createIcon.classList.add('actions__icon');
    createIcon.classList.add(iconClass);
    
    const createCount = document.createElement('span');
    createCount.classList.add('actions__count');
    createCount.textContent = count;
   
    createButton.appendChild(createIcon);
    createButton.appendChild(createCount);
    createItem.appendChild(createButton);

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
const postActionsData = [
  {iconClass: 'actions__icon--like', count: stats.likes},
  {iconClass: 'actions__icon--dislike', count: stats.dislikes},
  {iconClass: 'actions__icon--fav', count: stats.fav}
];


postActionsData.forEach(action => {
  const elem = createPostAction(action.iconClass, action.count);
  createList.appendChild(elem);
})


card.appendChild(createList);
return card;
};

sectionCard.appendChild(createPostCard(posts[0]));
sectionCard.appendChild(createPostCard(posts[1]));
sectionCard.appendChild(createPostCard(posts[2]));
