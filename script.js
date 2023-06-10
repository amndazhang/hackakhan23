class Textbook {
  constructor(name, author, description, cost, isbn, accID, img) {
    this.name = name;
    this.author = author;
    this.desc = description;
    this.cost = cost;
    this.isbn = isbn;
    this.accID = accID;
    this.img = img;
    this.unavail = false;
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
  getaccID() {
    return this.accID;
  }
  getImg() {
    return this.img;
  }
  unavail() {
    this.sold = true;
  }
  }

class Account {
  constructor(name, location, contact, id) {
    this.name = name;
    this.location = location;
    this.contact = contact;
    this.id = id;
    this.starred = [];
  }
  getContact(){
    
  }
  addStar(){
    
  }
}


var textbooks = [
    new Textbook(
    'The Earth and Its Peoples : A Global History: Sixth Edition', 'Bullet',
    'AP Edition, quality: Fair', '$68', '978-1285436838','1' ,'https://www.kws.go.ke/sites/default/files/styles/park_node_style/public/Saiwa.jpg?itok=L9IPW8XY'),
    new Textbook(
    'hello', 'Bullet',
    'AP Edition, quality: Fair', '$68', '978-1285436838', '2','https://www.kws.go.ke/sites/default/files/styles/park_node_style/public/Saiwa.jpg?itok=L9IPW8XY'
    ),
    new Textbook(
    'good morning', 'Bullet',
    'AP Edition, quality: Fair', '$68', '978-1285436838', '3','https://www.kws.go.ke/sites/default/files/styles/park_node_style/public/Saiwa.jpg?itok=L9IPW8XY'
    ),
    new Textbook(
        'good evening', 'Bullet',
        'AP Edition, quality: Fair', '$68', '978-1285436838', '4', 'https://www.kws.go.ke/sites/default/files/styles/park_node_style/public/Saiwa.jpg?itok=L9IPW8XY'
    )
];


function search_item() {
  let input = document.getElementById('searchbar').value
  input = input.toLowerCase();
  let x =  document.getElementsByClassName('item');
//   let count = 0;
  for(let i = 0; i < textbooks.length; i++) {
    if (!textbooks[i].getName().toLowerCase().includes(input)) {
        x[i].style.display = 'none';
    } 
    if(textbooks[i].getName().toLowerCase().includes(input)){
      x[i].style.display = 'list-item';
      document.getElementById("image").src = textbooks[i].getImg();
      x[i].children[1].innerText = textbooks[i].getName();
      x[i].children[2].innerText = textbooks[i].getAuth();
      x[i].children[3].innerText = textbooks[i].getCost();

    }
  }
//   x[i].style.display = 'none';
}

function sync(){
    
}




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

function post_item(){
  textbooks.push();
}