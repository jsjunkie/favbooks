import mongoose from 'mongoose';

var bookSchema = mongoose.Schema({
    title: String,
    votes: Number
});

var Book = mongoose.model('Book', bookSchema);
var getBooks = (errorCallback, callback) => {
        Book.find((err, books) => {
        if (err) errorCallback(err);

        callback(books);
    })
};

export const database = {
    getBooks: getBooks
}