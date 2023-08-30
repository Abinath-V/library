let library=[];
function addBook(event){
    event.preventDefault();
    let book={
        title : document.getElementById('title').value,
        author : document.getElementById('author').value,
        yearPublished : document.getElementById('year').value,
        readStatus : document.getElementById('read').value,
        getSummary:function(){
            return `The ${this.title} written by ${this.author} published in ${this.yearPublished}`;
        },
        toggleReadStatus:function(){
            return `The Read Status of Book ${this.readStatus}`;
        }
    }
    library.push(book)
    console.log('Add Book:')
    console.log(book.getSummary());
    console.log(book.toggleReadStatus());
  
    function addBookToFront(event){
        event.preventDefault();
        library.unshift(book)
        console.log(book.getSummary());
        console.log(book.toggleReadStatus());
    } 

}

function addBookToFront(event){
    event.preventDefault();
    let book={
        title : document.getElementById('title').value,
        author : document.getElementById('author').value,
        yearPublished : document.getElementById('year').value,
        readStatus : document.getElementById('read').value,
        getSummary:function(){
            return `The ${this.title} written by ${this.author} published in ${this.yearPublished}`;
        },
        toggleReadStatus:function(){
            return `The Read Status of Book ${this.readStatus}`;
        }
    }
    console.log('Add Book To First:')
    
        library.unshift(book)
        console.log(book.getSummary());
        console.log(book.toggleReadStatus());
    } 


function removeLastBook(event){
     event.preventDefault();
     library.pop();
     console.log('Remove a last book');
     console.log(library);
    
}


function removeFirstBook(event){
    event.preventDefault();
    library.shift();
    console.log('Remove a last book');
    console.log(library);
}

function getAllTitles(event){
    event.preventDefault();
    console.log('All the titles:');
    library.forEach(item => console.log(item.title));
}

function getBooksByAuthor(event){
    event.preventDefault();
    console.log('Books written by Author:');
    library.forEach(item => console.log(item.title,'written by',item.author));

}

function removeBookByTitle(event){
    event.preventDefault();

}

function getBooksByReadStatus(event){
    event.preventDefault();

}
