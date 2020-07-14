const bookList = document.querySelector('.book-list');


const books = [{
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img: "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img: "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy"
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img: "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg"
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg"
  }
];

const bookCard = books.map(book => {

  let bookCard = document.createElement('div');
  bookCard.classList.add('book-card');
  let isReadSection = document.createElement('div');
  isReadSection.classList.add('is-read-section');

  //img
  const img = document.createElement('img');
  img.setAttribute("src", book.img);


  //h2
  let h2 = document.createElement('h2');
  h2.innerText = book.title;

  //author
  let author = document.createElement('p');
  let surnameFirst = book.author.split(' ').reverse().join(', ');
  author.innerHTML = surnameFirst;

  //isReadSection
  let isRead = document.createElement('p');
  isRead.classList.add('is-read');
  if (book.alreadyRead === true) {
    isRead.innerText = "Read";
    isRead.style.background = "green";
  } else {
    isRead.innerText = "To read";
    isRead.style.background = "#888";
  };

  isReadSection.appendChild(isRead);


  //append to parent container
  bookCard.appendChild(img);
  bookCard.appendChild(h2);
  bookCard.appendChild(author);
  bookCard.appendChild(isReadSection);


  //append to main container
  bookList.appendChild(bookCard);
});
console.log(bookCard);