import 'isomorphic-fetch';

let addBook = book => {
    return fetch('/book', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(book)
    })
};

let upvote = id => {
    return fetch('/upvote/'+id);
}

let downvote = id => {
    return fetch('/downvote/'+id);
}

let search = str => {
    return (str.trim() !== '' ? fetch('/search/'+str) : fetch('/books'));
}

let login = user => {
    return fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
}

let signup = user => {
    return fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
}

export const service = {
    addBook: addBook,
    upvote: upvote,
    downvote: downvote,
    search: search,
    login: login,
    signup: signup
}