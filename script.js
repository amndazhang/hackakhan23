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
    'AP Edition, quality: Fair', '$68', '978-1285436838', '01984roaiufdljksdf'
    ),
    new Textbook(
    'hello', 'Bullet',
    'AP Edition, quality: Fair', '$68', '978-1285436838'
    )

];


function search_item() {
  let input = document.getElementById('searchbar').value
  input = input.toLowerCase();
  let x =  document.getElementsByClassName('item');
//   let count = 0;
  for(let i = 0; i < textbooks.length; i++) {
    if (!textbooks[i].getName().toLowerCase().includes(input)) {
        x[0].style.display = 'none';
    } 
    else {
      x[1].children[0].innerText = textbooks[i].getName();
      x[1].children[1].innerText = textbooks[i].getAuth();
    //   x[1].children[2].innerText = textbooks[i].getDesc();
      x[1].children[3].innerText = textbooks[i].getCost();
    // displayImage("img/park.png", 3, 3);

    //   x[1].children[4].innerText = textbooks[i].getISBN();
    //   x[1].children[5].innerText = textbooks[i].getaccID();
      x[1].children[6].innerText = textbooks[i].sold();
    //   count++;
    }
  }
}

// function displayImage(src, width, height) {
//     var img = document.createElement("img");
//     img.src = src;
//     img.width = width;
//     img.height = height;
//     document.body.appendChild(img);
//    }

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

// function post_item(){
  // textbooks.
// }