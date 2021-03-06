import mongoose from 'mongoose';

let bookSchema = mongoose.Schema({
    title: String,
    author: String,
    votes: Number
});

let userSchema = mongoose.Schema({
    id: Number,
    email: String,
    password: String,
    iat: Number
});

let favoriteSchema = mongoose.Schema({
    email: String,
    favorites: [String]
})

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

let getUser = (id, iat, errorCallback, callback) => {
    User.findOne({_id: mongoose.Types.ObjectId(id), iat: iat}, (error, user) => {
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

let addUser = (email, password, iat, errorCallback, callback) => {
    let newUser = new User({email: email, password: password, iat: iat});
    newUser.save((err, user) => {
        if (err) {
            errorCallback(err);
            return;
        }

        callback(user);
    });
}

let updateUserToken = (email, iat, errorCallback, callback) => {
    User.findOne({email: email}, (error, user) => {
        if (error) {
            errorCallback(error);
            return;
        }

        user.set({iat: iat});

        user.save((err, updatedUser) => {
            if (err) {
                errorCallback(err);
                return;
            }

            callback(updatedUser);
        })
    })
}

let Favorite = mongoose.model('Favorite', favoriteSchema);

let addFavorite = (email, bookId, addOrRemove, errorCallback, callback) => {
    Favorite.findOne({email: email}, (error, favorite) => {
        if (error) {
            errorCallback(error);
            return;
        }

        if (favorite) {
            let { favorites } = favorite;
            if (addOrRemove === 'a') {
                favorites.push(bookId);
            } else if (addOrRemove === 'r') {
                var index = favorites.indexOf(bookId);
                if (index > -1) {
                    favorites.splice(index, 1);
                }
            }

            favorite.set({favorites: favorites});

            favorite.save((err, data) => {
                if (err) {
                    errorCallback(err);
                    return;
                }

                callback(data);
            });
        } else {
            if (addOrRemove === 'r') {
                errorCallback('Can remove favorite')
                return;
            }

            let favorite = new Favorite({email: email, favorites: [bookId]});

            favorite.save((err, data) => {
                if (err) {
                    errorCallback(err);
                    return;
                }

                callback(data);
            });
        }
    })
}

let getFavorites = (email, errorCallback, callback) => {
    Favorite.findOne({email: email}, (error, favorites) => {
        if (error) {
            errorCallback(error);
            return;
        }

        callback(favorites);
    })
}

export const database = {
    getBooks: getBooks,
    addBook: addBook,
    voteBook: voteBook,
    search: search,
    getUser: getUser,
    getUserByEmail: getUserByEmail,
    addUser: addUser,
    updateUserToken: updateUserToken,
    addFavorite: addFavorite,
    getFavorites: getFavorites
}