import mongoose from 'mongoose';

let bookSchema = mongoose.Schema({
    title: String,
    votes: Number
});

let Book = mongoose.model('Book', bookSchema);
let getBooks = (errorCallback, callback) => {
        Book.find((err, books) => {
        if (err) {
            errorCallback(err);
            return;
        }

        callback(books);
    })
};

let addBook = (title, errorCallback, callback) => {
    var newBook = new Book({title: title, votes: 0});
    newBook.save((err, book) => {
        if (err) {
            errorCallback(err);
            return;
        }

        callback(book);
    })
};

export const database = {
    getBooks: getBooks,
    addBook: addBook
}