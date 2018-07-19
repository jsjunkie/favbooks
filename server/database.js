import mongoose from 'mongoose';

let bookSchema = mongoose.Schema({
    title: String,
    author: String,
    votes: Number
});

let userSchema = mongoose.Schema({
    id: Number,
    email: String,
    password: String
});

bookSchema.index({title: 'text', author: 'text'});

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

let addBook = (title, author, errorCallback, callback) => {
    var newBook = new Book({title: title, author: author, votes: 0});
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

let search = (str, errorCallback, callback) => {
    Book.find({$text: {$search: str}}, null, { sort: { votes: -1, _id : - 1} }, (err, books) => {
        if (err) {
            errorCallback(err);
            return;
        }

        callback(books);
    });
}

let User = mongoose.model('User', userSchema);

let getUser = (id, errorCallback, callback) => {
    User.findOne({id: id}, (error, user) => {
        if (error) {
            errorCallback(error);
            return;
        }

        callback(user);
    });
}

let getUserByEmail = (email, errorCallback, callback) => {
    User.findOne({email: email}, (error, user) => {
        if (error) {
            errorCallback(error);
            return;
        }

        callback(user);
    });
}

let addUser = (email, password, errorCallback, callback) => {
    let newUser = new User({email: email, password: password});
    newUser.save((err, user) => {
        if (err) {
            errorCallback(err);
            return;
        }

        callback(user);
    });
}

export const database = {
    getBooks: getBooks,
    addBook: addBook,
    voteBook: voteBook,
    search: search,
    getUser: getUser,
    getUserByEmail: getUserByEmail,
    addUser: addUser
}