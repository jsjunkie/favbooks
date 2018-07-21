import 'isomorphic-fetch';

let addBook = book => {
    return fetch('/book', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        credentials: 'same-origin',
        body: JSON.stringify(book)
    })
};

let upvote = id => {
    return fetch('/upvote/'+id, {
        credentials: 'same-origin'
    });
}

let downvote = id => {
    return fetch('/downvote/'+id, {
        credentials: 'same-origin'
    });
}

let search = str => {
    return (str.trim() !== '' ? fetch('/search/'+str) : fetch('/books'));
}

let login = user => {
    return fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'same-origin',
        body: JSON.stringify(user)
    })
}

let signup = user => {
    return fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin',
        body: JSON.stringify(user)
    })
}

let logout = email => {
    return fetch('/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin',
        body: JSON.stringify({email})
    })
}

let validateLogin = () => {
    return fetch('/validateLogin', {
        credentials: 'same-origin'
    })
}

let addFavorite = (email, bookId, addOrRemove) => {
    return fetch('/addFavorite', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin',
        body: JSON.stringify({email, bookId, addOrRemove})
    })
}

let getFavorites = email => {
    return fetch('/getFavorites', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin',
        body: JSON.stringify({email})
    })
}

export const service = {
    addBook: addBook,
    upvote: upvote,
    downvote: downvote,
    search: search,
    login: login,
    signup: signup,
    logout: logout,
    validateLogin: validateLogin,
    addFavorite: addFavorite,
    getFavorites: getFavorites
}