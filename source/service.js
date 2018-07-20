import 'isomorphic-fetch';

let addBook = book => {
    return fetch('/book', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('accesstoken')
          },
        body: JSON.stringify(book)
    })
};

let upvote = id => {
    return fetch('/upvote/'+id, {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('accesstoken')
        }
    });
}

let downvote = id => {
    return fetch('/downvote/'+id, {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('accesstoken')
        }
    });
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

let logout = email => {
    return fetch('/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email})
    })
}

let validateLogin = () => {
    return fetch('/validateLogin', {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('accesstoken')
        }
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
    validateLogin: validateLogin
}