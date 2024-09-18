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
/* const main = document.querySelector(".main")
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
 */
(function() {
    const Library = {
        library: [
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
        ],
        init: function() {
            this.cacheDom();
            this.render();
            this.bindEvents();
    
        },
        cacheDom: function() {
            this.main = document.querySelector(".main");
            this.book_section = this.main.querySelector(".books");
            this.dialog = this.main.querySelector("#m-dialog");
            this.confirmBtn = this.main.querySelector("#confirmBtn");
            this.cancelBtn = this.main.querySelector("#cancelBtn");
            this.author = this.main.querySelector("#author");
            this.title = this.main.querySelector("#title");
            this.pages = this.main.querySelector("#pages");
            this.isRead = this.main.querySelector("#isRead");
            this.newBook = this.main.querySelector(".new-book");
            this.status_dialog = this.main.querySelector("#select-status");
            this.removeButtons = this.main.querySelectorAll("article ul button:first-of-type")
            
        },
        render: function() {
            this.book_section.replaceChildren();
            this.library.forEach(book => {
              
                  const article = document.createElement("article");
                  this.remove = document.createElement("button");
                  this.remove.textContent = "remove"
                  this.changeStatus = document.createElement("button");
                  this.changeStatus.textContent = "change status"
                  article.setAttribute("data-key",this.library.indexOf(book))
                  const properties = document.createElement("ul");
                  console.log(this.remove,this.changeStatus);
              
                  for(let prop in book) {
                   if(book.hasOwnProperty(prop)) {
                   const b_prop = document.createElement("li");
                   b_prop.textContent = book[prop];
                   properties.appendChild(b_prop);
                   }
                  }
                  properties.appendChild(this.remove);
                  properties.appendChild(this.changeStatus);
                  article.appendChild(properties);
                  this.book_section.appendChild(article);
                })
                console.log(this.main);
                this.removeButtons = this.main.querySelectorAll("article ul button:first-of-type");
                this.changeStatusButtons  = this.main.querySelectorAll("article ul button:nth-of-type(2)");
            },
         
            bindEvents: function() {
                this.newBook.addEventListener("click",this.addBook.bind(this))
                
                this.dialog.addEventListener("close",this.closeModal.bind(this))
                
                this.confirmBtn.addEventListener("click",this.confirm.bind(this))
                
                this.cancelBtn.addEventListener("click",this.cancel.bind(this))

                this.removeButtons.forEach(button => {
                    button.addEventListener("click",this.removeBook.bind(this))
                })
                
                this.changeStatusButtons.forEach(button => {
                    button.addEventListener("click",this.changeBookStatus.bind(this))
                })

            },
            addBook: function() {
                    console.log(this.newBook);
                    this.dialog.showModal();
            },
            closeModal: function() {
                this.render();
            },
            confirm: function(e) {
                    e.preventDefault();
                    const book = {
                        title: this.title.value,
                        author: this.author.value,
                        pages: this.pages.value,
                        isRead: this.isRead.value
                    }
                    this.library.push(book);
                    this.dialog.close(); 
            },
            cancel: function(e) {
                    e.preventDefault();
                    this.dialog.close(); 
            },
            removeBook: function(e) {
                    
                    let key = Number(e.target.parentElement.parentElement.getAttribute("data-key"));
                    console.log(key);
                    this.library.splice(key,1);
                    this.render();
                    this.bindEvents();

            
            },
            changeBookStatus: function(e) {
            
                    let key = Number(e.target.parentElement.parentElement.getAttribute("data-key"));
                    this.library[key].isRead = this.library[key].isRead === false ? true : false;
                    this.render();
                    this.bindEvents();


            }


        }
    
    Library.init();

})();
