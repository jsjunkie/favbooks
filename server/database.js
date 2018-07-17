import mongoose from 'mongoose';

let bookSchema = mongoose.Schema({
    title: String,
    votes: Number
});

let Book = mongoose.model('Book', bookSchema);
let getBooks = (errorCallback, callback) => {
        Book.find({}, null, { sort: { votes: -1, _id : - 1} }, (err, books) => {
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

let voteBook = (id, upvote, errorCallback, callback) => {
    Book.findById(id, (err, book) => {
        if (err) {
            errorCallback(err);
            return;
        }

        let votes = upvote ? book.votes + 1 : book.votes - 1;
        book.set({votes});

        book.save((err, updatedBook) => {
            if (err) {
                errorCallback(err);
                return;
            }

            callback(updatedBook);
        });
    })
};

export const database = {
    getBooks: getBooks,
    addBook: addBook,
    voteBook: voteBook
}