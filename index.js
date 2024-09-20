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
class State {
    library = [
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
    
    constructor() {
        this.main = document.querySelector(".main")
        this.book_section = document.querySelector(".books")
        this.dialog = document.querySelector("#m-dialog");
        this.confirmBtn = document.querySelector("#confirmBtn");
        this.cancelBtn = document.querySelector("#cancelBtn");
        this.author = document.querySelector("#author");
        this.title = document.querySelector("#title");
        this.pages = document.querySelector("#pages");
        this.isRead = document.querySelector("#isRead");
        this.newBook = document.querySelector(".new-book");
        this.status_dialog = document.querySelector("#select-status")


    }
  render() {
    this.book_section.replaceChildren();
    this.library.forEach(book => {
      
          const article = document.createElement("article");
          const remove = document.createElement("button");
          remove.textContent = "remove"
          const changeStatus = document.createElement("button");
          changeStatus.textContent = "change status"
          article.setAttribute("data-key",this.library.indexOf(book))
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
          this.book_section.appendChild(article);

          remove.addEventListener("click",(e) => {
            let key = Number(e.target.parentElement.parentElement.getAttribute("data-key"));
            this.library.splice(key,1);
            this.render();
    
          })

          changeStatus.addEventListener("click",(e) => {
            let key = Number(e.target.parentElement.parentElement.getAttribute("data-key"));
            this.library[key].isRead = this.library[key].isRead === false ? true : false;
            this.render();
          })
  })
 }
 bindEvents() {
    this.newBook.addEventListener("click",() => {
        this.dialog.showModal();
    })
    
    this.dialog.addEventListener("close",(e) => {
       this.render();
    })
    
    this.confirmBtn.addEventListener("click",(e) => {
        e.preventDefault();
        const book = new Book(title.value,author.value,pages.value,isRead.value);
        this.library.push(book);
        this.dialog.close(); 
    })
    
    this.cancelBtn.addEventListener("click",(e) => {
        e.preventDefault();
        this.dialog.close();
    })

 }

}

class Book {
    constructor(title = "",author="",pages=0,isRead=false) {
        this.title = title;
        this.author = author;
        this.isRead = isRead;
        this.pages = pages;
    }
}

const libraryState = new State()
libraryState.render();
libraryState.bindEvents();
