'use strict';

function SocialBook (users, posts) { 
  this.users = users;
  this.posts = posts;

  this.getAllUsers = () => {return this.users.map(user => user)};
  this.getUserByLogin = (login) => { return this.users.find(login => login === login)};
  this.getUserStatus = (userId) => { return this.users.find(id => id.id === userId).isActive?'active':'inactive'};
  this.addUser = (user) => {return this.users.push(user)};
  this.removeUserById = (userId) => {return delete this.users[this.users.find(id => id.id === userId)]};
  this.getUsersCount = () => {return this.users.reduce((acc) => acc + 1, 0) };
 }

 const getId = () => "-" + Math.random().toString(36).substr(2, 9);

 const initialUsers = [
  { id: "-s19a6hqce", login: "mangozedog@mail.com", password: "qwe123zv", isActive: true },
  { id: "-qkpzenjxe", login: "polysweet@skynet.ze", password: "123zxc78", isActive: true },
  { id: "-e51cpd4di", login: "ajax2k@change.ua", password: "ert234qw", isActive: false }
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

console.log(manager.getAllUsers());

console.log(manager.getUserByLogin('polysweet@skynet.ze'));

console.log(manager.getUserStatus('-qkpzenjxe'));

console.log(manager.addUser(newUser));
console.log(initialUsers);

console.log(manager.removeUserById('-qkpzenjxe'));
console.log(initialUsers);

console.log(manager.getUsersCount());

