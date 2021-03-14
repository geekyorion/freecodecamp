// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookList, bookName) {
    const allBooks = bookList.slice();
    allBooks.push(bookName);
    return allBooks;

    // Change code above this line
}

// Change code below this line
function remove(bookList, bookName) {
    const allBooks = bookList.slice();
    var book_index = allBooks.indexOf(bookName);
    if (book_index >= 0) {

        allBooks.splice(book_index, 1);
        return allBooks;

        // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/refactor-global-variables-out-of-functions
