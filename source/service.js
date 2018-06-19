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
    return fetch('downvote/'+id);
}

export const service = {
    addBook: addBook,
    upvote: upvote,
    downvote: downvote
}