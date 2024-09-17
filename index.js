//Create an array to store books
//Create a contructor function
//Create a function that adds new books to the library
//Accept user input and create a new book to store in an array.
//Create an interface to show the contents of the array
//Display the books on the page: table or cards
//Add a new book button that allows users to input details of new book in a form
//Submitting this form adds the book to the array
//Create a display for each book
//Add a button on each book's display to remove book from library
//Add a button on each book's display to change the read status

//Create an array to store books
const main = document.querySelector(".main")
const book_section = document.querySelector(".books")
const dialog = document.querySelector("#m-dialog");
const confirmBtn = document.querySelector("#confirmBtn");
const cancelBtn = document.querySelector("#cancelBtn");
const author = document.querySelector("#author");
const title = document.querySelector("#title");
const pages = document.querySelector("#pages");
const isRead = document.querySelector("#isRead");
const newBook = document.querySelector(".new-book");

const library = [
    {
        title : "harry pooter",
        author: "micheal",
        pages: 300,
        isRead: false
    },
    {
        title : "journey to the west",
        author: "choas incarnate",
        pages: 300,
        isRead: false
    }, 
    {
        title : "kunfu panda",
        author: "void general",
        pages: 300,
        isRead: false
    },
    {
        title : "diablo",
        author: "fantastic",
        pages: 300,
        isRead: false
    }
];

//Create a contructor function
function Book(title ="",author = "",pages =0,isRead=false) {
    this.title = title;
    this.author = author;
    this.isRead = isRead;
    this.pages = pages;
}

//Create a function that adds new books to the library
function addNewBook() {
    const book = new Book();
    do{
        //Accept user input and create a new book to store in an array.

        let prop = prompt("Enter info:")
        book[prop] = prop;
    } while(book.author.length === 0 || book.title.length === 0 || book.pages > 0)
     
    library.push(book);
}

//Create an interface to show the contents of the array
//Display the books on the page: table or cards
function displayBooks() {
    library.forEach(book => {
        /*    const {
               title,
               author,
               pages,
               isRead
           } = book; */
          const article = document.createElement("article");
          const properties = document.createElement("ul");
       /*    const b_title = document.createElement("li");
          const b_author = document.createElement("li");
          const b_pages = document.createElement("li");
          const b_isRead = document.createElement("li");
          b_title.textContent = title;
          b_author.textContent = author;
          b_pages.textContent = pages;
          b_isRead.textContent = isRead;
          properties.appendChild(b_title)
          properties.appendChild(b_author)
          properties.appendChild(b_pages)
          properties.appendChild(b_isRead)
          article.appendChild(properties);
          main.appendChild(article); */
       
          //try another method
          for(let prop in book) {
           if(book.hasOwnProperty(prop)) {
           const b_prop = document.createElement("li");
           b_prop.textContent = book[prop];
           properties.appendChild(b_prop);
           }
          }
          article.appendChild(properties);
          book_section.appendChild(article)
          
       })
       

}
library.forEach(book => {
 /*    const {
        title,
        author,
        pages,
        isRead
    } = book; */
   const article = document.createElement("article");
   const properties = document.createElement("ul");
/*    const b_title = document.createElement("li");
   const b_author = document.createElement("li");
   const b_pages = document.createElement("li");
   const b_isRead = document.createElement("li");
   b_title.textContent = title;
   b_author.textContent = author;
   b_pages.textContent = pages;
   b_isRead.textContent = isRead;
   properties.appendChild(b_title)
   properties.appendChild(b_author)
   properties.appendChild(b_pages)
   properties.appendChild(b_isRead)
   article.appendChild(properties);
   main.appendChild(article); */

   //try another method
   for(let prop in book) {
    if(book.hasOwnProperty(prop)) {
    const b_prop = document.createElement("li");
    b_prop.textContent = book[prop];
    properties.appendChild(b_prop);
    }
   }
   article.appendChild(properties);
   if(!Array.from(book_section.children).includes(article)) {
    book_section.appendChild(article)
   } else return;
   

})

//Add a new book button that allows users to input details of new book in a form
newBook.addEventListener("click",() => {
    dialog.showModal();
})

dialog.addEventListener("close",(e) => {
    displayBooks();
})

confirmBtn.addEventListener("click",(e) => {
    e.preventDefault();
    const book = new Book(title.value,author.value,pages.value,isRead.value);
    library.push(book);
    dialog.close(); 
})