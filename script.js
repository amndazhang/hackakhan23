class Textbook {
  constructor(name, author, description, cost, isbn, username, img) {
    this.name = name;
    this.author = author;
    this.desc = description;
    this.cost = cost;
    this.isbn = isbn;
    this.username = username;
    this.username = username;
    this.img = img;
    // this.sold = false;
    // this.sold = false;
  }
  getName() {
    return this.name;
  }
  getAuth() {
    return this.author;
  }
  getDesc() {
    return this.desc;
  }
  getCost() {
    return this.cost;
  }
  getISBN() {
    return this.isbn;
  }
  getUsername() {
    return this.username;
  }
  getImg() {
    return this.img;
  }
  getUsername() {
    return this.username;
  }
  getImg() {
    return this.img;
  }
  sold() {
    this.sold = true;
  }
}


class Account {
  constructor(name, username, location, contact, postings) {
    this.name = name;
    this.username = username;
    this.username = username;
    this.location = location;
    this.contact = contact;
    this.postings = postings;
  }
  getContact() {
    return this.contact;
    this.postings = postings;
  }
  getContact() {
    return this.contact;
  }
  getPostings() {
    return this.postings;
  }
  getPostings() {
    return this.postings;
  }
  addPosting(book) {
    this.postings.push(book);
  }
  addPosting(book) {
    this.postings.push(book);
  }
  // addStar() {}
  // addStar() {}
}

var textbooks = [
  new Textbook(
      'World History Volume 2: From 1400', 'Ann Kordas, et al.',
      'Condition: like new', '$40', '9781711471433,9781711471440,9781951693626',
      'amndazhang',
      'https://cdnagesdb.com/images/booksimages/D6FDE14D981339F5D8736717C08D3DD3.webp'),
  new Textbook(
      'The Earth and Its Peoples : A Global History: Sixth Edition', 'Bullet',
      'AP Edition, quality: Fair', '$68', '978-1285436838', 'sopieli',
      'https://m.media-amazon.com/images/I/516mKQySQWL._SX373_BO1,204,203,200_.jpg'),
  new Textbook(
      'Calculus 9th ed.', 'Larson, Edward', 'Condition: Great', '$347.95',
      '978-0547167022', 'amndazhang',
      'https://m.media-amazon.com/images/I/41HlPvXdNML._SX399_BO1,204,203,200_.jpg'),
  new Textbook(
      'Biology Of Flowering Plants', 'Skene', 'Condition: Bad', '$56.41',
      '9788171412051', 'valval',
      'https://isbncoverdb.com/images/book-cover-biology-of-flowering-plants.webp')
];

// window.localStorage.setItem('textbook', JSON.stringify(textbooks));
// textbooks = JSON.parse(window.localStorage.getItem('textbook'));

var accounts = [
  new Account(
      'Prog frogs', 'progfrogs8681', 'San Francisco Bay Area, CA',
      'frog@frogs.com', []),
  new Account(
      'Amanda', 'amndazhang', 'San Francisco Bay Area, CA', 'amanda@frogs.com',
      []),
  new Account(
      'Sophie', 'sopieli', 'San Francisco Bay Area, CA', 'sopie@frogs.com', []),
  new Account(
      'Valerie', 'valval', 'San Francisco Bay Area, CA', 'valerie@frogs.com',
      []),
  new Account(
      'Prog rocks', 'rocks', 'San Francisco Bay Area, CA', 'prog@frogs.com', [])
];


function search_item() {
  let input = document.getElementById('searchbar').value.toLowerCase();
  let x = document.getElementsByClassName(
      'item');  // list of txtbooks from index file
  var textbooks = JSON.parse(window.localStorage.getItem('textbook'));
  for (let i = 0; i < textbooks.length; i++) {
    textbooks[i] = new Textbook(
        textbooks[i].name, textbooks[i].author, textbooks[i].desc,
        textbooks[i].cost, textbooks[i].isbn, textbooks[i].username,
        textbooks[i].img)
  }
  console.log(textbooks);
  for (let i = 0; i < textbooks.length; i++) {
    if (!textbooks[i].getName().toLowerCase().includes(input)) {
      x[i].style.display = 'none';
    }
    if (textbooks[i].getName().toLowerCase().includes(input) ||
        textbooks[i].getAuth().toLowerCase().includes(input) ||
        textbooks[i].getCost().toLowerCase().includes(input)) {
      x[i].style.display = 'list-item';
      document.getElementById('image').src = textbooks[i].getImg();
      x[i].children[1].innerText = textbooks[i].getName();
      x[i].children[2].innerText = textbooks[i].getAuth();
      x[i].children[3].innerText = textbooks[i].getCost();
    }
    console.log(textbooks);
    console.log(textbooks);
  }
  //   x[i].style.display = 'none';
  //   x[i].style.display = 'none';
}

// function sync() {}


// function sync() {}



// function search_item() {
//   let input = document.getElementById('searchbar').value
//   input = input.toLowerCase();
//   let x = document.getElementsByClassName('item');

//   for (i = 0; i < x.length; i++) {
//     if (!x[i].innerHTML.toLowerCase().includes(input)) {
//       x[i].style.display = 'none';
//     } else {
//       x[i].style.display = 'list-item';
//     }
//   }
// }

window.onload =
    function() {  // ensures the page is loaded before functions are executed.
  document.getElementById('retrieveButton').onclick = retrieveRecords

}

function retrieveRecords() {  // retrieves items in the localStorage
  console.log('retrieve records');
  var records = window.localStorage.getItem(book);
}

function prep_load() {
  if (window.localStorage.getItem('textbook') == null) {
    window.localStorage.setItem('textbook', JSON.stringify(textbooks));
  }
} function post_item() {
  const book = new Textbook(
      document.getElementById('nameInput').value,
      document.getElementById('authorInput').value,
      document.getElementById('descriptionInput').value,
      document.getElementById('costInput').value,
      document.getElementById('isbnInput').value,
      document.getElementById('accIdInput').value,
      document.getElementById('imageInput').value);
  var textbook = JSON.parse(window.localStorage.getItem('textbook'));
  textbook.push(book);
  window.localStorage.setItem('textbook', JSON.stringify(textbook));


  // window.localStorage.setItem(new Textbook(
  //     document.getElementById('nameInput').value,
  //     document.getElementById('authorInput').value,
  //     document.getElementById('descriptionInput').value,
  //     document.getElementById('costInput').value,
  //     document.getElementById('isbnInput').value,
  //     document.getElementById('accIdInput').value,
  //     document.getElementById('imageInput').value))
  console.log(textbooks);
  // document.getElementById('footer').innerText = "BALAJSFLSDFHWOIGRH";
  // username.addPosting(book);


  //   let x = document.getElementsByClassName('myitem');
  //   document.getElementById('image').src = img;
  //   x[0].children[1].innerText = name;
  //   x[0].children[2].innerText = author;
  //   x[0].children[3].innerText = cost;
  //   x[0].style.display = 'list-item';
}

function show_item(id) {
  bookTitle = document.getElementById(id).innerHTML;
  console.log(textbooks.length);
  for (i = 0; i < textbooks.length; i++) {
    if (bookTitle == textbooks[i].getName()) {
      id = i;
    }
  }
  return bookTitle;
}

function load_item() {
  document.getElementById('bookTitle').innerHTML = show_item('item1');
}
