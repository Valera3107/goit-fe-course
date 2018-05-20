'use strict';

function SocialBook (users, posts) { 
  this.users = users;
  this.posts = posts;

  this.getAllUsers = () => {this.users};

  this.getUserByLogin = (login) => {this.users.find(user => user.login === login)};

  this.getUserStatus = (userId) => {this.users.find(user => user.id === userId)
                                                       .isActive ? 'active' : 'inactive'};
 
  this.addUser = (user) => {this.users.push(user)};

  this.removeUserById = (userId) => {this.users = this.users.filter(user => user.id !== userId);};

  this.getUsersCount = () => {this.users.length };

  //===============
  
  this.getUserPosts = (userId) => {this.posts[userId]};

  this.addPost = (userId, post) => {this.posts[userId].push(post)};

  this.removePost = (userId, postId) => {this.posts = this.posts[userId].filter(post => post.id !== postId)};

  this.getAllLikes = (userId) => {this.posts[userId].reduce((acc, value) => acc + value.likes , 0)};
  
  this.addPostLike = (userId, postId) => {this.posts[userId].find(post => post.id === postId).likes + 1};
  
  this.getPostsCount = (userId) => {Object.keys(this.posts).length};
};

 const getId = () => "-" + Math.random().toString(36).substr(2, 9);

 const initialUsers = [
  { id: "-s19a6hqce", login: "mangozedog@mail.com", password: "qwe123zv", isActive: true },
  { id: "-qkpzenjxe", login: "polysweet@skynet.ze", password: "123zxc78", isActive: true },
  { id: "-e51cpd4di", login: "ajax2k@change.ua", password: "ert234qw", isActive: false },
];


const initialPosts = {
  "-s19a6hqce": [
    { id: "-5sgljaskg", text: "post #1", likes: 3 },
    { id: "-199hb6igr", text: "post #2", likes: 5 },
    { id: "-hy0eyw5qo", text: "post #3", likes: 13 }
  ],
  "-qkpzenjxe": [
    { id: "-5tu69g5rf", text: "post #1", likes: 8 },
    { id: "-bje766393", text: "post #2", likes: 15 }
  ],
  "-e51cpd4di": [
    { id: "-9y6nkmlj4", text: "post #1", likes: 18 },
    { id: "-i03pbhy3s", text: "post #2", likes: 45 }
  ],
};


const manager = new SocialBook(initialUsers, initialPosts);

const newUser = {
  id: getId(), 
  login: "ukr@net.ua", 
  password: "qwe1234qwrerty", 
  isActive: false
};

const newPost = {
  id: getId(),
   text: "post #($)", 
   likes: 234
};

console.log(manager.getAllUsers());

console.log(manager.getUserByLogin('polysweet@skynet.ze'));

console.log(manager.getUserStatus('-qkpzenjxe'));

console.log(manager.addUser(newUser));
console.log(initialUsers);

console.log(manager.removeUserById('-qkpzenjxe'));

console.log(manager.getUsersCount());

//==========================
console.log("//====================");
//==========================

console.log(manager.getUserPosts('-qkpzenjxe'));

console.log(manager.addPost('-qkpzenjxe', newPost));

console.log(manager.removePost('-s19a6hqce','-hy0eyw5qo'));

console.log(manager.getAllLikes('-e51cpd4di'));

console.log(manager.addPostLike('-e51cpd4di','-i03pbhy3s'));

console.log(manager.getPostsCount('-s19a6hqce'));
