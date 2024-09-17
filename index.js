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
const status_dialog = document.querySelector("#select-status")

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

//Create an interface to show the contents of the array
//Display the books on the page: table or cards
function displayBooks() {
    book_section.replaceChildren();
    library.forEach(book => {
      
          const article = document.createElement("article");
          const remove = document.createElement("button");
          remove.textContent = "remove"
          const changeStatus = document.createElement("button");
          changeStatus.textContent = "change status"
          article.setAttribute("data-key",library.indexOf(book))
          const properties = document.createElement("ul");
      
          for(let prop in book) {
           if(book.hasOwnProperty(prop)) {
           const b_prop = document.createElement("li");
           b_prop.textContent = book[prop];
           properties.appendChild(b_prop);
           }
          }
          properties.appendChild(remove);
          properties.appendChild(changeStatus);
          article.appendChild(properties);
          book_section.appendChild(article);

          remove.addEventListener("click",(e) => {
            let key = Number(e.target.parentElement.parentElement.getAttribute("data-key"));
            library.splice(key,1);
            displayBooks();
    
          })

          changeStatus.addEventListener("click",(e) => {
            let key = Number(e.target.parentElement.parentElement.getAttribute("data-key"));
            library[key].isRead = library[key].isRead === false ? true : false;
            displayBooks()
          })

         
          
          
       })
      
       

}
displayBooks()
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

cancelBtn.addEventListener("click",(e) => {
    e.preventDefault();
    dialog.close();
})